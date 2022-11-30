<template>
    <div class="texts-box">
        <div class="sidepanel">Menu</div>
        <div class="content">Content</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.texts-box {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    height: 100%;

    > div {
        height: 100%;
        border-radius: 1rem;
        padding: 1rem;
        background-color: var(--color-gray-800);
    }
}

.sidepanel {
    flex-grow: 1;
}

.content {
    flex-grow: 4;
}
</style>
