<template>
    <div :class="$style.wrapper">
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
            :theme="theme"
            language="javascript"
            @editorWillMount="editorWillMount"
        />
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import MonacoEditor from "vue-monaco";
import useCodeStore from "~/stores/code";

const store = useCodeStore();
const theme = ref("miorita-light");

defineProps({
    code: {
        type: String,
        default: "",
    },
});

const workCode = computed({
    get () {
        return store.code;
    },
    set (value) {
        store.setCode(value);
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
.wrapper {
    background-color: var(--background-color);
    border-top: 1px solid var(--color-gray-500);
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
}

.editor {
    width: 100%;
}
</style>
