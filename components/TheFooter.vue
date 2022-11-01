<template>
    <span :class="$style.footer">
        by <a href="https://scoalaweb.ro" target="_blank">Școala Web</a>
    </span>
</template>
<script setup>
import "~/assets/fonts/CabinSketch/RoCabinSketch.css";
</script>
<style module>
.footer {
    background: transparent;
    justify-self: end;
    margin-right: 4.18rem;
    margin-bottom: 2.56rem;
    font-family: CabinSketch, sans-serif;
    font-weight: 700;
    font-size: 2rem;
    gap: 0.3rem;
}

.footer a {
    text-decoration: none;
    color: inherit;
}

.footer a:hover,
.footer a:focus {
    color: #dcdcdc;
}
</style>
