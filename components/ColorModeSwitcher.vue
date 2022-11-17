<script setup>
import useSchemeStore from "~/stores/scheme.ts";

const store = useSchemeStore();
</script>
<!-- eslint-disable max-len -->
<template>
    <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        :class="$style.colorScheme"
        xmlns="http://www.w3.org/2000/svg"
        @click="store.changeScheme"
    >
        <path
            d="M5.125 20.5H6.83333M20.5 5.125V6.83333M34.1667 20.5H35.875M9.56667 9.56667L10.7625 10.7625M31.4333 9.56667L30.2375 10.7625"
            :stroke="store.isLightScheme ? 'currentColor' : 'none'"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15.3757 27.333C13.9415 26.2574 12.8821 24.7577 12.3475 23.0465C11.813 21.3353 11.8304 19.4993 12.3973 17.7986C12.9642 16.0978 14.0519 14.6186 15.5063 13.5703C16.9606 12.5221 18.7079 11.958 20.5007 11.958C22.2934 11.958 24.0407 12.5221 25.4951 13.5703C26.9494 14.6186 28.0371 16.0978 28.604 17.7986C29.1709 19.4993 29.1883 21.3353 28.6538 23.0465C28.1192 24.7577 27.0598 26.2574 25.6257 27.333C24.9587 27.9932 24.4565 28.8012 24.1597 29.6916C23.8629 30.5819 23.7799 31.5296 23.9173 32.458C23.9173 33.3642 23.5573 34.2332 22.9166 34.874C22.2758 35.5147 21.4068 35.8747 20.5007 35.8747C19.5945 35.8747 18.7255 35.5147 18.0847 34.874C17.444 34.2332 17.084 33.3642 17.084 32.458C17.2214 31.5296 17.1384 30.5819 16.8416 29.6916C16.5448 28.8012 16.0426 27.9932 15.3757 27.333"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M16.5713 29.042H24.4296"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<style module>
.colorScheme {
    cursor: pointer;
    color: var(--color-mode);
    transition: color .5s;
}

.colorScheme:hover {
    color: var(--color-mode-hover);
}
</style>
