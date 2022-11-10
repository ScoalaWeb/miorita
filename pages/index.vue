<template>
    <div>
        <component
            :is="screen"
            v-for="(screen, index) in screenArr"
            :key="index"
            class="screen"
            :class="{'active': index === store.selectedIndex}"
            :style="{'--page-index': index }"
        />
    </div>
</template>

<script setup>
import useMenuStore from "~/stores/menu";
import About from "~/components/Home/Screen/AboutScreen.vue";
import Playground from "~/components/Home/Screen/PlaygroundScreen.vue";

const store = useMenuStore();

const screenArr = [About, About, Playground];

</script>

<style lang="scss">
@use "../assets/scss" as *;

.screen {
    position: absolute;
    top: 0;
    left: calc((var(--background-position) + var(--page-index)) * 100%);
    opacity: 0;
    transition: opacity .4s, left .5s;
}

.active {
    opacity: 1;
    left: 0;
}
</style>
