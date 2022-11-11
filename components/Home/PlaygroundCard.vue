<template>
    <div :class="$style.card">
        <h2
            v-if="title"
            :class="$style.title"
        >
            {{ title }}
        </h2>
        <p
            v-if="description"
            :class="$style.description"
        >
            {{ description }}
        </p>
        <BasePlayButton :color="color" :link="link" :class="$style.playButton" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
    title: string
    description: string
    link: string
    color: string
}>();
</script>

<style module lang="scss">
.card {
    display: grid;
    grid-template-rows: min-content 1fr 1fr;
    row-gap: 1rem;
    align-items: start;
    padding: 1.56rem 2.75rem 2.93rem 2.68rem;
    color: var(--text-color);
    background-color: var(--background-color);
    border: 2px solid var(--element-accent-color);
    border-radius: 1.25rem;
    position: relative;
}

.title {
    font-family: CabinSketch, monospace;
    font-size: 2.5rem;
}

.description {
    font-size: 1.25rem;
    font-weight: 400;
}

.playButton {
    justify-self: end;
    align-self: end;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
    }
}
</style>
