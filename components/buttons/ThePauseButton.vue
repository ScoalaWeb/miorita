<template>
    <svg
        class="pause"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="$emit('stop')"
    >
        <path
            d="M14.125 19V5H18V19H14.125ZM6 19V5H9.875V19H6Z"
            fill="currentColor"
        />
    </svg>
</template>

<style lang="scss" scoped>
    .pause {
        height: 1.68rem;
        width: 1.68rem;
        margin-top: 1.25rem;
        margin-left: 0.5rem;
        color: var(--element-accent-color);
    }

    .pause:hover {
        color: var(--secondary-button-hover);
    }
</style>
