<script setup>
import { useRouter } from "@nuxtjs/composition-api";
import { computed } from "vue";
import useLessonStore from "~/stores/lesson";

const store = useLessonStore();
const router = useRouter();

const options = computed(() => store.options);

const nextLesson = () => {
    router.push(store.options.nextLesson);
};

const previousLesson = () => {
    router.push(store.options.previousLesson);
};

</script>

<template>
    <div :class="$style.bottom">
        <div :class="$style.leftSide">
            <p
                v-if="options.lesson"
                :class="$style.slides"
            >
                {{ options.lesson }}/{{ store.lessons.length }}
            </p>
            <h3
                v-if="options.title"
                :class="$style.lesson"
            >
                {{ options.title }}
            </h3>
        </div>
        <div
            v-if="options.nextLesson"
            :class="$style.rightSide"
        >
            <button
                v-if="options.lesson !== 1"
                :class="$style.button"
                @click="previousLesson"
            >
                Back
            </button>
            <button
                :class="$style.button"
                @click="nextLesson"
            >
                Next
            </button>
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

.leftSide {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    pointer-events: none;
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
