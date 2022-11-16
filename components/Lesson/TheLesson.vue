<template>
    <div :class="$style.mainContainer">
        <TheLessonHeader :class="$style.header" />
        <div :class="$style.container">
            <TheDescription />
            <TheEditor :code="code" :class="$style.editor" />
            <TheWorld :options="options" :class="$style.world">
                <template #options>
                    <slot name="options" />
                </template>
            </TheWorld>
        </div>
        <TheLessonFooter />
    </div>
</template>

<script setup lang="ts">
import TheDescription from "~/components/Lesson/TheDescription.vue";
import TheEditor from "~/components/Lesson/TheEditor.vue";
import TheLessonFooter from "~/components/Lesson/TheLessonFooter.vue";
import TheLessonHeader from "~/components/Lesson/TheLessonHeader.vue";
import TheWorld from "~/components/Lesson/TheWorld.vue";
import WorldOptions from "~/interfaces/WorldOptions";
import useLessonStore from "~/stores/lesson";

const props = defineProps<{
    code: string
    options: WorldOptions
}>();

const store = useLessonStore();

store.setLessonNumber(props.options.lesson || undefined);
store.setLessonTitle(props.options.title);
store.setNextLesson(props.options.nextLesson || undefined);
store.setPreviousLesson(props.options.previousLesson || undefined);

</script>

<style module>
.mainContainer {
    height: 100vh;
    display: grid;
    grid: 5rem auto 3rem/ auto;
}

.header {
    width: 100%;
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: min-content 5fr 3fr;
}
.world {
    grid-column: 3/4;
    border-left: 1px solid var(--color-gray-500);
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
