<template>
    <TheLesson :lesson="playground" :options="worldOptions" />
</template>

<script>
import TheLesson from "~/components/Lesson/TheLesson.vue";

export default {
    name: "LessonPage",
    components: { TheLesson },

    asyncData ({ $content, params, error }) {
        return $content(`playgrounds/${params.slug}`)
            .fetch()
            .then(worldOptions => ({ worldOptions }))
            .catch(() => {
                error({ statusCode: 404, message: "Page not found" });
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
                    content: this.playground.description,
                },
            ],
        };
    },

    computed: {
        playground () {
            const playgrounds = this.$t("playgrounds");
            return playgrounds.find(playground => playground.slug === this.$route.params.slug);
        },

        workCode () {
            return this.playground.workCode;
        },
    },
};
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
