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
export default class Hatchet extends Vue {
    code:string = "";

    readonly worldOptions = {
        size: { x: 5, y: 5 },
        start: {
            position: { x: 0, y: 0 },
            orientation: "E",
            picked: {},
        },
        walls: {},
        objects: [
            {
                position: { x: 1, y: 0 },
                type: "hatchet",
                fixed: false,
            },
            {
                position: { x: 4, y: 4 },
                type: "vitoria",
                fixed: true,
            },
        ],
        timeout: 1000,
        title: "The Hatchet",
        details: [
            {
                title: "challenge",
                text: [
                    "Miorița wants to help solve the mystery. Train her to bring the hatchet, give it to Vitoria and finally see justice done.",
                    "Based on \"The Hatchet\" by Mihail Sadoveanu.",
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
                    "pick(\"hatchet\")",
                    "drop(\"hatchet\")",
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
