import { ref } from "vue";
import editorApi from "@/lib/editorApi";
import WorldOptions from "~/interfaces/WorldOptions";

// @ts-ignore
export default function editorLessons ({ selectedLanguage }) {
    const lessonIndex = ref<number | null>(null);
    const category = ref<string>("");

    const selectIndex = (index: number) => {
        lessonIndex.value = index;
        localStorage.setItem("lessonIndex", `${index}`);
    };

    const selectCategory = (type: string) => {
        category.value = type;
        localStorage.setItem("lessonCategory", type);
    };

    const url = `api/language?lang=${selectedLanguage.value}`;

    const handleChange = async (lessons: Array<WorldOptions>) => {
        const data = {
            path: [
                category.value,
            ],
            text: lessons,
        };

        await editorApi(url, { data, method: "PATCH" });
    };

    return {
        selectIndex,
        selectCategory,
        handleChange,
        lessonIndex,
        category,
    };
}
