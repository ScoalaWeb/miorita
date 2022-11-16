import { defineStore } from "pinia";
import { ref } from "vue";

const useCodeStore = defineStore("code", () => {
    const code = ref("");
    const editor = ref(null);

    const setCode = (value: string) => {
        code.value = value;
        localStorage.workCode = value;
    };

    const init = (value: string) => {
        code.value = value || localStorage.workCode || "";
    };

    const setEditor = (monaco: any) => {
        editor.value = monaco;
    };

    return { code, setCode, init, editor, setEditor };
});

export default useCodeStore;
