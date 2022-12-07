import { defineStore } from "pinia";
import { ref, watch, onMounted, computed } from "vue";

type Translations = Record<string, any>;

const useEditorStore = defineStore("editor", () => {
    const selectedLanguage = ref("en");
    const translations = ref<Translations>({});

    const selectLanguage = (language: string) => {
        selectedLanguage.value = language;
    };

    const setTranslations = (content: Translations) => {
        translations.value = content;
    };

    const load = async () => {
        const res = await fetch("api/languages");
        setTranslations(await res.json());
    };

    const addLanguage = async (item: string) => {
        const res = await fetch(`/api/language?lang=${item}`, {
            method: "POST",
        });
        const content = await res.json();
        translations.value = { ...translations.value, [item]: content };
    };

    const removeLanguage = async (item: string) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        const res = await fetch(`/api/language?lang=${item}`, {
            method: "DELETE",
        });
        const newObj = Object.keys(translations.value)
            .filter(language => language !== item)
            .reduce((obj, key) => (
                { ...obj, [key]: translations.value[key] }
            ), {});

        res.status === 200
            ? translations.value = newObj
            : console.log(res.json());
    };

    const currentTranslations = computed(() => translations.value[selectedLanguage.value]);

    watch(selectedLanguage, (newLang) => {
        localStorage.lang = newLang;
    });

    onMounted(() => {
        if (localStorage.lang) {
            selectedLanguage.value = localStorage.lang;
        }
        load();
    });

    return {
        selectedLanguage,
        selectLanguage,
        translations,
        setTranslations,
        currentTranslations,
        addLanguage,
        removeLanguage,
    };
});

export default useEditorStore;
