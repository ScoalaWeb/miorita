<template>
    <TheLesson
        :lesson="playground"
        :options="{
            size: size,
            start: {
                position: startPosition,
                orientation: startOrientation,
                picked: {},
            },
            walls: {
                x: [
                    'W' === startGap ? false : {x: startPosition.x - 1, y: startPosition.y},
                    'E' === startGap ? false : {x: startPosition.x, y: startPosition.y},
                ].filter(w => w),
                y: [
                    'N' === startGap ? false : {x: startPosition.x, y: startPosition.y - 1},
                    'S' === startGap ? false : {x: startPosition.x, y: startPosition.y},
                ].filter(w => w),
            },
            objects: grassObjects,
            timeout: 1000,
        }"
    />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import WorldObject from "../../interfaces/WorldObject";
import arrayRandom from "../../lib/arrayRandom";
import TheLesson from "~/components/Lesson/TheLesson.vue";
import LessonTranslation from "~/interfaces/LessonTranslation";
import { Coordinates } from "~/interfaces/WorldOptions";

@Component({
    components: { TheLesson },
    head () {
        return {
            title: this.playground.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.playground.description,
                },
            ],
        };
    },
})
export default class Escape extends Vue {
    // eslint-disable-next-line class-methods-use-this
    get size (): Coordinates {
        return {
            x: 3 + (Math.floor(Math.random() * 5) * 2),
            y: 3 + (Math.floor(Math.random() * 3) * 2),
        };
    }

    get startPosition ():Coordinates {
        return {
            x: Math.floor(this.size.x / 2),
            y: Math.floor(this.size.y / 2),
        };
    }

    get playground () : LessonTranslation {
        const playgrounds = this.$t("playgrounds") as Array<LessonTranslation>;
        return playgrounds.find(playground => playground.slug === "escape");
    }

    startOrientation:string = arrayRandom(["N", "S", "W", "E"]);
    startGap:string = arrayRandom(["N", "S", "W", "E"]);

    get grassObjects (): WorldObject[] {
        const { size } = this;
        const objects:WorldObject[] = [];

        for (let row = 0; row < size.y; row += 1) {
            // first column
            objects.push({
                position: { x: 0, y: row },
                type: "grass",
                fixed: true,
            });

            // last column
            objects.push({
                position: { x: size.x - 1, y: row },
                type: "grass",
                fixed: true,
            });

            // Middle columns, if first or last row

            if (row === 0 || row === (size.y - 1)) {
                const limit = size.x - 1;
                for (let col = 1; col < limit; col += 1) {
                    objects.push({
                        position: { x: col, y: row },
                        type: "grass",
                        fixed: true,
                    });
                }
            }
        }

        return objects;
    }

    code:string = "";
}
</script>
