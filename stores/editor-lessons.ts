import { ref, computed } from "vue";
import editorApi from "@/lib/editorApi";
import WorldOptions from "~/interfaces/WorldOptions";

// @ts-ignore
export default function editorLessons ({ currentTranslations, selectedLanguage }) {
    const selectedLesson = ref<WorldOptions | null>(null);
    const category = ref<string | null>();

    const selectLesson = (lesson: WorldOptions) => {
        selectedLesson.value = lesson;
    };

    const currentLessons = computed(() => currentTranslations.value[category.value ?? ""]);

    const removeLesson = async (lesson: WorldOptions) => {
        const index = currentLessons.value.indexOf(lesson);
        currentLessons.value.splice(index, 1);

        const data = {
            path: [
                category.value,
            ],
            text: currentLessons.value,
        };
        const url = `api/language?lang=${selectedLanguage.value}`;
        await editorApi(url, { data, method: "PATCH" });
    };

    const setCategory = (type: string) => {
        category.value = type;
    };

    const reorderLessons = async (lessons: Array<WorldOptions>) => {
        const data = {
            path: [
                category.value,
            ],
            text: lessons,
        };
        const url = `api/language?lang=${selectedLanguage.value}`;

        await editorApi(url, { data, method: "PATCH" });
    };

    return {
        selectLesson,
        selectedLesson,
        setCategory,
        removeLesson,
        reorderLessons,
    };
}
