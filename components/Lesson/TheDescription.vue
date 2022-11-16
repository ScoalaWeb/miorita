<template>
    <div :class="$style.closed" />
</template>

<style module>
    .closed {
        background-color: var(--background-color);
        border-right: 1px solid var(--color-gray-500);
        width: 3rem;
        height: 100%;
    }
</style>
