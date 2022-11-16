<template>
    <button
        :class="$style.debug"
        @click="$emit('click')"
    >
        <hr />
        <i class="micon mi-bug" />
    </button>
</template>

<style module lang="scss">
    .debug {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 1.25rem 1.25rem 0;
    }

    hr {
        height: 97%;
        width: 1px;
        border: none;
        background-color: white;
        margin-left: -1rem;
        margin-right: 0.91rem;
    }
</style>
