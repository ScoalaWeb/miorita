<template>
    <button class="run" @click="$emit('click', $event)">
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

<style lang="scss" scoped>
    .run {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 2.18rem;
        width: 6.13rem;
    }

    svg {
        height: 1.2rem;
        width: 0.8rem;
        margin-right: 0.5rem;
    }

    p {
        font-family: RobotoMono, sans-serif;
        font-size: 1.24rem;
    }
</style>
