<template>
    <div :class="$style.menu">
        <span :class="$style.menuButtons">
            <a
                v-for="(button, index) in buttons"
                :key="button.slug"
                :href="`#${button.slug}`"
                :class="{[$style.selected]: selected === button.slug}"
                @click="selectButton(index)"
            >
                {{ button.label }}
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
import { onMounted, ref } from "vue";

const buttons = [
    {
        slug: "about",
        label: "About",
    },
    {
        slug: "lessons",
        label: "Lessons",
    },
    {
        slug: "playgrounds",
        label: "Playgrounds",
    },
];
const selected = ref(buttons[0].slug);
const linePosition = ref("0px");

const selectButton = (index) => {
    selected.value = buttons[index].slug;
    linePosition.value = index;
};

onMounted(() => {
    const currentLocation = window.location.hash.substring(1);
    const currentButtonIndex = buttons.findIndex(btn => btn.slug === currentLocation);
    if (currentButtonIndex >= 0) {
        selectButton(currentButtonIndex);
    }
});
</script>

<style module lang="scss">
.menu {
    --transition-duration: 0.5s;
    --item-width: 12.5rem;

    position: relative;
}
.menuButtons {
    height: 2.31rem;
    display: flex;
    align-items: center;
}

.menuButtons a {
    text-align: center;
    width: var(--item-width);
    color: var(--menu-color);
    font-family: RobotoMono, monospace;
    font-size: 1.38rem;
    background-color: transparent;
    transition: font-size .2s;

    &:hover {
        color: var(--menu-color-hover);
    }
}

.menuButtons .selected {
    color: var(--menu-color-hover);
    font-size: 1.75rem;
}

.underlines > div {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate3d(calc(var(--line-position, 0) * var(--item-width)), 0, 0);
    background-color: var(--menu-color);
    height: 2px;
    width: var(--item-width);
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
