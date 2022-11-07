<template>
    <Nuxt />
</template>

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

    .Layout {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-rows: 2fr 10fr 1fr;
        background-size: 50px 50px;
        background-image:
            linear-gradient(90deg, var(--background-accent) 2px, transparent 0),
            linear-gradient(var(--background-accent) 2px, transparent 0);
        background-position: center;
    }
</style>
