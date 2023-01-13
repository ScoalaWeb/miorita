<template>
    <div
        :class="$style.mainContainer"
        @mousemove="drag"
        @mouseup="dragStop"
    >
        <TheLessonHeader :class="$style.header" />
        <div
            :class="$style.container"
            :style="{'--sheepfold-width': `${sheepfoldWidthCss}`}"
        >
            <TheDescription v-model="isDescriptionOpen" :lesson="lesson" />
            <TheEditor :code="lesson.workCode" :class="$style.editor" />
            <TheResetButton />
            <button
                :class="[$style.resize, dragging && $style.dragging]"
                :title="$t('texts.screen-reader.lesson.drag-to-resize')"
                @mousedown="dragStart"
            >
                <span class="invisible">{{ $t("texts.screen-reader.lesson.drag-to-resize") }}</span>
            </button>
            <TheWorld
                ref="sheepfold"
                :options="options"
                :class="$style.world"
                :width="sheepfoldWidth"
            >
                <template #options>
                    <slot name="options" />
                </template>
            </TheWorld>
        </div>
        <TheLessonFooter :lesson="lesson" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, Ref, computed, nextTick, watch } from "vue";
import TheDescription from "./TheDescription.vue";
import TheEditor from "./TheEditor.vue";
import TheLessonFooter from "./TheLessonFooter";
import TheLessonHeader from "./TheLessonHeader.vue";
import TheResetButton from "./TheResetButton.vue";
import TheWorld from "./TheWorld.vue";
import LessonTranslation from "~/interfaces/LessonTranslation";
import WorldOptions from "~/interfaces/WorldOptions";
import useLessonStore from "~/stores/lesson";

const props = defineProps<{
    lesson: LessonTranslation
    options: WorldOptions
}>();

const store = useLessonStore();
store.setOptions({
    ...props.options,
    ...props.lesson,
});

const sheepfold = ref();
const isDescriptionOpen: Ref<boolean> = ref(true);

const sheepfoldWidth:Ref<number> = ref(0);
const dragging:Ref<boolean> = ref(false);

const minWidth:Ref<number> = ref(0);
const maxWidth:Ref<number> = ref(0);

const sheepfoldWidthCss = computed(() => `${sheepfoldWidth.value || (minWidth.value + maxWidth.value) / 2}px`);

const calculateConstraints = () => {
    minWidth.value = window.innerWidth * props.options.size.x * 0.05;
    maxWidth.value = window.innerWidth * (isDescriptionOpen.value ? 0.40 : 0.50);
};

const applyConstraints = () => {
    if (sheepfoldWidth.value < minWidth.value) {
        sheepfoldWidth.value = minWidth.value;
    } else if (sheepfoldWidth.value > maxWidth.value) {
        sheepfoldWidth.value = maxWidth.value;
    }
};

const onResize = () => {
    calculateConstraints();

    applyConstraints();
};

const canResize = (value: number) => {
    const newX = sheepfoldWidth.value - value;
    if (newX <= minWidth.value) {
        return false;
    }
    return newX < maxWidth.value;
};

const dragStart = () => {
    dragging.value = true;
};

const dragStop = () => {
    dragging.value = false;
    store.editor.layout();
};

const drag = (e: MouseEvent) => {
    if (dragging.value) {
        const { movementX } = e;
        if (canResize(movementX)) {
            sheepfoldWidth.value -= movementX;
            store.editor.layout();
        }
    }
};

watch(isDescriptionOpen, () => {
    calculateConstraints();
    applyConstraints();
});

onMounted(() => {
    calculateConstraints();

    nextTick(() => {
        const { width } = sheepfold.value.$el.getBoundingClientRect();
        sheepfoldWidth.value = width;
    });
    window.addEventListener("resize", onResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
});
</script>

<style module lang="scss">
.mainContainer {
    height: 100vh;
    display: grid;
    grid: 5rem auto 3rem/ auto;
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: min-content 5fr min-content min-content var(--sheepfold-width);
}

.resize {
    --hitbox-width: 1rem;

    background: transparent;
    border: 0;
    grid-column: 4/5;
    position: absolute;
    width: var(--hitbox-width);
    height: 100%;
    left: calc(var(--hitbox-width) * -0.5);
    cursor: ew-resize;

    &.dragging, &:hover, &:active {
        --hitbox-width: 2rem;
    }
}

.world {
    grid-column: 5/6;
    border-left: 1.5px solid var(--color-gray-500);
}

@media (orientation: portrait) {
    .container {
        flex-direction: column-reverse;
    }

    .editor {
        height: 50%;
    }

    .world {
        height: 50%;
    }
}
</style>
