<template>
    <form
        :class="$style.add_form"
        @submit.prevent="handleSubmit"
    >
        <label :class="$style.add_label">
            Code
            <input v-model="code" type="text" required />
        </label>
        <button type="submit" :class="$style.add_button">
            Add
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["add"]);
const code = ref("");

const handleSubmit = () => {
    const newItem = code.value;
    code.value = "";
    emit("add", newItem);
};

</script>

<style module lang="scss">
.add_form {
    display: grid;
    justify-items: center;
    gap: 1rem;
}

.add_label {
    display: grid;
    gap: 0.5rem;
    font-weight: 500;

    input {
        width: 14rem;
        padding: 0.5rem;
        border: 1px solid var(--color-white);
        border-radius: 8px;
        background-color: transparent;
        font-size: 1rem;
        color: var(--color-white);
    }
}

.add_button {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1.25rem;
    text-align: center;
    color: var(--color-white);
    background-color: var(--color-green);
}

</style>
