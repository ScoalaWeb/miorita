<template>
    <button
        :class="$style.runButton"
        @click="$emit('click')"
    >
        <i class="micon mi-play" />
        Run
    </button>
</template>

<style module lang="scss">
.runButton {
    display: flex;
    align-items: center;
    gap: 0.41rem;
    font-size: 1.24rem;
    border-radius: 1.25rem 0 0 1.25rem;
}
</style>
