<template>
    <div>
        <component
            :is="screen"
            v-for="(screen, index) in screenArr"
            :key="index"
            class="screen"
            :class="{'active': index === store.selectedIndex}"
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
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity .4s;
}

.active {
    visibility: visible;
    opacity: 100;
}
</style>
