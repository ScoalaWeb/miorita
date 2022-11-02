<template>
    <div :class="$style.bar">
        <h1 :class="$style.brand">
            <nuxt-link to="/" :class="$style.main">Miorița</nuxt-link>
        </h1>
        <div :class="$style.buttons">
            <TheLanguageSelector />
            <TheColorModeButton />
        </div>
        <TheMenu :class="$style.menu" />
    </div>
</template>

<script setup>
import "~/assets/fonts/CabinSketch/RoCabinSketch.css";
import TheLanguageSelector from "./TheLanguageSelector.vue";
import TheColorModeButton from "./TheColorModeButton.vue";
import TheMenu from "./TheMenu.vue";
</script>

<style module>
.bar {
    background: transparent;
    color: var(--logo-color);
    display: grid;
    grid-template-columns: 1fr min-content 2.81rem;
    grid-template-rows: auto auto;
    justify-items: center;
    align-items: center;
}

.brand {
    grid-row: 1;
    grid-column: 1/3;
    margin-top: 2.81rem;
    margin-bottom: 2.68rem;
    align-self: end;
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
    font-size: 3rem;
    text-decoration: none;
}

.bar a {
    color: inherit;
}

.bar a:hover,
.bar a:focus{
    color: var(--logo-hover);
}

.menu {
    grid-column: 1/3;
    grid-row: 2;
}

</style>
