import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

const useCodeStore = defineStore("code", () => {
    const code = ref("");

    const setCode = (value: string) => {
        code.value = value;
        localStorage.workCode = value;
    };

    const init = (value: string) => {
        code.value = value || localStorage.workCode || "";
    };

    onMounted(() => {
        if (localStorage.workCodeUrl === window.location.href) {
            code.value = localStorage.workCode;
        } else {
            localStorage.workCodeUrl = window.location.href;
        }
    });

    return { code, setCode, init };
});

export default useCodeStore;
