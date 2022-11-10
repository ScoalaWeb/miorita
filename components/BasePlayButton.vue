<!-- eslint-disable max-len -->
<template>
    <NuxtLink
        v-if="link"
        :to="link"
        class="button"
        :style="String(color) === 'green'
            ? '--background-color:  var(--secondary-button); --hover-color: var(--secondary-button-hover)'
            : '--background-color:  var(--primary-button); --hover-color: var(--primary-button-hover)'"
    >
        <span class="label">
            play
        </span>
        <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            class="arrows"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.96875 15.4688L0.65625 14.1562L6.84375 7.96875L0.65625 1.78125L1.96875 0.46875L9.46875 7.96875L1.96875 15.4688ZM9.875 15.4688L8.5625 14.1562L14.75 7.96875L8.5625 1.78125L9.875 0.46875L17.375 7.96875L9.875 15.4688Z"
                fill="currentColor"
            />
        </svg>
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
}
</style>
