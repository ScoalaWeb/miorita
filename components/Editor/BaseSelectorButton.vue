<template>
    <div :class="[$style.editor_group, active && $style.active]">
        <button
            type="button"
            :class="$style.editor_button"
            @click="select"
        >
            {{ code }}
        </button>
        <button
            type="button"
            :class="[canDelete ? $style.remove : $style.none]"
            @click="remove"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    code: string
    active?: boolean
    canDelete?: boolean
}>();

const emit = defineEmits(["select", "remove"]);

const select = () => {
    emit("select", props.code);
};

const remove = () => {
    emit("remove", props.code);
};
</script>

<style module lang="scss">
.editor_group {
    min-width: 15rem;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border-radius: 0.5rem;
    background-color: var(--color-green);

    &.active {
        background-color: var(--color-green-lighter);
        border: 1px solid var(--color-white);

        button {

            &:hover, &:focus, &:focus-within {
                background-color: var(--color-green);
            }
        }
    }

    button {
        width: 100%;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        font-family: var(--font-editor);
        font-weight: 600;
        font-size: 1.25rem;
        text-align: start;
        color: var(--color-white);
        background-color: transparent;
        transition: all 100ms linear;

        &:hover, &:focus, &:focus-within {
            background-color: var(--color-green-lighter);
            color: var(--color-white);
        }

        &.remove {
            width: 3rem;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("~/assets/img/delete.svg");
        }

        &.none {
            display: none;
        }
    }
}

</style>
