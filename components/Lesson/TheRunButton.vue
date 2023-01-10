<template>
    <div :class="$style.group">
        <button
            :class="$style.run"
            data-cypress="button__run"
            @click="$emit('run')"
        >
            <i class="micon mi-play" />
            {{ $t('texts.button-text.buttons.run') }}
        </button>

        <button
            :class="$style.debug"
            data-cypress="button__debug"
            @click="$emit('debug')"
        >
            <i class="micon mi-bug" />
            <span class="invisible">
                {{ $t('texts.button-text.buttons.debug') }}
            </span>
        </button>
    </div>
</template>

<style module lang="scss">
.group {
    display: flex;
    margin: 0.68rem 0.81rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-button);
        font-size: 1.25rem;
        border: 0;
        color: var(--color-white);
        cursor: pointer;
        padding-block: 0.38rem;
        transition: background-color .2s;

        &:hover {
            background-color: var(--secondary-button-hover);
        }
    }
}

.run {
    gap: 0.41rem;
    font-size: 1.24rem;
    border-radius: 1.25rem 0 0 1.25rem;
    padding-inline: 1.68rem 0.81rem;
}

.debug {
    display: inline-flex;
    border-radius: 0 1.25rem 1.25rem 0;
    padding-inline: 1rem 1.43rem;

    &::before {
        content: "";
        height: 97%;
        width: 1px;
        border: none;
        background-color: white;
        margin-left: -1rem;
        margin-right: 0.91rem;
    }
}
</style>
