import { ref, watch, onMounted, computed } from "vue";
import editorApi from "@/lib/editorApi";

type Translations = Record<string, any>;

export default function editorLanguages () {
    const selectedLanguage = ref("en");
    const translations = ref<Translations>({});

    const selectLanguage = (language: string) => {
        selectedLanguage.value = language;
    };

    const setTranslations = (content: Translations) => {
        translations.value = content;
    };

    const init = async () => {
        const res = await editorApi("api/languages");
        setTranslations(await res.json());
    };

    const reloadTranslations = async (lang: string) => {
        const res = await editorApi(`api/language?lang=${lang}`);
        translations.value[selectedLanguage.value] = await res.json();
    };

    const addLanguage = async (item: string) => {
        const res = await editorApi(`/api/language?lang=${item}`, {
            method: "POST",
        });
        const content = await res.json();
        translations.value = { ...translations.value, [item]: content };
    };

    const patchLanguage = async (path: Array<string>, text: any) => {
        const response = await editorApi(
            `api/language?lang=${selectedLanguage.value}`,
            {
                data: {
                    path,
                    text,
                },
                method: "PATCH",
            },
        );

        const newTranslations = await response.json();

        translations.value = {
            ...translations.value,
            [selectedLanguage.value]: newTranslations,
        };
    };

    const removeLanguage = async (item: string) => {
        // eslint-disable-next-line no-alert
        if (!window.confirm("Are you sure?")) {
            return;
        }
        const res = await editorApi(`/api/language?lang=${item}`, {
            method: "DELETE",
        });
        const newObj = Object.keys(translations.value)
            .filter(language => language !== item)
            .reduce((obj, key) => (
                { ...obj, [key]: translations.value[key] }
            ), {});

        res.status === 200
            ? translations.value = newObj
            // eslint-disable-next-line no-console
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
        init();
    });

    return {
        init,
        selectedLanguage,
        selectLanguage,
        translations,
        setTranslations,
        currentTranslations,
        addLanguage,
        patchLanguage,
        removeLanguage,
        reloadTranslations,
    };
}
