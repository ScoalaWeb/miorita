<template>
    <MainContainer>
        <h2>Choose a language:</h2>
        <LanguageButton
            v-for="(translations, lang) in store.translations"
            :key="lang"
            :code="lang"
            :active="lang === store.selectedLanguage"
            @select="store.selectLanguage"
            @remove="store.removeLanguage"
        />
        <AddButton @show="toggle" />
        <div v-show="showForm">
            <AddForm @add="store.addLanguage" />
        </div>
    </MainContainer>
</template>

<script setup>
import { ref } from "vue";
import AddButton from "~/components/Editor/AddButton";
import AddForm from "~/components/Editor/AddForm";
import LanguageButton from "~/components/Editor/LanguageButton";
import MainContainer from "~/components/Editor/MainContainer";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();
const showForm = ref(false);

const toggle = () => {
    showForm.value = !showForm.value;
};

</script>

<style lang="scss"></style>
