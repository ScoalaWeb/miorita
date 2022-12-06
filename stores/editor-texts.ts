import { ref, computed } from "vue";

// @ts-ignore
export default function editorTexts ({ currentTranslations, selectedLanguage, reloadTranslations }) {
    const selectedButton = ref<number>(0);

    // const texts = computed(() => selectedLanguage.texts);
    const textButtons = computed(() => Object.keys(currentTranslations.value?.texts ?? {}).map(
        key => ({
            label: `${key[0].toUpperCase()}${key.slice(1)}`.replaceAll("-", " "),
            key,
            texts: currentTranslations.value.texts[key],
            showKeys: key === "console-output",
        }),
    ));

    const selectedButtonTexts = computed(() => textButtons.value[selectedButton.value]?.texts ?? []);

    const selectButton = (index: number) => {
        selectedButton.value = index;
        reloadTranslations(selectedLanguage.value);
    };

    return {
        selectedButton,
        textButtons,
        selectButton,
        selectedButtonTexts,
    };
}
