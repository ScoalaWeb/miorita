import { defineStore } from "pinia";
import { ref, onMounted, watch, computed } from "vue";

const useSchemeStore = defineStore("scheme", () => {
    const scheme = ref("");

    const schemes = {
        light: "light-mode",
        dark: "dark-mode",
    };

    const changeScheme = () => {
        scheme.value = scheme.value === schemes.light
            ? schemes.dark
            : schemes.light;
        localStorage.scheme = scheme.value;
    };

    onMounted(() => {
        let mediaColorScheme = schemes.dark;

        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
            mediaColorScheme = schemes.light;
        }

        scheme.value = localStorage.scheme || mediaColorScheme;
    });

    watch(scheme, () => {
        const htmlClass = document.documentElement.classList;
        htmlClass.remove(schemes.light, schemes.dark);
        htmlClass.add(scheme.value);
    });

    const isLightScheme = computed(() => scheme.value === schemes.light);

    return { scheme, schemes, changeScheme, isLightScheme };
});

export default useSchemeStore;
