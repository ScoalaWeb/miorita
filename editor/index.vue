<template>
    <MainContainer>
        <img
            src="~/assets/img/character.svg"
            alt="Miorița"
            class="home_sheep"
        >
        <h1 class="home_title">It's time to edit Miorița</h1>
        <NuxtLink class="editor_button" to="languages">Get Started</NuxtLink>
    </MainContainer>
</template>

<script setup>
import MainContainer from "~/components/Editor/MainContainer";
</script>

<style lang="scss">
@use "../assets/scss" as *;

.home_sheep {
    width: 10rem;
    height: auto;
}

.home_title {
    font-size: 3rem;
}

.editor_button {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 2rem;
    transition: all .1s;
}

</style>
