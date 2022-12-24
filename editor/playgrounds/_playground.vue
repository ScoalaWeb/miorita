<template>
    <LessonEditor />
</template>
<script>
import { mapActions } from "pinia";
import LessonEditor from "~/components/Editor/Lesson/LessonEditor.vue";
import useEditorStore from "~/stores/editor";

export default {
    name: "Playground",
    components: {
        LessonEditor,
    },
    mounted () {
        this.selectCategory(localStorage.lessonCategory);
        this.selectIndex(localStorage.lessonIndex);
        this.getLesson(localStorage.lessonCategory, this.$route.params.playground);
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
