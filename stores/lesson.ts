import { defineStore } from "pinia";
import { ref } from "vue";

const useLessonStore = defineStore("lesson", () => {
    const lessonNumber = ref(null);
    const lessonTitle = ref(null);
    const nextLesson = ref(null);
    const previousLesson = ref(null);

    const setLessonNumber = (value: number | undefined) => {
        lessonNumber.value = value;
    };

    const setLessonTitle = (value: string) => {
        lessonTitle.value = value;
    };

    const setNextLesson = (value: string | undefined) => {
        nextLesson.value = value;
    };

    const setPreviousLesson = (value: string | undefined) => {
        previousLesson.value = value;
    };

    return {
        lessonNumber,
        lessonTitle,
        nextLesson,
        previousLesson,
        setLessonNumber,
        setLessonTitle,
        setNextLesson,
        setPreviousLesson,
    };
});

export default useLessonStore;
