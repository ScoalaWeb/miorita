<template>
    <div class="texts-box">
        <div class="sidepanel">
            <p>Pick a feature:</p>
            <button
                v-for="(button, index) in store.textButtons"
                :key="index"
                :class="index === store.selectedButton ? 'selected' : null"
                type="button"
                @click="store.selectButton(index)"
            >
                {{ button.label }}
            </button>
        </div>
        <div
            v-if="store.selectedButtonTexts"
            class="content"
        >
            <EntryEditor
                v-for="(translation, key) in store.selectedButtonTexts"
                :key="key"
                :translation="translation"
                :property-key="key"
                :property="store.selectedButton"
            />
        </div>
    </div>
</template>

<script setup>
import EntryEditor from "~/components/Editor/EntryEditor.vue";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

</script>

<style lang="scss">
.texts-box {
    height: 100%;
    display: flex;
    gap: 1.5rem;

    > div {
        border-radius: 1rem;
        padding: 1rem;
        background-color: var(--color-gray-800);
    }
}

.sidepanel {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.43rem;
    font-family: var(--font-editor);
    font-weight: 500;
    font-size: 1.25rem;

    button {
        width: 9.84rem;
        background-color: var(--color-gray-900);
        padding-block: 0.62rem;
        border: none;
        border-radius: 0.5rem;
        font-family: var(--font-editor);
        font-weight: 600;
        font-size: 1rem;
        color: var(--color-white);
        cursor: pointer;
    }

    .selected {
        background-color: var(--color-green);
    }
}

.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.43rem;
    font-family: var(--font-editor);
    font-size: 1.37rem;
    color: var(--color-white);

    > ul {
        padding-inline-start: 5.93rem;
    }
}
</style>
