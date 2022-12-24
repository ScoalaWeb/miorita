<script setup>
import ColorModeSwitcher from "../ColorModeSwitcher.vue";
import LanguageSelector from "../LanguageSelector.vue";
</script>

<template>
    <div :class="$style.bar">
        <h1 :class="$style.brand">
            <nuxt-link to="/" :class="$style.main">{{ $t('texts.main-labels.labels.brand') }}</nuxt-link>
            <a :class="$style.secondary" href="https://scoalaweb.ro" target="_blank">
                {{ $t('texts.main-labels.labels.credits') }}
            </a>
        </h1>
        <span :class="$style.options">
            <LanguageSelector />
            <ColorModeSwitcher />
        </span>
    </div>
</template>

<style module>
.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.62rem 1rem 0.81rem;
    border-bottom: var(--editor-border);
    background: var(--background-color);
    color: var(--text-color);
}

.brand {
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
}

.options {
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
