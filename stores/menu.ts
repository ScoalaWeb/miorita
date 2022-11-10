import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

const buttons = [
    {
        label: "About",
        slug: "about",
    },
    {
        label: "Lessons",
        slug: "lessons",
    },
    {
        label: "Playground",
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

    onMounted(() => {
        const currentLocation = window.location.hash.substring(1);
        const currentButtonIndex = buttons.findIndex(btn => btn.slug === currentLocation);
        if (currentButtonIndex >= 0) {
            setSelected(currentButtonIndex);
        }
    });

    return { buttons, selected, selectedIndex, setSelected };
});

export default useMenuStore;
