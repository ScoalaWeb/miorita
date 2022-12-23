<template>
    <TheLesson :lesson="lesson" :options="worldOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLesson from "~/components/Lesson/TheLesson.vue";
import LessonTranslation from "~/interfaces/LessonTranslation";

export default defineComponent({
    name: "LessonPage",
    components: { TheLesson },

    asyncData ({ $content, params, error }) {
        return $content?.(`lessons/${params.slug}`)
            .fetch()
            .then(worldOptions => ({ worldOptions }))
            .catch(() => {
                error?.({ statusCode: 404, message: "Page not found" });
            });
    },

    data () {
        return {
            worldOptions: {},
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
            return this.lessons.findIndex(lesson => lesson.slug === this.$route.params.slug);
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
    },
});
</script>

<style module>
.container {
    display: flex;
}

.editor {
    flex-basis: 50%;
}

.world {
    flex-basis: 50%;
}

@media (orientation: portrait) {
    .container {
        flex-direction: column-reverse;
    }

    .editor {
        height: 50%;
    }

    .world {
        height: 50%;
    }
}
</style>
