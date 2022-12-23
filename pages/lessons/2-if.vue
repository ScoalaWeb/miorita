<!-- eslint-disable max-len -->
<template>
    <TheLesson
        :lesson="lesson"
        :options="worldOptionsWithWall"
    >
        <template #options>
            <label :class="$style.fence">
                <input
                    v-model="wall"
                    type="checkbox"
                    class="micon"
                    :class="$style.checkbox"
                >
                {{ $t('texts.main-labels.labels.fence') }}
            </label>
        </template>
    </TheLesson>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLesson from "~/components/Lesson/TheLesson.vue";
import LessonTranslation from "~/interfaces/LessonTranslation";
import WorldOptions from "~/interfaces/WorldOptions";

const IF_LESSON_SLUG = "2-if";

export default defineComponent({
    name: "LessonPage",
    components: { TheLesson },

    asyncData ({ $content, error }) {
        return $content?.(`lessons/${IF_LESSON_SLUG}`)
            .fetch()
            .then(worldOptions => ({ worldOptions }))
            .catch(() => {
                error?.({ statusCode: 404, message: "Page not found" });
            });
    },

    data () {
        return {
            worldOptions: {},
            wall: true,
        };
    },

    head () {
        return {
            title: this.worldOptions.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.lesson.description,
                },
            ],
        };
    },
    computed: {
        lessons (): Array<LessonTranslation> {
            return this.$t("lessons");
        },
        lessonIndex (): number {
            return this.lessons.findIndex(lesson => lesson.slug === IF_LESSON_SLUG);
        },

        lesson () {
            const { lessons, lessonIndex } = this;
            const nextIndex = lessonIndex + 1;
            const prevIndex = lessonIndex - 1;
            return {
                ...lessons[lessonIndex],
                lessonIndex,
                lessonCount: lessons.length,
                nextLesson: nextIndex < lessons.length ? lessons[nextIndex].slug : null,
                previousLesson: prevIndex >= 0 ? lessons[prevIndex].slug : null,
            };
        },

        workCode () {
            return this.lesson.workCode;
        },

        worldOptionsWithWall (): WorldOptions {
            return {
                ...(this.worldOptions as WorldOptions),
                walls: {
                    x: this.wall
                        ? [
                            { x: 0, y: 1 },
                        ]
                        : undefined,
                }
                ,
            } as WorldOptions;
        },
    },
});
</script>

<style module lang="scss">
@import "@/assets/fonts/icons/Mioritza-Icons-v2.0/variables";

.fence {
    display: flex;
    align-items: center;
    gap: 0.42rem;
    margin-right: 0.81rem;
}

.checkbox {
    appearance: none;
    margin-top: 0.2rem;
    width: 0.59rem;
    height: 0.59rem;
    border: 1px solid var(--element-accent-color);
    position: relative;

    &::before {
        position: absolute;
        left: -2px;
        top: -3px;
        color: var(--checkmark-color);
    }

    &:checked {
        &::before {
            content: $mi-check;
        }
    }
}

</style>
