<template>
    <MainContainer v-if="store.currentTranslations">
        <drop-list
            :items="lessons"
            class="list"
            @reorder="onReorder($event)"
        >
            <template #item="{item, index}">
                <drag :key="item.title">
                    <BaseSelectorButton
                        :code="item.title"
                        :can-delete="true"
                        @select="onSelect(item.slug, index)"
                        @remove="onRemove(index)"
                    />
                </drag>
            </template>
        </drop-list>
        <AddButton @show="onAdd" />
    </MainContainer>
</template>
<script lang="ts">
import { mapActions, mapState } from "pinia";
import { computed, onMounted } from "vue";
import { Drag, DropList, ReorderEvent } from "vue-easy-dnd";
import AddButton from "../AddButton.vue";
import BaseSelectorButton from "../BaseSelectorButton.vue";
import MainContainer from "../MainContainer";
import useEditorStore from "~/stores/editor";

export default {
    computed: {
        ...mapState(useEditorStore, ["category"]),
    },
    methods: {
        onSelect (slug: string, index: number) {
            this.$router.push(`${this.category}/${slug}`);
            this.selectIndex(index);
        },
        ...mapActions(useEditorStore, ["selectIndex"]),
    },
};
</script>
<script setup lang="ts">

const props = defineProps<{
    type: string
}>();

const store = useEditorStore();

onMounted(() => {
    store.selectCategory(props.type);
});

const lessons = computed(() => store.currentTranslations[props.type] ?? []);

const onReorder = (e: ReorderEvent) => {
    e.apply(lessons.value);
    store.handleChange(lessons.value);
};

const onRemove = (index: number) => {
    if (!window.confirm("Are you sure")) { return; }
    lessons.value.splice(index, 1);
    store.handleChange(lessons.value);
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
