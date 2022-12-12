<template>
    <MainContainer v-if="store.currentTranslations">
        <drop-list
            :items="lessons"
            class="list"
            @reorder="onReorder($event)"
        >
            <template #item="{item}">
                <drag :key="item.title">
                    <BaseSelectorButton
                        :code="item.title"
                        :can-delete="true"
                        @select="onSelect(item)"
                        @remove="onRemove(item)"
                    />
                </drag>
            </template>
        </drop-list>
        <AddButton @show="onAdd" />
    </MainContainer>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Drag, DropList, ReorderEvent } from "vue-easy-dnd";
import AddButton from "~/components/Editor/AddButton.vue";
import BaseSelectorButton from "~/components/Editor/BaseSelectorButton.vue";
import MainContainer from "~/components/Editor/MainContainer";
import WorldOptions from "~/interfaces/WorldOptions";
import useEditorStore from "~/stores/editor";

const props = defineProps<{
    category: string
}>();

const store = useEditorStore();

store.setCategory(props.category);

const lessons = computed(() => store.currentTranslations[props.category] ?? []);

const onReorder = (e: ReorderEvent) => {
    e.apply(lessons.value);
    store.reorderLessons(lessons.value);
};

const onSelect = (item: WorldOptions) => {
    console.log("redirect to editor page with selected item");
    store.selectLesson(item);
};

const onRemove = (item: WorldOptions) => {
    if (!window.confirm("Are you sure?")) { return; }
    store.removeLesson(item);
};

const onAdd = () => {
    console.log("redirect to editor page");
};

</script>
<style lang="scss">
.list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
