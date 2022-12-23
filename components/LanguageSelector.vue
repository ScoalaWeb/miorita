<!-- eslint-disable max-len -->
<template>
    <div
        :class="$style.languageSelector"
        @click="setActive"
    >
        <button
            type="button"
            :class="[$style.selectedLanguage, {[$style.menuActive]: active}]"
        >
            {{ currentLocale.toUpperCase() }}
            <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="currentColor"
                :class="{[$style.arrowsActive]: active}"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-3.43155e-08 0.785046L1.05 -4.7864e-07L6 3.70093L10.95 -4.5897e-08L12 0.785047L6 5.27103L-3.43155e-08 0.785046ZM-2.41025e-07 5.51402L1.05 4.72897L6 8.42991L10.95 4.72897L12 5.51402L6 10L-2.41025e-07 5.51402Z"
                    fill="currentColor"
                />
            </svg>
        </button>
        <nuxt-link
            :to="switchLocalePath(otherLocale)"
            :class="[$style.otherLanguage, {[$style.active]: active}]"
            :lang="otherLocale"
            :title="$t('texts.main-labels.labels.switch-to', otherLocale)"
        >
            {{ otherLocale.toUpperCase() }}
        </nuxt-link>
    </div>
</template>

<script>

export default {
    data () {
        return {
            active: false,
        };
    },
    computed: {
        currentLocale () {
            return this.$i18n.locale;
        },
        otherLocale () {
            return this.$i18n.locales.find(locale => locale !== this.currentLocale);
        },
    },
    methods: {
        setActive () {
            this.active = !this.active;
        },
    },
};
</script>

<style module lang="scss">
@use "../assets/scss/1-tools" as *;
@import "~/assets/fonts/RobotoMono/RobotoMono.css";

.languageSelector {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    z-index: 1;
}

.selectedLanguage {
    border: none;
    background-color: transparent;
    font-size: 1.37rem;
    font-family: RobotoMono, monospace;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem 1rem;
    border-radius: 0.62rem;
    color: var(--language-background-primary);
    z-index: 1;
}

.menuActive, .selectedLanguage:hover {
    background-color: var(--language-background-primary);
    color: var(--language-color-primary);
}

.languageSelector svg {
    align-self: flex-end;
    margin-bottom: 0.7rem;
}

.otherLanguage {
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 2rem 2.31rem 0.31rem 0.93rem;
    font-size: 1.37rem;
    font-family: RobotoMono, monospace;
    top: 0.5rem;
    left: 0;
    border-radius: 0.62rem;
    background-color: var(--language-background-secondary);
    color: var(--language-color-secondary);
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    transition: opacity .5s;
}

.otherLanguage:hover {
    color: var(--language-color-secondary);
}

.arrowsActive {
    transition: transform .5s;
    transform: rotate(180deg);
}

.active {
    visibility: visible;
    opacity: 100;
}
</style>
