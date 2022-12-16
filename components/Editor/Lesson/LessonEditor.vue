<template>
    <div v-if="store.currentTranslations" class="lesson_editor">
        <LessonEditorPanel section="Panel" />
        <LessonEditorCode section="Editor" />
        <LessonContainer section="Sheepfold">
            Content
        </LessonContainer>
        <LessonFooter />
    </div>
</template>

<script setup>
import LessonContainer from "./LessonContainer.vue";
import LessonEditorCode from "./LessonEditorCode.vue";
import LessonEditorPanel from "./LessonEditorPanel.vue";
import LessonFooter from "./LessonFooter.vue";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

</script>

<style lang="scss">
.lesson_editor {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 10fr;
    gap: 1.25rem;
}
</style>
