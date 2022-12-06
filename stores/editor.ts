import { defineStore } from "pinia";
import editorLanguages from "@/stores/editor-languages";
import editorTexts from "@/stores/editor-texts";

const useEditorStore = defineStore("editor", () => {
    const languagesStore = editorLanguages();
    const textsStore = editorTexts(languagesStore);

    return {
        ...languagesStore,
        ...textsStore,
    };
});

export default useEditorStore;
