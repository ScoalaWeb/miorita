<template>
    <div
        id="editor"
        ref="editor"
        :v-model="workCode"
        @input="saveInput"
    />
</template>

<script setup>
import loader from "@monaco-editor/loader";
import { ref, onMounted, computed, defineProps } from "vue";
import useCodeStore from "~/stores/code";

defineProps({
    code: {
        type: String,
        default: "",
    },
});

const store = useCodeStore();

const workCode = computed({
    get () {
        return store.code;
    },

    mounted () {
        let { code } = this;
        if (localStorage.workCodeUrl === window.location.href) {
            code = localStorage.workCode;
        } else {
            localStorage.workCodeUrl = window.location.href;
        }

        this.$store.dispatch("init", code);
        this.workCode = this.$store.state.code;
    },
});

const editor = ref();

onMounted(() => {
    loader.init().then((monaco) => {
        const backgroundColor = String(window.getComputedStyle(document.documentElement).getPropertyValue("--background-color")).slice(2);
        const editorOptions = {
            language: "javascript",
            theme: "miorita-dark",
            value: localStorage.workCode,
            wordWrap: true,
            minimap: {
                enabled: false,
            },
            overviewRulerBorder: false,
            automaticLayout: true,
        };

        monaco.editor.defineTheme("miorita-dark", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": backgroundColor,
            },
        });

        window.editor = monaco.editor.create(editor.value, editorOptions);
    });
});

function saveInput () {
    const getText = window.editor.getValue();
    localStorage.setItem(localStorage.workCode, getText);
}
</script>

<style lang="scss" scoped>
    #editor {
        min-width: 100px;
        min-height: 100px;
        height: 100%;
        width: 100%;
    }
</style>
