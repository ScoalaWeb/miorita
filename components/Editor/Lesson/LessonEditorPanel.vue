<template>
    <LessonContainer :section="type">
        <div class="description">
            <div
                v-for="(entry, index) in currentLesson.details"
                :key="index"
                class="description_entry"
                :class="'entry--' + entry['class']"
            >
                <DeleteButton
                    class="entry_delete"
                    @remove="handleRemove('details', index)"
                />
                <input
                    class="entry_title"
                    :value="entry.title"
                    @input="e => handleInput(e, 'details', index, 'title')"
                />
                <CodeButton
                    :checked="isChecked(entry.class)"
                    class="entry_checkmark"
                    @checkmark="e => handleCheck(e, 'details', index, 'class')"
                />
                <textarea
                    :value="entry.text"
                    class="entry_text"
                    @input="e => handleInput(e, 'details', index, 'text')"
                />
            </div>
            <button
                type="button"
                class="editor_button"
                @click="addSection"
            >
                <img src="@/assets/img/plus.svg" alt="plus" />
                Add Section
            </button>
        </div>
    </LessonContainer>
</template>
<script setup lang="ts">
import { computed } from "vue";
import CodeButton from "../CodeButton.vue";
import DeleteButton from "../DeleteButton.vue";
import LessonContainer from "./LessonContainer.vue";
import editApi from "~/lib/editorApi";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

const isChecked = (entry: string) => entry === "code";

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

const handleRemove = async (key: string, index: number) => {
    currentLesson.value[key].splice(index, 1);
    const data = createDataObject(currentLesson.value[key], key);
    await editApi(url, { data, method: "PATCH" });
};

const handleCheck = async (e: Event, key: string, ...otherKeys: Array<number|string>) => {
    const text = (e.target as HTMLInputElement).checked ? "code" : "paragraph";
    const data = createDataObject(text, key, ...otherKeys);
    await editApi(url, { data, method: "PATCH" });
};

const handleInput = async (e: Event, key: string, ...otherKeys: Array<number|string>) => {
    const text = (e.target as HTMLTextAreaElement | HTMLInputElement).value;
    const data = createDataObject(text, key, ...otherKeys);
    await editApi(url, { data, method: "PATCH" });
};

const addSection = async () => {
    currentLesson.value.details = [
        ...currentLesson.value.details || [],
        {
            title: "new section",
            text: "new section text",
            class: "paragraph",
        },
    ];
    const text = currentLesson.value.details;
    const data = createDataObject(text, "details");
    await editApi(url, { data, method: "PATCH" });
};

</script>
<style scoped lang="scss">
.description {
    display: flex;
    flex-direction: column;
    gap: 0.93rem;

    &_entry {
        display: grid;
        align-items: center;
        column-gap: 0.3rem;
        grid-template-columns: min-content repeat(2, 1fr);
        grid-template-rows: repeat(2, min-content);
        row-gap: 0.5rem;

        &.entry {
            &--code {
                font-family: var(--font-basic);
            }
        }
    }

    .entry_title {
        background-color: transparent;
        font-family: inherit;
        font-size: 1.12rem;
        font-weight: 600;
        color: inherit;
        border: none;

        &:focus-visible {
            outline: none;
        }
    }

    .entry_delete {
        margin-block-start: 2.5px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .entry_checkmark {
        justify-self: end;
    }

    .entry_text {
        height: 8rem;
        grid-column: 1/4;
    }

    .editor_button {
        align-self: flex-start;
        gap: 0.62rem;
        padding: 0.5rem 0.62rem;
        font-weight: 500;
    }
}

.code {
    height: 100%;

    &_text {
        height: 100%;
        font-size: 0.87rem;
    }
}
</style>
