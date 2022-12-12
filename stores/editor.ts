import { defineStore } from "pinia";
import editorLanguages from "@/stores/editor-languages";
import editorLessons from "@/stores/editor-lessons";
import editorTexts from "@/stores/editor-texts";

const useEditorStore = defineStore("editor", () => {
    const languagesStore = editorLanguages();
    const textsStore = editorTexts(languagesStore);
    const lessonsStore = editorLessons(languagesStore);

    return {
        ...languagesStore,
        ...textsStore,
        ...lessonsStore,
    };
});

export default useEditorStore;
