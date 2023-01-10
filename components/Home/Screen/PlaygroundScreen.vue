<template>
    <nav>
        <div
            :class="$style.cards"
            :style="{'--grid-cards-count': $t('playgrounds').length}"
        >
            <BaseCard
                v-for="(scenario, index) in $t('playgrounds')"
                :key="scenario.title"
                :class="$style.card"
                :description="scenario.description"
                :link="scenarioLink(scenario)"
                :title="scenario.title"
                color="green"
                :data-cypress="'playground' + index"
            />
        </div>
    </nav>
</template>

<script setup>
import BaseCard from "~/components/Home/PlaygroundCard.vue";

const prefix = "playgrounds";
const scenarioLink = scenario => `/${prefix}/${scenario.slug}`;
</script>

<style module lang="scss">
.cards {
    --grid-columns: 2;
    --grid-rows: calc(var(--grid-cards-count) / var(--grid-columns));

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
