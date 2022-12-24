<template>
    <div v-if="props.active" class="card_open">
        <div class="card_box">
            <input
                class="card_url"
                :value="currentLesson.slug"
                placeholder="URL slug"
                @input="handleInput($event, 'slug')"
            />
            <div
                v-if="store.category === 'lessons'"
                class="card_lesson"
                :style="{
                    backgroundImage:
                        `url('${require(`~/assets/img/lessons/${currentLesson.background}.svg`)}')`
                }"
            >
                <textarea
                    class="title"
                    :value="currentLesson.title"
                    placeholder="Titlu"
                    @input="handleInput($event, 'title')"
                />
                <textarea
                    class="description"
                    :value="currentLesson.description"
                    placeholder="Descriere"
                    @input="handleInput($event, 'description')"
                />
                <input
                    class="number"
                    :value="store.lessonIndex"
                    readonly
                />
            </div>
            <div
                v-if="store.category === 'playgrounds'"
                class="card_playground"
            >
                <textarea
                    class="title"
                    :value="currentLesson.title"
                    placeholder="Title"
                    @input="handleInput($event, 'title')"
                />
                <textarea
                    class="description"
                    :value="currentLesson.description"
                    placeholder="Description"
                    @input="handleInput($event, 'description')"
                />
            </div>
            <input
                v-show="store.category === 'lessons'"
                class="card_svg"
                :value="currentLesson.background"
                placeholder="Background image"
                @input="handleInput($event, 'background')"
            />
            <button
                class="exit"
                type="button"
                @click="handleClick"
            >
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

const props = defineProps<{
    active: boolean
}>();

const emit = defineEmits(["closeCard"]);

const handleClick = () => {
    emit("closeCard", props.active);
};

const currentLesson = computed(() => store.currentTranslations[store.category][store.lessonIndex ?? ""] ?? {});

const handleInput = async (e: Event, key: string) => {
    const { value } = e.target as HTMLTextAreaElement | HTMLInputElement;

    if (key === "slug") {
        await store.renameLesson(currentLesson.value.slug, value);
    }

    await store.patchLanguage([
        store.category,
        store.lessonIndex,
        key,
    ], value);
};
</script>

<style lang="scss">
.card_open {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset-block-start: 0;
    background-color: var(--color-gray-900);
    z-index: 1000;

    .exit {
        position: absolute;
        inset-block-start: 1rem;
        inset-inline-end: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("~/assets/img/delete.svg");
        background-size: 50%;
    }

    input, textarea {
        background-color: transparent;
        border: none;
        color: var(--color-white);
        line-height: normal;

        &:focus-visible {
            outline: none;
        }
    }
}
.card_box {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
}
.card_lesson {
    display: grid;
    gap: 0.5rem;
    align-content: start;
    justify-items: start;
    width: 64vmin;
    height: 57vmin;
    border: 0.2rem solid var(--border-color);
    padding: 2.5rem 4rem 0;
    border-radius: 1.25rem;
    background-color: var(--background-color);
    background-size: cover;
    position: relative;

    .title {
        width: 51vmin;
        height: 8.5vmin;
        font-family: var(--font-highlight);
        font-weight: 900;
        font-size: 6.5vmin;
    }

    .description {
        height: 11rem;
        width: 44.5vmin;
        font-family: var(--font-default);
        font-size: 3.3vmin;
        margin-bottom: 1rem;
    }
}

.card_url, .card_svg {
    width: 64vmin;
    font-family: var(--font-editor);
    font-weight: 900;
    font-size: 3.3vmin;
}
.card_svg {
    text-align: end;
}
.number {
    position: absolute;
    left: 2.5vmin;
    bottom: 0;
    font-size: 10vmin;
    color: var(--border-color);
}

.card_playground {
    display: grid;
    width: 70vmin;
    height: 35vmin;
    row-gap: 0.5rem;
    align-content: center;
    padding: 1.56rem 2.75rem 2.93rem 2.68rem;
    color: var(--text-color);
    background-color: var(--background-color);
    border: 2px solid var(--element-accent-color);
    border-radius: 1.25rem;
    position: relative;

    .title {
        height: 7.5vmin;
        font-family: var(--font-highlight);
        font-size: 5.5vmin;
        font-weight: 900;
    }

    .description {
        font-family: var(--font-default);
        font-size: 2.2vmin;
        font-weight: 400;
        height: 14vmin;
    }
}
</style>
