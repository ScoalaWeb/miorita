<template>
    <div :class="$style.menu">
        <span :class="$style.menuButtons">
            <a
                v-for="(button, index) in buttons"
                :key="index"
                :href="`#${button}`"
                :class="{[$style.selected]: selected === index}"
                @click="selectButton(index)"
            >
                {{ button }}
            </a>
        </span>
        <div :class="$style.underlines" :style="`--line-position: ${linePosition}`">
            <div />
            <div />
            <div />
        </div>
    </div>
</template>

<script setup>
import "~/assets/fonts/RobotoMono/RobotoMono.css";
import { ref } from "vue";

const buttons = ["About", "Lessons", "Playground"];
const selected = ref(0);
const linePosition = ref("0px");

const selectButton = (index) => {
    selected.value = index;
    linePosition.value = `${index * 216.5}px`;
};

</script>

<style module>

.menu {
    --transition-duration: 0.5s;

    position: relative;
}
.menuButtons {

    height: 2.31rem;
    display: flex;
    align-items: center;
    gap: 3rem;
}

.menuButtons a {
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: center;
    width: 10.56rem;
    color: var(--button-color);
    font-family: RobotoMono;
    font-size: 1.38rem;
    text-decoration: none;
    background-color: transparent;
    transition: font-size .2s
}

.menuButtons .selected {
    color: var(--text-color);
    font-size: 1.75rem;
}

.underlines > div {

    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate3d(var(--line-position), 0, 0);
    background-color: var(--button-color);
    height: 2px;
    width: 10.56rem;
    mix-blend-mode: initial;
    transition: transform var(--transition-duration);
}

.underlines > div:nth-child(2) {
    transition: transform calc(var(--transition-duration) * 0.8);
}

.underlines > div:nth-child(3) {
    transition: transform calc(var(--transition-duration) * 1.2);
}
</style>
