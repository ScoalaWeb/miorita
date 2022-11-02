<template>
    <div :class="$style.container">
        <About />
    </div>
</template>

<script setup>
import About from "./about.vue";
</script>

@use "../assets/scss" as *;
.container {
    width: 100%;
    max-width: 80ch;
    margin: 1rem auto;
    box-shadow: 0.4rem 0.2rem 1rem rgba(224 219 219 / 69%);
    padding: 1rem;
    overflow-y: auto;
}
</style>
