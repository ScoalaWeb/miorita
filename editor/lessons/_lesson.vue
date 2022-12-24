<template>
    <LessonEditor />
</template>

<script>
import { mapActions } from "pinia";
import LessonEditor from "~/components/Editor/Lesson/LessonEditor.vue";
import useEditorStore from "~/stores/editor";

export default {
    name: "Lesson",
    components: {
        LessonEditor,
    },
    mounted () {
        this.selectCategory(localStorage.lessonCategory);
        this.selectIndex(localStorage.lessonIndex);
        this.getLesson(localStorage.lessonCategory, this.$route.params.lesson);
    },
    methods: {
        ...mapActions(useEditorStore, [
            "selectCategory",
            "selectIndex",
            "getLesson",
        ]),
    },
};
</script>
