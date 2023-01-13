<template>
    <button
        v-if="clicked || lessonStore.options.workCode !== lessonStore.code"
        type="button"
        :class="$style.resetButton"
        :title="$t('texts.button-text.buttons.reset-code')"
        @click="resetCode"
    >
        <i
            class="micon mi-reset"
            :class="{[$style.animate]: clicked}"
            @animationend="clicked = false"
        />
    </button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import useLessonStore from "~/stores/lesson";

const clicked = ref(false);

const lessonStore = useLessonStore();

const resetCode = () => {
    lessonStore.setCode(lessonStore.options.workCode);
    clicked.value = true;
};

</script>
<style module lang="scss">
.resetButton {
    position: absolute;
    display: flex;
    inset-block-end: 1.62rem;
    inset-inline-end: 1.37rem;
    grid-column: 2/4;
    padding: 0.5rem;
    border: none;
    border-radius: 4rem;
    background-color: var(--reset-button);
    color: var(--color-white);
    transition: all .2s;

    &:hover {
        background-color: var(--reset-button-hover);
    }
}
.animate {
    animation: rotate;
    animation-duration: 0.5s;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
