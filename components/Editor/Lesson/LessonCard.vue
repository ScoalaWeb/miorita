<template>
    <div v-if="props.active" :class="$style.card_open">
        <div :class="$style.card_box">
            <input
                :class="$style.card_url"
                :value="currentLesson.link"
                placeholder="URL slug"
                @input="e => handleInput(e, 'link')"
            />
            <div
                v-if="store.category === 'lessons'"
                :class="$style.card_lesson"
                :style="{
                    backgroundImage:
                        `url('${require(`~/assets/img/lessons/${currentLesson.background}.svg`)}')`
                }"
            >
                <textarea
                    :class="$style.title"
                    :value="currentLesson.title"
                    placeholder="Titlu"
                    @input="e => handleInput(e, 'title')"
                />
                <textarea
                    :class="$style.description"
                    :value="currentLesson.description"
                    placeholder="Descriere"
                    @input="e => handleInput(e, 'description')"
                />
                <input
                    :class="$style.number"
                    :value="store.lessonIndex"
                    readonly
                />
            </div>
            <div
                v-if="store.category === 'playgrounds'"
                :class="$style.card_playground"
            >
                <textarea
                    :class="$style.title"
                    :value="currentLesson.title"
                    placeholder="Title"
                    @input="e => handleInput(e, 'title')"
                />
                <textarea
                    :class="$style.description"
                    :value="currentLesson.description"
                    placeholder="Description"
                    @input="e => handleInput(e, 'description')"
                />
            </div>
            <input
                v-show="store.category === 'lessons'"
                :class="$style.card_svg"
                :value="currentLesson.background"
                placeholder="Background image"
                @input="e => handleInput(e, 'background')"
                @change="store.init()"
            />
            <button
                :class="$style.exit"
                type="button"
                @click="handleClick"
            >
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import editApi from "~/lib/editorApi";
import useEditorStore from "~/stores/editor";

const store = useEditorStore();

const props = defineProps<{
    active: boolean
}>();

const emit = defineEmits(["closeCard"]);

const handleClick = () => {
    emit("closeCard", props.active);
};

const createDataObject = (text: string, ...keys: any) => ({
    path: [
        store.category,
        store.lessonIndex,
        ...keys,
    ],
    text,
});

const currentLesson = computed(() => store.currentTranslations[store.category][store.lessonIndex ?? ""] ?? {});

const url = `api/language?lang=${store.selectedLanguage}`;

const handleInput = async (e: Event, key: string, ...otherKeys: Array<number|string>) => {
    const text = (e.target as HTMLTextAreaElement | HTMLInputElement).value;
    const data = createDataObject(text, key, ...otherKeys);
    await editApi(url, { data, method: "PATCH" });
};
</script>

<style lang="scss" module>
.card_open {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset-block-start: 0;
    background-color: var(--color-gray-900);

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
