<script setup>
import ColorModeSwitcher from "./ColorModeSwitcher.vue";
import LanguageSelector from "./LanguageSelector.vue";
</script>

<template>
    <div :class="$style.bar">
        <h1 :class="$style.brand">
            <nuxt-link to="/" :class="$style.main">Miorița</nuxt-link>
            <a :class="$style.secondary" href="https://scoalaweb.ro" target="_blank">by Școala Web</a>
        </h1>
        <span :class="$style.options">
            <LanguageSelector />
            <ColorModeSwitcher />
        </span>
    </div>
</template>

<style module>
.bar {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--editor-border);
    background: var(--background-color);
    color: var(--text-color);
}

.brand {
    padding: 0 1rem;
}

.options {
    padding: 0 1rem;
    display: flex;
    gap:  2.56rem;
}

.main {
    font-family: var(--font-highlight);
    font-size: 3rem;
    padding: 0.5rem;
    text-decoration: none;
}

.secondary {
    font-family: var(--font-highlight);
    font-size: 1.5rem;
    white-space: nowrap;
}
</style>
