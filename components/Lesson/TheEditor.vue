<template>
    <MonacoEditor
        v-model="workCode"
        :class="$style.editor"
        :options="monacoOptions"
        :theme="schemeStore.isLightScheme ? 'miorita-light' : 'miorita-dark'"
        language="mioritajs"
        @editorWillMount="monacoSetup"
        @editorDidMount="editorDidMount"
    />
</template>

<script setup>
import { computed, defineProps, onMounted } from "vue";
import MonacoEditor from "vue-monaco";
import { monacoSetup, monacoOptions } from "~/lib/monacoSetup";
import useLessonStore from "~/stores/lesson";
import useSchemeStore from "~/stores/scheme";

const lessonStore = useLessonStore();
const schemeStore = useSchemeStore();

const props = defineProps({
    code: {
        type: String,
        default: "",
    },
});

const workCode = computed({
    get () {
        return lessonStore.code;
    },
    set (value) {
        lessonStore.setCode(value);
    },
});

const editorDidMount = (monaco) => {
    lessonStore.setEditor(monaco);
};

onMounted(() => {
    if (localStorage.workCodeUrl === window.location.href) {
        lessonStore.code = localStorage.workCode;
    } else {
        localStorage.workCodeUrl = window.location.href;
    }
    lessonStore.initCode(props.code);
});

</script>

<style module>
.editor {
    width: 100%;
    height: 100%;
    grid-column: 2/3;
    position: absolute;
}
</style>
