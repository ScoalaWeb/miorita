<template>
    <div :class="$style.world">
        <div ref="tableWrapper" :class="$style.table_wrapper">
            <div
                :class="$style.sheepfold"
                :style="{
                    ...cellWidthStyle,
                    '--row-count': options.size.y,
                    '--col-count': options.size.x,
                }"
            >
                <div
                    v-for="(cell) in cells"
                    :key="cell.id"
                    :class="[cell.css]"
                    :style="{
                        gridRowStart: cell.gridRow,
                        gridColumnStart: cell.gridColumn,
                    }"
                >
                    <div
                        v-for="(obj, objIndex) in cell.objects"
                        :key="objIndex + obj.type"
                    >
                        <template v-if="obj.type === 'grass'">
                            <GrassObject
                                :class="[$style.object, $style.grass]"
                                style="fill: green"
                            />
                        </template>
                        <template v-if="obj.type === 'hatchet'">
                            <HatchetObject
                                :class="[$style.object, $style.hatchet]"
                            />
                        </template>
                        <template v-if="obj.type === 'vitoria'">
                            <VitoriaObject
                                :class="[$style.object, $style.vitoria]"
                            />
                        </template>
                    </div>
                    <img
                        v-if="cell.withCharacter"
                        src="~/assets/img/character.svg"
                        :alt="$t('texts.main-labels.labels.brand')"
                        :class="$style.character"
                        draggable="false"
                    >
                </div>
            </div>
        </div>
        <div :class="$style.toolbar">
            <span :class="$style.buttons">
                <TheRunButton
                    v-if="!isRunning"
                    @run="run"
                    @debug="debug"
                />
                <BaseActionButton
                    v-if="isRunning && actions.debug"
                    icon="mi-step-over"
                    :class="$style.button"
                    data-cypress="button__stepover"
                    @click="stepOver"
                >
                    {{ $t('texts.button-text.buttons.step-over') }}
                </BaseActionButton>
                <BaseActionButton
                    v-if="!isRunning && canReset"
                    icon="mi-undo"
                    :class="[$style.button, $style.reset]"
                    data-cypress="button__reset"
                    @click="reset"
                >
                    {{ $t('texts.button-text.buttons.reset') }}
                </BaseActionButton>
                <BaseActionButton
                    v-if="isRunning"
                    icon="mi-stop"
                    :class="$style.button"
                    data-cypress="button__stop"
                    @click="stop"
                >
                    {{ $t('texts.button-text.buttons.stop') }}
                </BaseActionButton>
            </span>
            <slot name="options" />
        </div>
        <div ref="console" :class="$style.console" data-cypress="console">
            <div
                v-for="({message, lineNumber, args}, index) in moves"
                :key="message + index"
            >
                <span :class="message.startsWith('error-') ? $style.error : false">
                    <span
                        v-if="lineNumber"
                        :class="$style.lineNumber"
                    >
                        {{ lineNumber }}
                    </span>
                    {{ $t(`texts.console-output.message.${message}`, args) }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Howl } from "howler";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BaseActionButton from "./BaseActionButton.vue";
import TheRunButton from "./TheRunButton.vue";
import GrassObject from "~/assets/img/objects/grass.svg?inline";
import HatchetObject from "~/assets/img/objects/hatchet.svg?inline";
import VitoriaObject from "~/assets/img/objects/vitoria.svg?inline";
import WorldCurrent from "~/interfaces/WorldCurrent";
import WorldOptions, { Coordinates } from "~/interfaces/WorldOptions";
import Actions from "~/lib/Actions";
import makeRunner from "~/lib/makeRunner";
import useLessonStore from "~/stores/lesson";
import "~/assets/css/icons.css";

@Component({
    components: {
        GrassObject,
        HatchetObject,
        VitoriaObject,
        TheRunButton,
        BaseActionButton,
    },
})
export default class TheWorld extends Vue {
    @Prop({
        default: () => ({
            size: { x: 4, y: 4 },
            start: {
                position: { x: 0, y: 0 },
                orientation: "E",
            },
            walls: {},
            objects: [
                {
                    type: "grass",
                    position: { x: 1, y: 0 },
                },
            ],
            timeout: 1000,
        } as WorldOptions),
    }) options!: WorldOptions;

    @Prop() readonly width!: number;

    get cells () {
        const { options: { size } } = this;
        const cells = [];

        for (let row = 0; row < size.y; row += 1) {
            for (let col = 0; col < size.x; col += 1) {
                const gridRow = row * 2 + 1;
                const gridColumn = col * 2 + 1;
                const withCharacter = this.isCurrent(row, col);
                const css = [this.$style.cell];

                if (withCharacter) {
                    switch (this.current.orientation) {
                    case "N":
                        css.push(this.$style.facing_up);
                        break;
                    case "S":
                        css.push(this.$style.facing_down);
                        break;
                    case "W":
                        css.push(this.$style.facing_left);
                        break;
                    case "E":
                        css.push(this.$style.facing_right);
                        break;
                    default:
                    }
                }

                cells.push({
                    row,
                    col,
                    gridRow,
                    gridColumn,
                    withCharacter,
                    css,
                    objects: this.objectsAt(row, col),
                });

                if (this.hasWallBottom(row, col)) {
                    cells.push({
                        row,
                        col,
                        gridRow: gridRow + 1,
                        gridColumn,
                        css: [this.$style.wall, this.$style.horizontal],
                    });
                }

                if (this.hasWallRight(row, col)) {
                    cells.push({
                        row,
                        col,
                        gridRow,
                        gridColumn: gridColumn + 1,
                        css: [this.$style.wall, this.$style.vertical],
                    });
                }
            }
        }

        return cells;
    }

    current:WorldCurrent = {
        position: { x: 0, y: 0 },
        orientation: "E",
        picked: {},
    };

    isCurrent (row:number, col:number) {
        const { current: { position: { x, y } } } = this;

        return row === y && col === x;
    }

    objectsAt (row:number, col:number) {
        if (this.actions) {
            return Object.values(this.actions.objects[`${col}x${row}`] || {});
        }
        return this.options.objects.filter(
            ({ position: { x, y } }) => row === y && col === x,
        );
    }

    get canReset () {
        const { current, options: { start } } = this;

        return current.orientation !== start.orientation ||
            current.position.x !== start.position.x ||
            current.position.y !== start.position.y;
    }

    get isRunning () {
        return this.actions && !this.actions.ended;
    }

    hasWallRight (row:number, col:number) {
        return this.options.walls.x &&
            this.options.walls.x.some((pos:Coordinates) => row === pos.y && col === pos.x);
    }

    hasWallBottom (row:number, col:number) {
        return this.options.walls.y &&
            this.options.walls.y.some((pos:Coordinates) => row === pos.y && col === pos.x);
    }

    actions:Actions | null = null;

    moves:{
        message: string
        lineNumber?: number
        args?: any[]
    }[] = [];

    @Watch("moves", { deep: true })
    onMovedUpdated () {
        this.$nextTick(() => {
            // @ts-ignore
            this.$refs.console.scrollTop = this.$refs.console.scrollHeight;
        });
    }

    @Watch("width", { deep: true })
    onWidthUpdated () {
        this.resizeCell();
    }

    run (debug = false) {
        this.moves = [];
        this.actions = new Actions(this.options, this.current, debug);
        this.actions.onMove((message, lineNumber, ...args) => {
            this.moves.push({ message, lineNumber, args });
        });
        let runner: (_action: Actions) => Promise<any>;

        try {
            runner = makeRunner(this.store.code);
        } catch (e) {
            this.moves.push({ message: "error-build", args: [e.message] });
            this.actions = null;
            return;
        }

        runner(this.actions)
            .then(() => {
                this.moves.push({ message: "end" });
            })
            .catch((e) => {
                (new Howl({
                    src: `${this.$nuxt.context.base}sounds/bleating.mp3`,
                })).play();
                debugger;
                if (e.isRunnerError) {
                    this.moves.push({ message: `error-${e.message}` });
                } else {
                    this.moves.push({ message: "error-generic", args: [e.message] });
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
            })
            .then(() => {
                this.actions.ended = true;
            });
        if (debug) {
            this.$nextTick(() => {
                if (this.actions) {
                    this.actions.stepOver();
                }
            });
        }
    }

    debug () {
        this.run(true);
    }

    stepOver () {
        if (this.actions) {
            this.actions.stepOver();
        }
    }

    stop () {
        if (this.actions) {
            this.actions.stop();
        }
    }

    cellWidth = "10%";

    get cellWidthStyle () {
        return {
            "--row-count": `${this.options.size.y}`,
            "--col-count": `${this.options.size.x}`,
            "--cell-width": `${this.cellWidth}`,
        };
    }

    resizeCell () {
        const wrapper = this.$refs.tableWrapper;
        if (!wrapper) {
            return;
        }

        const cellWidth = Math.floor(
            Math.min(
                // @ts-ignore
                wrapper.clientWidth / this.options.size.x,
                // @ts-ignore
                wrapper.clientHeight / this.options.size.y,
            ) * 0.85,
        );
        this.cellWidth = `${cellWidth}px`;
    }

    reset () {
        if (this.actions) {
            this.actions.stop();
        }
        const { start } = this.options;
        this.current = {
            position: { ...start.position },
            orientation: start.orientation || "E",
            picked: {},
        };
        this.moves = [];
    }

    store = null;

    created () {
        this.reset();
        this.store = useLessonStore();
    }

    resizeCellListener?: ()=>void;

    mounted () {
        this.resizeCell();

        this.resizeCellListener = this.resizeCell.bind(this);
        window.addEventListener("resize", this.resizeCellListener);
    }

    destroyed () {
        // @ts-ignore
        window.removeEventListener("resize", this.resizeCellListener);
    }
}
</script>

<style module lang="scss">
@import "../../assets/fonts/icons/Mioritza-Icons-v2.0/variables";

.world {
    display: flex;
    flex-direction: column;
    background-color: var(--sheepfold-background-color);
    user-select: none;
}

.table_wrapper {
    flex-grow: 1;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}

.sheepfold {
    --fence-width: calc(var(--cell-width) / 9);

    display: grid;
    grid-template-rows: 1fr repeat(calc(var(--row-count) - 1), var(--fence-width) 1fr);
    grid-template-columns: 1fr repeat(calc(var(--col-count) - 1), var(--fence-width) 1fr);
    max-width: 100%;
}

.cell {
    position: relative;
    align-self: center;
    justify-self: center;

    // Older browsers
    min-height: var(--cell-width);
    min-width: var(--cell-width);
    padding-bottom: var(--cell-width);

    // Newer browsers
    aspect-ratio: 1 / 1;

    &::before {
        content: $mi-plus;
        font-family: Mioritza-Icons, fantasy;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: calc(var(--cell-width) / 6);
        color: var(--element-accent-color);
    }
}

.wall {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    &.vertical {
        background-image: url("~/assets/img/fenceY.svg");
    }
    &.horizontal {
        background-image: url("~/assets/img/fenceX.svg");
    }
}

.object {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;

    &.grass {
        transform: scale(0.65) translateY(40%);
    }

    &.hatchet {
        transform: scale(0.95) translateY(8%);
    }

    &.vitoria {
        transform: scale(0.95);
    }
}

.character {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    z-index: 2;
}

.toolbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-gray-500);
}

.buttons {
    display: flex;
}

.button {
    padding: 0.38rem 1.68rem;
    background-color: var(--secondary-button);
    margin: 0.68rem 0.81rem;
    font-size: 1.25rem;
    border: 0;
    color: var(--color-white);
    cursor: pointer;
    border-radius: 1.25rem;
    white-space: nowrap;

    &:hover {
        background: var(--secondary-button-hover);
    }
}

.reset {
    padding: 0 0.81rem;
}

.facing_up .character {
    transform: rotate(-90deg);
}

.facing_down .character {
    transform: rotate(90deg);
}

.facing_left .character {
    transform: scaleX(-1);
}

.console {
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 0.5em;
    background: var(--background-color);
    color: var(--text-color);
    padding: 1rem;
    height: 9.5rem;
}

.error {
    color: var(--color-red);
}

.lineNumber {
    color: var(--console-line-number);
}

</style>
