<template>
    <div class="options_box">
        <div class="orientation">
            <input
                type="checkbox"
                data-type="Miorița"
                class="object_checkbox"
                :checked="hasSheep"
                disabled
            >
            <span class="cardinal_buttons">
                <input
                    v-for="orientation in orientations"
                    :key="orientation"
                    type="radio"
                    name="orientation"
                    class="object_checkbox cardinal"
                    :data-type="orientation"
                    :checked="hasOrientation(orientation)"
                    @change="$emit('orientationChanged', orientation)"
                >
            </span>
        </div>
        <input
            v-for="object in objects"
            :key="object"
            type="checkbox"
            class="object_checkbox"
            :data-type="object"
            :checked="hasObject(object)"
            @change="$emit('objectChanged', object)"
        >
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import WorldObject from "~/interfaces/WorldObject";
import useEditorStore from "~/stores/editor";

const props = defineProps<{
    selectedCell: object
}>();

const store = useEditorStore();

const orientations = ["N", "S", "E", "W"];
const objects = ["hatchet", "grass", "vitoria"];

const hasObject = (object: string): boolean => undefined !== store.sheepfold.objects.find(
    (obj:WorldObject) => obj.type === object.toLowerCase() &&
        obj.position.x === props.selectedCell.col &&
        obj.position.y === props.selectedCell.row,
);

const hasSheep = computed(
    () => store.sheepfold.start.position.x === props.selectedCell.col &&
        store.sheepfold.start.position.y === props.selectedCell.row,
);

const hasOrientation = (orientation: string) => (
    hasSheep.value && store.sheepfold.start.orientation === orientation
);
</script>

<style lang="scss" scoped>
.options_box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0.68rem;
    justify-items: center;

    .orientation {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        .cardinal_buttons {
            display: flex;
            gap: 1.25rem;
        }
    }
}

.object_checkbox {
    width: 7.75rem;
    appearance: none;

    &::before {
        font-family: var(--font-editor);
        font-size: 1.37rem;
        font-weight: 600;
        color: var(--color-white);
        content: attr(data-type);
        text-transform: capitalize;
    }

    &:checked {
        &::before {
            color: var(--color-green-lighter);
        }
    }
    &.cardinal {
        width: 1rem;

        &::before {
            font-size: 1rem;
        }
    }
}
</style>
