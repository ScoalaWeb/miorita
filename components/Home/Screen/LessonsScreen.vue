<template>
    <main id="Lessons" :class="$style.screen">
        <div ref="carousel" :class="[$style.carousel, 'keen-slider']">
            <div
                v-for="(lesson, index) in lessons"
                :key="lesson.title"
                :class="[$style.seat, 'keen-slider__slide']"
            >
                <article
                    :class="[
                        $style.card
                    ]"
                    :style="{
                        '--scale': slides[index].scale + '%',
                        backgroundImage:
                            `url('${require(`~/assets/img/lessons/${lesson.background}.svg`)}')`
                    }"
                >
                    <h3>{{ lesson.title }}</h3>
                    <p>{{ lesson.description }}</p>
                    <span :class="$style.lessonNumber">{{ index }}</span>
                    <BasePlayButton :class="$style.playButton" color="red" :link="lesson.link" />
                </article>
            </div>
        </div>
        <button
            :class="{
                [$style.arrows]: true,
                [$style.arrowPrev]: true,
                [$style.active]: current > 0,
                [$style.animating]: animating,
            }"
            @click="keen.prev()"
        >
            <span class="invisible">
                Previous
            </span>
            <span aria-hidden="true">
                &lt;
            </span>
        </button>
        <button
            :class="{
                [$style.arrows]: true,
                [$style.arrowNext]: true,
                [$style.active]: current < (lessons.length - 1),
                [$style.animating]: animating,
            }"
            @click="keen.next()"
        >
            <span class="invisible">
                Next
            </span>
            <span aria-hidden="true">
                &gt;
            </span>
        </button>
        <div :class="$style.nav">
            <button
                v-for="(lesson, index) in lessons"
                :key="lesson.title"
                :class="{
                    [$style.navButton]: true,
                    [$style.active]: current === index,
                }"
                @click="keen.moveToIdx(index)"
            >
                <span class="invisible">
                    {{ lesson.title }}
                </span>
            </button>
        </div>
    </main>
</template>

<script setup>
import KeenSlider from "keen-slider";
import { onMounted, onUnmounted, ref } from "vue";
import lessons from "~/content/lessons.json";

const MIN_SCALE = 80;

const carousel = ref(null);
const keen = ref(null);
const current = ref(0);
const animating = ref(false);
const slides = ref(lessons.map(() => ({
    visible: true,
    scale: MIN_SCALE,
})));

onMounted(() => {
    keen.value = new KeenSlider(carousel.value, {
        initial: current.value,

        slides: {
            origin: "center",
            perView: 2,
        },

        detailsChanged (slider) {
            const { details } = slider.track;
            const progress = details.progress * 100;
            const allocation = 100 / (details.slides.length - 1);

            slides.value = details.slides.map((slide, index) => {
                const natural = index * allocation;
                const currentDistance = Math.abs(natural - progress);

                return {
                    visible: slide.portion > 0,
                    scale: (100 - currentDistance),
                };
            });
        },

        slideChanged (slider) {
            current.value = slider.track.details.rel;
        },

        dragStarted () {
            animating.value = true;
        },
        animationStarted () {
            animating.value = true;
        },
        dragEnded () {
            animating.value = false;
        },
        animationEnded () {
            animating.value = false;
        },
    });
});

onUnmounted(() => {
    keen.value?.destroy();
    keen.value = null;
});

</script>

<style module lang="scss">
@import "~/assets/scss/1-tools/color-mode";

.screen {
    display: flex;
}

.carousel {
    display: flex;
    width: 100%;
    overflow: clip;
}

.seat {
    width: 50vw;
    display: grid;
    justify-content: center;
}

.card {
    display: grid;
    gap: 0.5rem;
    align-content: start;
    justify-items: start;
    flex: 1 0 64vmin;
    width: 64vmin;
    height: 57vmin;
    border: 0.2rem solid var(--border-color);
    padding: 2.5rem 4rem 0;
    border-radius: 1.25rem;
    background-color: var(--background-color);
    background-size: cover;
    position: relative;
    transform: scale(var(--scale));
    user-select: none;

    &.active {
        transform: scale(1);
    }

    h3 {
        font-family: var(--font-highlight);
        font-weight: bold;
        font-size: 6.5vmin;
    }

    p {
        width: 88.5%;
        font-size: 3.3vmin;
        margin-bottom: 1rem;
    }
}

.playButton::before {
    content: "";
    position: absolute;
    inset: 0;
}

.lessonNumber {
    position: absolute;
    left: 2.5vmin;
    bottom: 0;
    font-size: 10vmin;
    color: var(--border-color);
}

.arrows {
    position: absolute;
    inset-block: 0;
    display: flex;
    border: 0;
    padding: 0;
    padding-block-start: 20vh;
    background: transparent;
    color: var(--link-color);
    font-family: var(--font-highlight);
    font-size: 14vmin;
    font-weight: 700;
    opacity: 0;

    &:hover {
        color: var(--link-color-hover);
    }

    &.active {
        opacity: 1;
    }

    &.animating {
        display: none;
    }
}

.arrowPrev {
    width: 24vw;
    left: 0;
    justify-content: flex-end;
}

.arrowNext {
    width: 24vw;
    right: 0;
    justify-content: flex-start;
}

.nav {
    position: fixed;
    inset-block-end: 3rem;
    inset-inline: 50%;
    transform: translateX(-50%);
    width: min-content;
    display: flex;
    gap: 1rem;
}
.navButton {
    width: 1.25rem;
    height: 1.25rem;
    min-height: 1.25rem;
    border: 0;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.5s;
    cursor: pointer;

    &.active {
        transform: scale(1.25);
    }

    @include in-light-mode {
        background: var(--color-gray-300);

        &:hover, &:focus, &:active, &.active {
            background: var(--color-gray-500);
        }
    }

    @include in-dark-mode {
        background: var(--color-gray-300);

        &:hover, &:focus, &:active, &.active {
            background: var(--color-white);
        }
    }
}
</style>
