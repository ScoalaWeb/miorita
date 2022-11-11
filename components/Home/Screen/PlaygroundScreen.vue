<template>
    <div>
        <div
            :class="$style.cards"
            :style="{'--grid-cards-count': playground.length}"
        >
            <BaseCard
                v-for="(scenario) in playground"
                :key="scenario.title"
                :class="$style.card"
                :description="scenario.description"
                :link="scenario.link"
                :title="scenario.title"
                color="green"
            />
        </div>
    </div>
</template>

<script setup>
import BaseCard from "~/components/Home/PlaygroundCard.vue";
import playground from "~/content/playground.json";
</script>

<style module lang="scss">
.cards {
    --grid-columns: 2;
    --grid-rows: calc(var(--grid-cards-count) / var(--grid-columns));

    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    column-gap: 4rem;
    align-items: start;
}

.card {
    width: calc(100% - 3rem);
    max-width: 35rem;
    height: calc(100% - 3rem);
    justify-self: end;

    &:nth-child(2n) {
        justify-self: start;
    }
}
</style>
