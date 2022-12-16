<template>
    <div class="lesson_footer">
        <button class="footer_button" type="button" @click="openCard">
            Lesson Card
            <img src="../../../assets/img/edit.svg" />
        </button>
        <LessonCard :active="active" @closeCard="closeCard" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LessonCard from "./LessonCard.vue";

const active = ref(false);

const openCard = () => {
    active.value = true;
};

const closeCard = () => {
    active.value = false;
};
</script>

<style lang="scss">
.lesson_footer {
    grid-row: 2/3;
    grid-column: 1/4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding-block: 0.5rem;
    background-color: var(--color-gray-800);

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--color-green);
        padding: 0.5rem 1.25rem;
        border: none;
        border-radius: 0.5rem;
        font-family: var(--font-editor);
        font-weight: 900;
        font-size: 1rem;
        color: var(--color-white);
        cursor: pointer;

        &:hover {
            background-color: var(--color-green-lighter);
            color: var(--color-white);
        }
    }
}

</style>
