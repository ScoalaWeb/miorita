<template>
    <button
        :class="$style.runButton"
        @click="$emit('run')"
    >
        <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <!-- eslint-disable -->
            <path
                d="M0 16.9167V0L13.2917 8.45833L0 16.9167ZM1.8125 13.624L9.93854 8.45833L1.8125 3.29271V13.624Z"
                fill="white"
            />
        </svg>
        Run
    </button>
</template>

<style module lang="scss">
.runButton {
    display: flex;
    align-items: center;
    gap: 0.41rem;
    padding: 0.25rem 0.81rem 0.31rem 1.68rem;
    font-family: RobotoMono, sans-serif;
    font-size: 1.24rem;
}
</style>
