<template>
    <div
        :class="[$style.panel, value ? '' : $style.closed]"
        @transitionend="resizeEditor"
    >
        <div :class="$style.toggle" @click="handleClick">
            <div :class="$style.line" />
        </div>
        <div
            v-for="detail in details"
            :key="detail.title"
            :class="[$style.section, $style[`section--${detail.class}`]]"
        >
            <p :class="$style.title">{{ detail.title }}</p>
            <div
                :class="$style.text"
            >
                <p
                    v-for="paragraph in detail.text"
                    :key="paragraph"
                >
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LessonTranslation from "~/interfaces/LessonTranslation";
import useLessonStore from "~/stores/lesson";

const props = defineProps<{
    value: boolean
    lesson: LessonTranslation
}>();

const emit = defineEmits(["input"]);

const store = useLessonStore();

const details = computed(() => props.lesson.details.map(detail => ({
    ...detail,
    text: detail.text.split("\n"),
})));

const handleClick = () => {
    emit("input", !props.value);
};

const resizeEditor = () => store.editor.layout();
</script>

<style module lang="scss">

.panel {
    width: 33.5vw;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-block: 0.4rem;
    background-color: var(--panel-background-color);
    border-right: 1.5px solid var(--panel-border-color);
    transition: width 0.2s linear;

    &.closed {
        grid-template-columns: 1fr;
        width: 2.8rem;
        padding-inline-end: 0.4rem;
        user-select: none;

        .toggle .line {
            background-color: var(--panel-border-color);

            &::before,
            &::after {
                background-color: var(--panel-border-color);
            }

            &::before {
                transform: translateY(-0.5rem);
            }

            &::after {
                transform: translateY(0.5rem);
            }
        }

        .section {
            opacity: 0;
            animation: slide-out 0.5s linear;
        }
    }
}

.toggle {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.33rem;
    z-index: 100;
    display: grid;
    justify-self: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s linear;

    .line {
        width: 1.5rem;
        height: 2px;
        background-color: transparent;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 1.5rem;
            height: 2px;
            background-color: var(--panel-border-color);
            transition: transform 0.5s linear;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }
}

.section {
    display: block;
    border-block-end: 1px solid var(--panel-border-color);
    color: var(--text-color);
    transition: opacity 0.2s linear;
    opacity: 1;
    overflow-y: auto;
    overflow-x: hidden;
    flex-grow: 1;

    > * {
        padding: 0.5rem 1rem;
    }

    &:last-child {
        border-block-end: 0;
    }
}

.title {
    font-family: var(--font-highlight);
    font-size: 2rem;
    font-weight: 700;
    padding-block: 0.3rem;
    white-space: nowrap;
    width: 31vw;
}

.text {
    width: 31vw;
    margin: 0;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
}

.section--paragraph {
    font-family: var(--font-basic);

    .text {
        gap: 0.7rem;
    }
}

.section--code {
    font-family: var(--font-default);

    .text p {
        user-select: all;
    }
}

@keyframes slide-out {
    from {
        display: block;
        transform: translateX(0);
    }
    to {
        display: none;
        transform: translateX(-10rem);
    }
}

@keyframes slide-in {
    from {
        transform: translateX(-2rem);
    }

    to {
        transform: translateX(0);
    }
}
</style>
