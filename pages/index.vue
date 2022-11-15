<template>
    <div
        :style="{ '--background-position': -store.selectedIndex }"
        class="layout"
    >
        <HomeHeadBar />
        <main class="content">
            <component
                :is="screen"
                v-for="(screen, index) in screenArr"
                :key="index"
                :class="{'active': index === store.selectedIndex}"
                :style="{'--page-index': index }"
                class="screen"
            />
        </main>
        <HomeFooter class="footer" />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import HomeFooter from "~/components/Home/Footer.vue";
import HomeHeadBar from "~/components/Home/HeadBar.vue";
import About from "~/components/Home/Screen/AboutScreen.vue";
import Lessons from "~/components/Home/Screen/LessonsScreen.vue";
import Playground from "~/components/Home/Screen/PlaygroundScreen.vue";
import useMenuStore from "~/stores/menu";

const store = useMenuStore();

const screenArr = [About, Lessons, Playground];

onMounted(() => {
    store.init();
});
</script>

<style lang="scss">
@use "../assets/scss" as *;

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

.layout {
    --item-width: 12.5rem;

    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 2fr 10fr 1fr;
    background-size: 5vmin 5vmin;
    background-image:
        linear-gradient(90deg, var(--background-accent) 2px, transparent 0),
        linear-gradient(var(--background-accent) 2px, transparent 0);
    background-position: calc(var(--background-position, 0) * var(--item-width));
    background-repeat: repeat;
    transition: background-position .5s;
}

.screen {
    position: absolute;
    top: 3rem;
    bottom: 0;
    left: calc((var(--background-position) + var(--page-index)) * 100%);
    width: 100%;
    min-height: 100%;
    opacity: 0;
    transition: opacity .4s, left .5s;
    overflow: auto;
}

.active {
    opacity: 1;
    left: 0;
}
</style>
