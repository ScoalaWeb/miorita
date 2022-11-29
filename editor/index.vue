<template>
    <MainContainer>
        <img
            src="~/assets/img/character.svg"
            alt="Miorița"
            class="home_sheep"
        >
        <h1 class="home_title">It's time to edit Miorița</h1>
        <NuxtLink class="home_button" to="languages">Get Started</NuxtLink>
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

.home_button {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--color-green);
    color: var(--color-white);
    transition: all 100ms linear;

    &:hover, &:focus, &:focus-within {
        background-color: var(--color-green-lighter);
        color: var(--color-white);
    }
}

</style>
