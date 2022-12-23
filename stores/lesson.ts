import { defineStore } from "pinia";
import { ref } from "vue";
import LessonTranslation from "../interfaces/LessonTranslation";
import type WorldOptions from "../interfaces/WorldOptions";
// @ts-ignore
import lessons from "@/content/lessons.json";

const WORK_CODE = "workCode";

const useLessonStore = defineStore("lesson", () => {
    const options = ref<Partial<WorldOptions & LessonTranslation>>({
        size: { x: 4, y: 4 },
        start: {
            position: { x: 0, y: 0 },
            orientation: "E",
            picked: {},
        },
        objects: [
            {
                type: "grass",
                position: { x: 1, y: 0 },
            },
        ],
        timeout: 1000,
        title: "",
        details: [],
    });

    const storageKey = (title: string) => title.replace(/[^a-z0-9]/g, "");

    const getWorkCode = () => {
        if (!options.value.title) {
            return sessionStorage.getItem(WORK_CODE);
        }

        try {
            return sessionStorage.getItem(WORK_CODE + storageKey(options.value.title));
        } catch (e) {
            return "";
        }
    };

    const setWorkCode = (value: string) => {
        if (!options.value.title) {
            return sessionStorage.setItem(WORK_CODE, value);
        }

        try {
            return sessionStorage.setItem(WORK_CODE + storageKey(options.value.title), value);
        } catch (e) {
            return "";
        }
    };

    const setOptions = (value: WorldOptions & LessonTranslation) => {
        options.value = JSON.parse(JSON.stringify(value));
    };

    const code = ref("");
    const editor = ref(null);

    const setCode = (value: string) => {
        code.value = value;
        setWorkCode(value);
    };

    const initCode = (value: string) => {
        code.value = getWorkCode() || value || "";
    };

    const setEditor = (monaco: any) => {
        editor.value = monaco;
    };

    return {
        lessons,
        options,
        setOptions,
        code,
        setCode,
        initCode,
        editor,
        setEditor,
    };
});

export default useLessonStore;
