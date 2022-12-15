<template>
    <div class="lesson_footer">
        <button
            type="button"
            class="editor_button"
        >
            Lesson Card
            <img src="../../../assets/img/edit.svg" />
        </button>
    </div>
</template>

<style lang="scss">
.lesson_footer {
    grid-row: 2/3;
    grid-column: 1/4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 0.81rem 1.81rem;
    background-color: var(--color-gray-800);

    .editor_button {
        font-weight: 500;
    }
}
</style>
