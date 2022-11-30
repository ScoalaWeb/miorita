<template>
    <header id="About" :class="$style.about">
        <h1>Miorița is here to help you in your programming journey</h1>
        <a href="#lessons" :class="$style.button">
            play now
            <span class="micon mi-caret" :class="$style.arrows" />
        </a>
        <TheSheep :class="$style.miorita" />
    </header>
</template>

<script setup>
import TheSheep from "../GhostSheep.vue";
</script>

<style module>
.about {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    text-align: center;
}

.about h1 {
    color: var(--text-color);
    width: 66.25rem;
    font-weight: 400;
    font-size: 3rem;
    z-index: 1;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 2rem 1rem;
    margin-block-end: 4rem;
    font-size: 1.75rem;
    text-decoration: none;
    border-radius: 3.12rem;
    color: var(--secondary-button-color);
    background-color: var(--secondary-button);
    z-index: 1;
    transition: all .2s;
}

.button:hover {
    color: var(--secondary-button-color);
    background-color: var(--secondary-button-hover);
}

.arrows {
    font-size: 1rem;
    padding-top: 0.25rem;
}

.miorita {
    height: 44vh;
    width: auto;
    position: absolute;
    bottom: 0;
    left: 2%;
    z-index: 0;
}
</style>
