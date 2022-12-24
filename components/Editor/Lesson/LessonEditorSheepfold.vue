<template>
    <LessonContainer section="Sheepfold">
        <div class="size_box">
            <LessonResize
                v-for="axis in Object.keys(sheepfold.size)"
                :key="axis"
                :axis="axis"
                :value="sheepfold.size[axis]"
            />
        </div>
        <div ref="tableWrapper" class="table_wrapper">
            <div
                class="sheepfold"
                :style="{
                    ...cellWidthStyle
                }"
            >
                <div
                    v-for="(cell) in cells"
                    :key="cell.id"
                    :class="{
                        [cell.css.join(' ')]: true,
                        'selected': cell.row === selectedCell?.row && cell.col === selectedCell?.col,
                    }"
                    :style="{
                        gridRowStart: cell.gridRow,
                        gridColumnStart: cell.gridColumn,
                    }"
                    @click="handleClick(cell)"
                >
                    <div
                        v-for="(obj, objIndex) in cell.objects"
                        :key="objIndex + obj.type"
                    >
                        <img
                            :src="require(`~/assets/img/objects/${obj.type}.svg`)"
                            :alt="obj.type"
                            :class="['object', obj.type]"
                        />
                    </div>
                    <img
                        v-if="cell.withCharacter"
                        src="~/assets/img/character.svg"
                        alt="Miorița"
                        class="character"
                        draggable="false"
                    >
                </div>
            </div>
        </div>
        <LessonOptions
            v-if="selectedCell"
            v-bind="{ selectedCell }"
            @orientationChanged="onOrientationChanged"
            @objectChanged="onObjectChanged"
        />
    </LessonContainer>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import LessonContainer from "./LessonContainer.vue";
import LessonOptions from "./LessonOptions.vue";
import LessonResize from "./LessonResize.vue";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

const sheepfold = computed(() => store.sheepfold);

const tableWrapper = ref(null);
const selectedCell = ref(null);

const toggleWall = (axis, x, y) => {
    const walls = sheepfold.value.walls[axis];
    const index = walls.findIndex(wall => wall.x === x && wall.y === y);
    if (index < 0) {
        walls.push({ x, y });
    } else {
        walls.splice(index, 1);
    }

    store.patchLesson(["walls", axis], walls);
};

const handleClick = (cell) => {
    const x = cell.col;
    const y = cell.row;
    const { type } = cell;

    switch (type) {
    case "cell":
        selectedCell.value = cell;
        break;
    case "horizontalWall":
        toggleWall("y", x, y);
        break;
    case "verticalWall":
        toggleWall("x", x, y);
        break;
    default:
        break;
    }
};

const onOrientationChanged = (orientation) => {
    store.patchLesson(["start"], {
        position: {
            x: selectedCell.value.col,
            y: selectedCell.value.row,
        },
        orientation,
    });
};

const onObjectChanged = (object) => {
    const { row, col } = selectedCell.value;

    const objects = [...sheepfold.value.objects];
    const index = objects.findIndex(
        ({ position }) => position.x === col && position.y === row,
    );

    if (index >= 0) {
        objects.splice(index, 1);
    } else {
        objects.push({
            position: { x: col, y: row },
            type: object,
            fixed: true,
        });
    }

    store.patchLesson(["objects"], objects);
};

// PRESET SHEEPFOLD
const cellWidth = ref("10%");

const cellWidthStyle = computed(() => ({
    "--row-count": sheepfold.value.size.y,
    "--col-count": sheepfold.value.size.x,
    "--cell-width": cellWidth.value,
}));

const resizeCell = () => {
    const wrapper = tableWrapper.value;
    if (!wrapper) {
        return;
    }

    const width = Math.floor(
        Math.min(
            wrapper.clientWidth / sheepfold.value.size.x,
            wrapper.clientHeight / sheepfold.value.size.y,
        ) * 0.85,
    );
    cellWidth.value = `${width}px`;
};

const hasWallRight = (row, col) => (
    sheepfold.value.walls.x && sheepfold.value.walls.x.some(pos => row === pos.y && col === pos.x)
);
const hasWallBottom = (row, col) => (
    sheepfold.value.walls.y && sheepfold.value.walls.y.some(pos => row === pos.y && col === pos.x)
);

const isCharacterAt = (row, col) => {
    const { start: { position: { x, y } } } = sheepfold.value;

    return row === y && col === x;
};

const objectsAt = (row, col) => sheepfold.value.objects.filter(({ position: { x, y } }) => row === y && col === x);

const cells = computed(() => {
    const { size } = sheepfold.value;
    const cellArr = [];

    for (let row = 0; row < size.y; row += 1) {
        for (let col = 0; col < size.x; col += 1) {
            const gridRow = row * 2 + 1;
            const gridColumn = col * 2 + 1;
            const withCharacter = isCharacterAt(row, col);
            const css = ["cell"];

            if (withCharacter) {
                switch (sheepfold.value.start.orientation) {
                case "N":
                    css.push("facing_up");
                    break;
                case "S":
                    css.push("facing_down");
                    break;
                case "W":
                    css.push("facing_left");
                    break;
                case "E":
                    css.push("facing_right");
                    break;
                default:
                }
            }

            cellArr.push({
                row,
                col,
                gridRow,
                gridColumn,
                withCharacter,
                css,
                objects: objectsAt(row, col),
                type: "cell",
            });

            cellArr.push({
                row,
                col,
                gridRow: gridRow + 1,
                gridColumn,
                wall: hasWallBottom(row, col),
                css: ["wall", "horizontal", hasWallBottom(row, col) ? "selected" : "unselected"],
                type: "horizontalWall",
            });

            cellArr.push({
                row,
                col,
                gridRow,
                gridColumn: gridColumn + 1,
                wall: hasWallRight(row, col),
                css: ["wall", "vertical", hasWallRight(row, col) ? "selected" : "unselected"],
                type: "verticalWall",
            });
        }
    }

    return cellArr;
});

onMounted(() => {
    resizeCell();
});

</script>

<style lang="scss">
@import "@/assets/fonts/icons/Mioritza-Icons-v2.0/variables";

.world {
    display: flex;
    flex-direction: column;
    background-color: var(--sheepfold-background-color);
    user-select: none;
}

.size_box {
    display: grid;
    margin-inline-start: 2rem;
}

.table_wrapper {
    flex-grow: 1;
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
}

.sheepfold {
    --fence-width: calc(var(--cell-width) / 9);

    display: grid;
    grid-template-rows: 1fr repeat(calc(var(--row-count) - 1), var(--fence-width) 1fr);
    grid-template-columns: 1fr repeat(calc(var(--col-count) - 1), var(--fence-width) 1fr);
    max-width: 100%;
    gap: calc(var(--cell-width) / 15);
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

    &.selected {
        border: 1px solid var(--color-green-lighter);
    }
}

.wall {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;

    &.vertical {
        background-image: url("~/assets/img/fenceY.svg");
    }
    &.horizontal {
        background-image: url("~/assets/img/fenceX.svg");
    }

    &.unselected {
        opacity: 0.2;
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

</style>
