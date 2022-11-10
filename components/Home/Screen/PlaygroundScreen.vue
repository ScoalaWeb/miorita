<template>
    <div :class="$style.cards">
        <BaseCard
            v-for="(scenario, index) in playground"
            :key="index"
            :title="scenario.title"
            :description="scenario.description"
            :link="scenario.link"
            color="green"
            :class="$style.card"
        />
    </div>
</template>

<script setup>
import BaseCard from "~/components/BaseCard.vue";
import playground from "~/content/playground.json";
</script>

<style module>
.cards {
    --grid-size: repeat(2, 1fr);

    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: var(--grid-size);
    grid-template-columns: var(--grid-size);
    row-gap: 4.25rem;
    column-gap: 4.37rem;
    justify-items: end;
    align-items: end;
}

.card:nth-child(2) {
    justify-self: start;
}

.card:nth-child(3) {
    align-self: start;
}
</style>
