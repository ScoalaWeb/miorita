<!-- eslint-disable max-len -->
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
                <path
                    d="M1.34579 20.5301L0 18.7337L6.34446 10.2651L0 1.79639L1.34579 0L9.03605 10.2651L1.34579 20.5301ZM9.4526 20.5301L8.10681 18.7337L14.4513 10.2651L8.10681 1.79639L9.4526 0L17.1429 10.2651L9.4526 20.5301Z"
                    fill="currentColor"
                />
            </svg>
        </NuxtLink>
        <TheSheep :class="$style.miorita" />
    </div>
</template>
<script setup>
import TheSheep from "../components/TheSheep.vue";
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
    font-family: RobotoMono;
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
    width: 17.25rem;
    height: 4.44rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.43rem;
    font-size: 1.75rem;
    text-decoration: none;
    border-radius: 3.12rem;
    color: var(--pure-black);
    background-color: var(--primary-button);
    z-index: 1;
}

.button:hover {
    background-color: var(--primary-button-hover);
}

.button svg {
    margin-right: 1.81rem;
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
