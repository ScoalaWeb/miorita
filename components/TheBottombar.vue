<script setup>
import { ref, onMounted } from "vue";

const isLesson = ref(false);
const lessonName = ref(null);
const lessonNumber = ref(null);

const lessons = {
    intro: "Meet Miorița",
    if: "Conditional statement",
    while: "Loops & variables",
    function: "Functions",
};

onMounted(() => {
    if (!window.location.href.includes("playground")) {
        isLesson.value = true;
        const lessonHref = window.location.href.split("/").splice(-1);
        const [number, lesson] = lessonHref.toString().split("-");
        lessonNumber.value = number;
        lessonName.value = lessons[lesson];
    }
});

</script>

<template>
    <div :class="$style.bottom">
        <div :class="$style.leftSide">
            <p :class="$style.slides">{{ lessonNumber }}/{{ Object.keys(lessons).length }}</p>
            <h3
                v-if="isLesson"
                :class="$style.lesson"
            >
                {{ lessonName }}
            </h3>
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

<style lang="scss" module>
.bottom {
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-color);
    border-top: var(--editor-border);
}

.leftSide {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    color: var(--text-color);
}

.slides {
    margin-right: 0.5rem;
    font-size: 1.5rem;
}

.lesson {
    font-family: var(--font-highlight);
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
