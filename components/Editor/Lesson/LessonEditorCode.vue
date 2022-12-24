<template>
    <LessonContainer section="Code">
        <div class="code">
            <textarea
                :value="currentLesson.workCode"
                class="code_text"
                @input="handleInput"
            />
        </div>
    </LessonContainer>
</template>

<script setup lang="ts">
import { debounce } from "debounce";
import { computed } from "vue";
import LessonContainer from "./LessonContainer.vue";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

const currentLesson = computed(() => store.currentTranslations[store.category][store.lessonIndex ?? ""] ?? {});

const handleInput = debounce(async (e: Event) => {
    await store.patchLanguage(
        [
            store.category,
            store.lessonIndex,
            "workCode",
        ],
        (e.target as HTMLTextAreaElement).value,
    );
}, 1000, false);

</script>

<style scoped lang="scss">
.code {
    height: 100%;

    &_text {
        height: 100%;
        font-size: 0.87rem;
        font-family: var(--font-default);
        white-space: pre;
        overflow: auto;
    }
}
</style>
