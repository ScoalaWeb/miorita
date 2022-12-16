<template>
    <LessonContainer :section="$props.section">
        <div class="code">
            <textarea
                :value="currentLesson.workCode"
                class="code_text"
                @input="e => handleInput(e, 'workCode')"
            />
        </div>
    </LessonContainer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LessonContainer from "./LessonContainer.vue";
import editApi from "~/lib/editorApi";
import useEditorStore from "~/stores/editor";

defineProps<{
    section: string
}>();

const store = useEditorStore();

const createDataObject = (text: string, ...keys: any) => ({
    path: [
        store.category,
        store.lessonIndex,
        ...keys,
    ],
    text,
});

const currentLesson = computed(() => store.currentTranslations[store.category][store.lessonIndex ?? ""] ?? {});

const url = `api/language?lang=${store.selectedLanguage}`;

const handleInput = async (e: Event, key: string, ...otherKeys: Array<number|string>) => {
    const text = (e.target as HTMLTextAreaElement | HTMLInputElement).value;
    const data = createDataObject(text, key, ...otherKeys);
    await editApi(url, { data, method: "PATCH" });
};

</script>

<style scoped lang="scss">
.code {
    height: 100%;

    &_text {
        height: 100%;
        font-size: 0.87rem;
    }
}
</style>
