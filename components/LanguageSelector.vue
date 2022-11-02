<!-- eslint-disable max-len -->
<template>
    <div :class="$style.languageSelector">
        <p>EN</p>
        <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-3.43155e-08 0.785046L1.05 -4.7864e-07L6 3.70093L10.95 -4.5897e-08L12 0.785047L6 5.27103L-3.43155e-08 0.785046ZM-2.41025e-07 5.51402L1.05 4.72897L6 8.42991L10.95 4.72897L12 5.51402L6 10L-2.41025e-07 5.51402Z"
                fill="currentColor"
            />
        </svg>
    </div>
</template>

<script setup>
import "~/assets/fonts/RobotoMono/RobotoMono.css";
</script>

<style module>
.languageSelector {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    font-family: RobotoMono, monospace;
    cursor: pointer;
    color: var(--button-color);
    font-size: 1.37rem;
}

.selectedLanguage {
    width: 1.43rem;
    height: 1.43rem;
}

.languageSelector svg {
    align-self: flex-end;
    margin-bottom: 0.7rem;
}
</style>
