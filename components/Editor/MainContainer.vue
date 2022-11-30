<template>
    <div :class="$style.intro_box">
        <slot />
    </div>
</template>

<script></script>

<style module lang="scss">
.intro_box {
    height: 100%;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    background-color: var(--color-gray-800);
}
</style>
