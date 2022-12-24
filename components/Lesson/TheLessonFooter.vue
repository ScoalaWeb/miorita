<script setup lang="ts">
import LessonTranslation from "~/interfaces/LessonTranslation";

defineProps<{
    lesson: LessonTranslation
}>();

</script>

<template>
    <div :class="$style.bottom">
        <div :class="$style.side">
            <p
                v-if="lesson.lessonCount"
                :class="$style.slides"
            >
                {{ lesson.lessonIndex + 1 }}/{{ lesson.lessonCount }}
            </p>
            <h3
                v-if="lesson.title"
                :class="$style.lesson"
            >
                {{ lesson.title }}
            </h3>
        </div>
        <div
            :class="$style.side"
        >
            <NuxtLink
                v-if="lesson.previousLesson"
                :to="localePath(`/lessons/${lesson.previousLesson}`)"
                :class="$style.button"
            >
                {{ $t("texts.button-text.navigation.back") }}
            </NuxtLink>

            <NuxtLink
                v-if="lesson.nextLesson"
                :to="localePath(`/lessons/${lesson.nextLesson}`)"
                :class="$style.button"
            >
                {{ $t("texts.button-text.navigation.next") }}
            </NuxtLink>
            <NuxtLink v-else :to="localePath('/#playground')" :class="$style.button">
                {{ $t("texts.button-text.navigation.more") }}
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" module>
.bottom {
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-color);
    border-top: var(--editor-border);
}

.side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    pointer-events: none;

    .button {
        pointer-events: auto;
    }
}

.slides {
    font-size: 1.5rem;
    color: var(--color-gray-300);
}

.lesson {
    font-family: var(--font-highlight);
    font-size: 1.25rem;
}

.button {
    padding: 0.25rem 1.56rem;
    background-color: var(--background-color);
    border: 2px solid var(--color-gray-300);
    border-radius: 1.25rem;
    font-size: 1.25rem;
    color: var(--text-color);
    cursor: pointer;
    transition: all .2s;
}

.button:hover {
    background-color: var(--color-gray-500);
    color: var(--color-white);
    border: 2px solid var(--color-gray-500);
}
</style>
