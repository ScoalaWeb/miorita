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
import TheDescription from "./TheDescription.vue";
import TheEditor from "./TheEditor.vue";
import TheLessonFooter from "./TheLessonFooter";
import TheLessonHeader from "./TheLessonHeader.vue";
import TheWorld from "./TheWorld.vue";
import WorldOptions from "~/interfaces/WorldOptions";
import useLessonStore from "~/stores/lesson";

const props = defineProps<{
    code: string
    options: WorldOptions
}>();

const store = useLessonStore();

store.setOptions(props.options);
</script>

<style module>
.mainContainer {
    height: 100vh;
    display: grid;
    grid: 5rem auto 3rem/ auto;
}

.headbar {
    width: 100%;
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: min-content 5fr 3fr;
}
.world {
    grid-column: 3/4;
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
