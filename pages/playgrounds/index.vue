<template>
    <TheLesson
        :code="code"
        :options="worldOptions"
    />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheLesson from "~/components/Lesson/TheLesson.vue";

@Component({
    components: { TheLesson },
})
export default class EmptyPlayground extends Vue {
    code:string = "\n";

    readonly worldOptions = {
        size: { x: 9, y: 9 },
        start: {
            position: { x: 4, y: 4 },
            orientation: "E",
        },
        walls: {},
        objects: [],
        timeout: 1000,
        title: "Empty playground",
        details: [
            {
                title: "instructions",
                text: [
                    // eslint-disable-next-line
                    'You are free to do whatever you want. Practice your skills and see if you can train Miorița.',
                ],
                class: "paragraph",
            },
            {
                title: "commands",
                text: [
                    "move()",
                    "canMove()",
                    "turnRight()",
                    "reset()",
                    "if() { }",
                    "else { }",
                    "while() { }",
                    "for() { }",
                    "var",
                ],
                class: "code",
            },
        ],
    };
}
</script>
