<template>
    <button
        type="button"
        :class="$style.action"
        @click="$emit('click', $event)"
    >
        <i :class="`micon ${icon}`" />
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    icon: string
}>();
</script>

<style lang="scss" module>
.action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.81rem;
    gap: 0.41rem;
    border-radius: 1.25rem;
}
</style>
