<template>
    <div :class="$style.bar">
        <h1 :class="$style.brand">
            <NuxtLink to="/" :class="$style.main">Miorița</NuxtLink>
        </h1>
        <div :class="$style.buttons">
            <LanguageSelector />
            <ColorModeSwitcher />
        </div>
        <MainMenu :class="$style.menu" />
    </div>
</template>

<script setup>
import "~/assets/fonts/CabinSketch/RoCabinSketch.css";
import ColorModeSwitcher from "../ColorModeSwitcher.vue";
import LanguageSelector from "../LanguageSelector.vue";
import MainMenu from "./MainMenu.vue";
</script>

<style module>
.bar {
    background: transparent;
    display: grid;
    grid-template-columns: 1fr min-content 2.81rem;
    justify-items: center;
    align-items: center;
}

.brand {
    grid-row: 1;
    grid-column: 1/3;
    margin-top: 2.81rem;
    margin-bottom: 2.68rem;
}

.buttons {
    grid-row: 1;
    grid-column: 2/3;
    display: flex;
    gap: 2rem;
}

.main {
    font-family: CabinSketch, sans-serif;
    font-weight: 700;
    font-size: clamp(3rem, 6vh, 5rem);
    text-decoration: none;
}

.menu {
    grid-column: 1/3;
    grid-row: 2;
}
</style>
