<template>
    <div :class="$style.menu">
        <span :class="$style.menuButtons">
            <a
                v-for="(button) in store.buttons"
                :key="button.slug"
                :class="{[$style.selected]: store.selected === button.slug}"
                :href="`#${button.slug}`"
            >
                {{ button.label }}
            </a>
        </span>
        <div :class="$style.underlines" :style="`--line-position: ${store.selectedIndex}`">
            <div />
            <div />
            <div />
        </div>
    </div>
</template>

<script setup>
import useMenuStore from "~/stores/menu";

const store = useMenuStore();
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
    font-size: 1.38rem;
    background-color: transparent;
    transition: all .2s;

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
