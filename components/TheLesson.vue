<template>
    <div :class="$style.mainContainer">
        <TheHeadbar :class="$style.headbar" />
        <div :class="$style.container">
            <TheDescription />
            <TheEditor :code="code" :class="$style.editor" />
            <TheWorld :options="options" :class="$style.world">
                <template #options>
                    <slot name="options" />
                </template>
            </TheWorld>
        </div>
        <TheBottombar />
    </div>
</template>

<script setup lang="ts">
import TheBottombar from "~/components/TheBottombar.vue";
import TheDescription from "~/components/TheDescription.vue";
import TheEditor from "~/components/TheEditor.vue";
import TheHeadbar from "~/components/TheHeadbar.vue";
import TheWorld from "~/components/TheWorld.vue";
import WorldOptions from "~/interfaces/WorldOptions";

defineProps<{
    code: string
    options: WorldOptions
}>();

</script>

<style module>
.mainContainer {
    height: 100vh;
    display: grid;
    grid: 5rem auto 3rem/ auto;
}

.headbar {
    width: 100%;
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: min-content 5fr 3fr;
}
.world {
    grid-column: 3/4;
    border: 1px solid var(--color-gray-500);
}

@media (orientation: portrait) {
    .container {
        flex-direction: column-reverse;
    }

    .editor {
        height: 50%;
    }

    .world {
        height: 50%;
    }
}
</style>
