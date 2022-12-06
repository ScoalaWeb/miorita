<template>
    <div class="entry-editor">
        <div v-if="!store.textButtons[store.selectedButton].showKeys" class="heading">{{ capitalizedKey }}</div>
        <ul class="entry-list">
            <li
                v-for="(entry, entryKey) in translation"
                :key="entryKey"
            >
                <span
                    v-if="store.textButtons[store.selectedButton].showKeys"
                    class="entry-key"
                >
                    {{ entryKey }}
                </span>
                <input
                    class="entry"
                    contenteditable="true"
                    :value="entry"
                    @input="e => handleInput(e, entryKey)"
                    @change="store.init()"
                />
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import editApi from "~/lib/editorApi";
import useEditorStore from "~/stores/editor";

const props = defineProps<{
    translation: Record<string, string> | string
    property: number
    propertyKey: string
}>();

const capitalizedKey = computed(() => `${props.propertyKey[0].toUpperCase()}${props.propertyKey.slice(1)}`);

const store = useEditorStore();

const handleInput = async (e: Event, entryKey: string) => {
    const { property, propertyKey } = props;
    const text = (e.target as HTMLInputElement).value;
    const url = `api/language?lang=${store.selectedLanguage}`;
    const data = {
        path: [
            "texts",
            store.textButtons[property].key,
            propertyKey,
            entryKey,
        ],
        text,
    };
    await editApi(url, { data, method: "PATCH" });
};
</script>
<style lang="scss">
.entry-editor {
    padding-inline: 5rem;
}

.heading {
    font-weight: 600;
    margin-block-end: 0.75rem;
    cursor: default;
}

.entry-list {
    display: grid;
    gap: 1rem;
    list-style: none;

    li {
        display: flex;
    }
}

.entry-key {
    font-weight: 600;
    display: inline-block;
    width: 15rem;
    text-align: right;
    white-space: nowrap;
    margin-inline-end: 2rem;
}

.entry {
    font-size: 1.56rem;
    font-weight: 400;
    cursor: pointer;
    background: transparent;
    border: 0;
    color: inherit;
    display: inline-block;
    width: 100%;
}
</style>
