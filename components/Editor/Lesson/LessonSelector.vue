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
                        @remove="onRemove(item.slug, index)"
                    />
                </drag>
            </template>
        </drop-list>
        <AddButton @show="toggle" />
        <div v-show="showForm">
            <AddForm @add="onAdd" />
        </div>
    </MainContainer>
</template>

<script lang="ts">
import { mapActions, mapState } from "pinia";
import { ref, computed, onMounted } from "vue";
import { Drag, DropList, ReorderEvent } from "vue-easy-dnd";
import AddButton from "../AddButton";
import AddForm from "../AddForm";
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
        async onAdd (title: string) {
            const { slug, index } = await this.addLesson(title);
            this.onSelect(slug, index);
        },
        async onRemove (slug: string, index: number) {
            await this.removeLesson(slug, index);
        },
        ...mapActions(useEditorStore, ["selectIndex", "addLesson", "removeLesson"]),
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

const showForm = ref(false);

const toggle = () => {
    showForm.value = !showForm.value;
};

</script>

<style lang="scss">
.list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
