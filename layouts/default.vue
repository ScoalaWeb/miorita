<template>
    <div
        class="Layout"
        :style="{ '--background-position': -store.selectedIndex }"
    >
        <HomeHeadBar />
        <Nuxt class="content" />
        <HomeFooter class="footer" />
    </div>
</template>

<script setup>
import useMenuStore from "~/stores/menu";
import HomeHeadBar from "~/components/Home/HeadBar.vue";
import HomeFooter from "~/components/Home/Footer.vue";

const store = useMenuStore();

</script>

<style>
html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: var(--background-color);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.content {
    position: relative;
    grid-row: 2/4;
    grid-column: 1;
    z-index: 0;
}

.footer {
    grid-row: 3;
    grid-column: 1;
    z-index: 1;
}

.Layout {
    --item-width: 12.5rem;

    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 2fr 10fr 1fr;
    background-size: 50px 50px;
    background-image:
        linear-gradient(90deg, var(--background-accent) 2px, transparent 0),
        linear-gradient(var(--background-accent) 2px, transparent 0);
    background-position: calc(var(--background-position, 0) * var(--item-width));
    background-repeat: repeat;
    transition: background-position .5s;
}
</style>
