<template>
    <label
        @change="$emit('checkmark', $event)"
    >
        <input
            type="checkbox"
            class="micon checkbox"
            :checked="checked"
        >
        code
    </label>
</template>
<script setup lang="ts">

defineProps<{
    checked: boolean
}>();

</script>
<style scoped lang="scss">
@import "@/assets/fonts/icons/Mioritza-Icons-v2.0/variables";

label {
    font-size: 0.75rem;
    font-weight: 400;
}

.checkbox {
    appearance: none;
    margin-top: 0.2rem;
    width: 0.59rem;
    height: 0.59rem;
    position: relative;

    &::before {
        content: $mi-check;
        color: var(--color-gray-500);
    }

    &:checked {
        &::before {
            color: var(--color-green-lighter);
        }
    }
}
</style>
