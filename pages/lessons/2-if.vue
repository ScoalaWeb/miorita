<!-- eslint-disable max-len -->
<template>
    <TheLesson
        :code="code"
        :options="{
            size: { x: 4, y: 2 },
            start: {
                position: { x: 0, y: 1 },
                orientation: 'E',
                picked: {},
            },
            walls: {
                x: wall ? [
                    {x: 0, y: 1}
                ] : undefined
            },
            objects: [
                {
                    position: { x: 3, y: 0 },
                    type: 'grass',
                    fixed: true
                },
                {
                    position: { x: 3, y: 1 },
                    type: 'grass',
                    fixed: true
                },
            ],
            timeout: 1000,
            title: 'Conditional statements',
            lesson: 2,
            nextLesson: '3-while',
            previousLesson: '1-intro',
            details: [
                {
                    title: 'instructions',
                    text: [
                        'We are faced with two paths, both having a happy ending: A happy and stuffed Miorița.',
                        'She is very hungry, and needs to be led to the nearest patch of grass. However, there may be a fence in the way.',
                        'We should come up with one set of instructions that will tackle both scenarios.',
                    ],
                    class: 'paragraph'
                },
                {
                    title: 'new commands',
                    text: [
                        'if() && else',
                        'canMove()',
                        '!canMove()',
                    ],
                    class: 'code'
                },
                {
                    title: 'challenge',
                    text: [
                        'Help Miorița reach the closest patch of grass so she can finally eat.',
                        'Delete the code that already does this and come up with the best way to do it.',
                    ],
                    class: 'paragraph'
                },
            ],
        }"
    >
        <template #options>
            <label :class="$style.fence">
                <input
                    v-model="wall"
                    type="checkbox"
                    class="micon"
                    :class="$style.checkbox"
                >
                fence
            </label>
        </template>
    </TheLesson>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheLesson from "~/components/Lesson/TheLesson.vue";

@Component({
    components: { TheLesson },
})
export default class LessonSimpleIf extends Vue {
    wall:boolean = true;

    code:string = `/*
    if() is a special instruction that causes the next instruction to run or not
    depending on the condition given between the parenthesis.
*/

if ( canMove() ) {
    /*
        Using { curly braces } allows running multiple instructions in response
        to a single condition. These are called "code blocks".
    */

    move()
    move()
    move()
} else {
    /*
        The "else" statement can be attached to an "if" statement and represents
        instructions that run when the "if" condition is false.
    */

    turnRight()
    turnRight()
    turnRight()
    // Turing right 3 times gets us to the same result as turning left one time.

    move()
    turnRight()
    move()
    move()
    move()
}

// After the if+else statements, we can continue doing stuff...

// The next instruction makes Miorița move to the start position.
// It is a code alternative to the "Reset" button.
reset()

/*
    Both the "if", and the "else" blocks end with the move() instruction used
    multiple times.
    Seeing the sheepfold from above, we can notice that once Miorița is facing
    left, she always has to move 3 times.
    We can move the 3 instructions after the if+else statement.
    We can also remove the "else" statement if we use the ! operator in the
    "if" condition. ! flips the expression after it.
    So true becomes false, and false becomes true.
*/

if ( ! canMove() ) {
    // Handle the case where Miorița is blocked by a fence.
}

// Then, run 3 move commands regardless of anything else.

/*
    Final note #1
    -------------
    You may notice that "if" and "else" are colored differently,
    and also they do not cause any output in the console.
    They are statements of the language, not just functions made specifically
    for this application.

    Final note #2
    -------------
    See how instructions inside a block are indented to the right?
    This is not required, but it makes the code slightly more readable.
*/
`;
}
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
