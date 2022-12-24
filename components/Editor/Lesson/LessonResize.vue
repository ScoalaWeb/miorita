<template>
    <label class="size">
        {{ axis }}:
        <input
            type="number"
            class="entry"
            :name="axis"
            :value="currentValue"
            @input="changeSize"
        />
    </label>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useEditorStore from "~/stores/editor";

const props = defineProps<{
    axis: string
    value: number
}>();

const store = useEditorStore();

const currentValue = ref<number>(props.value);

const changeSize = ($event:InputEvent) => {
    const nextValue = parseInt(($event.target as HTMLInputElement).value, 10);

    currentValue.value = nextValue;

    store.patchLesson([
        "size",
        props.axis,
    ], nextValue);
};
</script>

<style lang="scss">

.size {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-editor);
    font-size: 1.2rem;
    font-weight: 600;

    input {
        width: 3rem;
        font-size: 1.2rem;
        font-family: var(--font-editor);
        font-weight: 600;
    }
}
</style>
