<template>
    <MonacoEditor
        v-model="workCode"
        :class="$style.editor"
        :options="{
            wordWrap: true,
            minimap: {
                enabled: false
            },
            overviewRulerBorder: false,
            automaticLayout: true,
        }"
        :theme="schemeStore.isLightScheme ? 'miorita-light' : 'miorita-dark'"
        language="javascript"
        @editorWillMount="editorWillMount"
    />
</template>

<script setup>
import { computed, defineProps } from "vue";
import MonacoEditor from "vue-monaco";
import useCodeStore from "~/stores/code";
import useSchemeStore from "~/stores/scheme";

const codeStore = useCodeStore();
const schemeStore = useSchemeStore();

defineProps({
    code: {
        type: String,
        default: "",
    },
});

const workCode = computed({
    get () {
        return codeStore.code;
    },
    set (value) {
        codeStore.setCode(value);
    },
});

const editorWillMount = (monaco) => {
    monaco.editor.defineTheme("miorita-light", {
        base: "vs",
        inherit: true,
        rules: [],
        colors: {
            "editor.background": "#fff",
        },
    });
    monaco.editor.defineTheme("miorita-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
            "editor.background": "#252525",
        },
    });
};
</script>

<style module>
.editor {
    width: 100%;
    height: 100%;
    grid-column: 2/3;
    position: absolute !important;
    border-top: var(--editor-border);
    border-bottom: var(--editor-border);
}
</style>
