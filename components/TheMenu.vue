<template>
    <div :class="$style.menuButtons">
        <button
            v-for="(button, index) in buttons"
            :key="index"
            type="button"
            :class="{[$style.selected]: selected === index}"
            @click="selectButton(index)"
        >
            {{ button }}
        </button>
    </div>
</template>

<script setup>
import "~/assets/fonts/RobotoMono/RobotoMono.css";
import { ref } from "vue";

const buttons = ["About", "Lessons", "Playground"];
const selected = ref(0);

const selectButton = (index) => {
    selected.value = index;
};

</script>

<style module>
.menuButtons {
    display: flex;
    gap: 3rem;
    font-size: 1.38rem;
    color: var(--button-color);
}

button {
    padding: 0;
    margin: 0;
    width: 10.56rem;
    cursor: pointer;
    color: inherit;
    font-family: RobotoMono;
    font-size: inherit;
    border: none;
    background-color: transparent;
}
.selected {
    color: var(--text-color);
    font-size: 1.75rem;
    border-bottom: 2px solid var(--button-color);
    transform: translate(0, -0.8rem);
}
</style>
