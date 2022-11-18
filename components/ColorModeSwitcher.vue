<script setup>
import useSchemeStore from "~/stores/scheme.ts";

const store = useSchemeStore();

</script>
<!-- eslint-disable max-len -->
<template>
    <i
        class="micon"
        :class="[$style.colorScheme, store.isLightScheme ? 'mi-onlight' : 'mi-offlight']"
        @click="store.changeScheme"
    />
</template>

<style module>
.colorScheme {
    display: flex;
    justify-content: center;
    width: 2rem;
    cursor: pointer;
    color: var(--color-mode);
    transition: color .5s;
    font-size: 1.9rem;
}

.colorScheme:hover {
    color: var(--color-mode-hover);
}
</style>
