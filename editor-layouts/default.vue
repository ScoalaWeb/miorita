<template>
    <div class="editor_layout">
        <nav class="editor_menu">
            <NuxtLink class="editor_title" to="/">Miorița Editor</NuxtLink>
            <div class="menu_items">
                <NuxtLink to="/languages">
                    Languages
                </NuxtLink>
                <NuxtLink to="/texts">Texts</NuxtLink>
                <NuxtLink to="/lessons">Lessons</NuxtLink>
                <NuxtLink to="/playgrounds">Playgrounds</NuxtLink>
            </div>
            <div class="language">
                {{ store.selectedLanguage }}
            </div>
        </nav>
        <div class="editor_main">
            <Nuxt />
        </div>
    </div>
</template>

<script setup>
import useEditorStore from "~/stores/editor";

const store = useEditorStore();
</script>

<style lang="scss">
@import "~/assets/fonts/Montserrat/Montserrat.css";

html {
    --font-editor: "Montserrat", sans serif;

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

.editor_layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-block: 1rem;
    background-color: var(--color-gray-900);
    color: var(--color-white);
}

.editor_menu {
    width: 96%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    padding: 1rem 3rem ;
    background-color: var(--color-gray-800);

    a {
        color: var(--color-white);
        font-family: var(--font-editor);
        font-size: 1.25rem;
        font-weight: 500;
        transition: all 100ms linear;

        &.editor_title {
            font-size: 1.75rem;
            font-weight: 600;

            &.nuxt-link-exact-active {
                color: var(--color-white);
            }
        }

        &:hover, &:focus, &:focus-within,
        &.nuxt-link-exact-active {
            color: var(--color-green-lighter);
        }
    }
}

.menu_items {
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    flex-flow: row wrap;
    justify-content: end;
    padding-inline: 4rem;
}

.editor_main {
    width: 96%;
    height: 100%;
    font-family: var(--font-editor);
}

</style>
