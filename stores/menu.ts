import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

const buttons = [
    {
        label: "texts.main-labels.menu.about-us",
        slug: "about",
    },
    {
        label: "texts.main-labels.menu.lessons",
        slug: "lessons",
    },
    {
        label: "texts.main-labels.menu.playgrounds",
        slug: "playground",
    },
];

const useMenuStore = defineStore("menu", () => {
    const selected = ref("about");
    const selectedIndex = ref(0);

    const setSelected = (index: number) => {
        if (index === undefined) {
            return;
        }
        selected.value = buttons[index].slug;
        selectedIndex.value = index;
    };

    const init = () => {
        if (!window) {
            return;
        }

        const currentLocation = window.location.hash.substring(1);
        if (currentLocation) {
            const currentButtonIndex = buttons.findIndex(btn => btn.slug === currentLocation);
            if (currentButtonIndex >= 0) {
                setSelected(currentButtonIndex);
            }
        } else {
            setSelected(0);
        }
    };

    onMounted(() => {
        init();

        if (window) {
            window.addEventListener("hashchange", init, false);
        }
    });

    return { buttons, selected, selectedIndex, setSelected, init };
});

export default useMenuStore;
