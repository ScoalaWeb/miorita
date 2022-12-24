<template>
    <div class="lesson_container">
        <h2 class="section">{{ section }}</h2>
        <slot />
    </div>
</template>

<script setup lang="ts">

defineProps<{
    section: string
}>();

</script>

<style lang="scss">
.lesson_container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 1rem;
    padding: 1.56rem;
    background-color: var(--color-gray-800);
    font-family: var(--font-editor);
}

.section {
    font-weight: 900;
    font-size: 1.56rem;
}

</style>
