<!-- eslint-disable max-len -->
<template>
    <NuxtLink
        v-if="link"
        :to="localePath(link)"
        class="button"
        :style="String(color) === 'green'
            ? '--background-color:  var(--secondary-button); --hover-color: var(--secondary-button-hover)'
            : '--background-color:  var(--primary-button); --hover-color: var(--primary-button-hover)'"
    >
        <span class="label">
            <slot>{{ $t("texts.button-text.buttons.play") }}</slot>
        </span>
        <span class="arrows micon mi-caret" />
    </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
    color: string
    link: string
}>();
</script>

<style scoped>
.arrows {
    padding-top: 0.25rem;
    font-size: 1rem;
}

.label {
    text-transform: lowercase;
}
</style>
