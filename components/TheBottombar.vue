<template>
    <div :class="$style.bottom">
        <div :class="$style.leftSide">
            <p :class="$style.slides">0/3</p>
            <h3 :class="$style.brand">Meet Miorița</h3>
        </div>
        <div :class="$style.rightSide">
            <button
                :class="$style.button"
            >
                Back
            </button>
            <button
                :class="$style.button"
            >
                Next
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped module>
    .bottom {
        background-color: var(--background-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 3rem;
        width: 100%;
    }

    .leftSide {
        display: flex;
        flex-direction: row;
        margin-left: 1rem;
        align-items: center;
        color: var(--text-color);
    }

    .slides {
        margin-right: 0.5rem;
        font-size: 1.5rem;
    }

    .brand {
        font-family: CabinSketch, sans-serif;
        font-size: 1.25rem;
    }

    .rightSide {
        margin-right: 1rem;
    }

    .button {
        width: 6.18rem;
        height: 2rem;
        background-color: var(--background-color);
        border: 2px solid var(--color-gray-300);;
        border-radius: 1.25rem;
        font-size: 1.25rem;
        color: var(--text-color);
    }

    .button:hover {
        background-color: var(--secondary-button-hover);
    }
</style>
