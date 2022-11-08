<template>
    <div id="About" :class="$style.about">
        <h1>Miorița is here to help you in your programming journey</h1>
        <NuxtLink to="/" :class="$style.button">
            play now
            <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <!-- eslint-disable max-len -->
                <path
                    d="M1.34579 20.5301L0 18.7337L6.34446 10.2651L0 1.79639L1.34579 0L9.03605 10.2651L1.34579 20.5301ZM9.4526 20.5301L8.10681 18.7337L14.4513 10.2651L8.10681 1.79639L9.4526 0L17.1429 10.2651L9.4526 20.5301Z"
                    fill="currentColor"
                />
                <!-- eslint-enable max-len -->
            </svg>
        </NuxtLink>
        <TheSheep :class="$style.miorita" />
    </div>
</template>
<script setup>
import TheSheep from "../GhostSheep.vue";
</script>

<style module>
.about {
    width: 100%;
    height: 100%;
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
    font-size: 1.75rem;
    text-decoration: none;
    border-radius: 3.12rem;
    color: var(--secondary-button-color);
    background-color: var(--secondary-button);
    z-index: 1;
}

.button:hover {
    color: var(--secondary-button-color);
    background-color: var(--secondary-button-hover);
}

.miorita {
    height: 46vh;
    width: auto;
    position: absolute;
    bottom: -6%;
    left: 2%;
    z-index: 0;
}
</style>
