<template>
    <button
        :class="$style.add"
        @click="$emit('show')"
    >
        <i class="micon mi-plus" />
    </button>
</template>

<style module lang="scss">
.add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    border: none;
    padding-block: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--color-white);
    background-color: var(--color-green);
    transition: all 100ms linear;

    &:hover, &:focus, &:focus-within {
        transform: scale(1.1);
    }
}
</style>
