import { ref } from "vue";
import editorApi from "@/lib/editorApi";
import WorldOptions from "~/interfaces/WorldOptions";

// @ts-ignore
export default function editorLessons ({ selectedLanguage, currentTranslations }) {
    const lessonIndex = ref<number | null>(null);
    const category = ref<string>("");
    const sheepfold = ref<WorldOptions>({
        size: { x: 4, y: 4 },
        start: {
            position: { x: 0, y: 0 },
            orientation: "E",
            picked: {},
        },
        walls: {
            x: [
                { x: 0, y: 0 },
            ],
            y: [
                { x: 0, y: 0 },
            ],
        },
        objects: [],
        timeout: 1000,
    });

    const selectIndex = (index: number) => {
        lessonIndex.value = index;
        localStorage.setItem("lessonIndex", `${index}`);
    };

    const selectCategory = (type: string) => {
        category.value = type;
        localStorage.setItem("lessonCategory", type);
    };

    const url = `api/language?lang=${selectedLanguage.value}`;

    const handleChange = async (lessons: Array<WorldOptions>) => {
        const data = {
            path: [
                category.value,
            ],
            text: lessons,
        };

        await editorApi(url, { data, method: "PATCH" });
    };

    const addLesson = async (title: string) => {
        const currentType = currentTranslations.value[category.value];
        const slug = title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");

        currentType.push({
            title,
            slug,
            description: "",
            details: [],
            workCode: "",
        });

        await handleChange(currentType);

        await editorApi(`api/lesson?title=${slug}&type=${category.value}`, {
            method: "POST",
        });

        return {
            slug,
            index: currentType.length - 1,
        };
    };

    const patchLesson = async (path: Array<string>, text: any) => {
        const { slug } = currentTranslations.value[category.value][lessonIndex.value!];

        const response = await editorApi(
            `/api/lesson?title=${slug}&type=${category.value}`,
            {
                data: {
                    path,
                    text,
                },
                method: "PATCH",
            },
        );

        sheepfold.value = await response.json();
    };

    const removeLesson = async (slug:string, index: number) => {
        const currentType = currentTranslations.value[category.value];

        // eslint-disable-next-line no-alert
        if (!window.confirm("Are you sure?")) { return; }

        currentType.splice(index, 1);
        await handleChange(currentType);

        await editorApi(`api/lesson?title=${slug}&type=${category.value}`, {
            method: "DELETE",
        });
    };

    const renameLesson = async (oldSlug: string, newSlug:string) => {
        await editorApi(`api/lesson?title=${oldSlug}&type=${category.value}`, {
            method: "DELETE",
        });

        await editorApi(`api/lesson?title=${newSlug}&type=${category.value}`, {
            method: "POST",
            data: {
                defaults: sheepfold.value,
            },
        });
    };

    const getLesson = async (type: string, slug: string) => {
        sheepfold.value = await (await editorApi(`api/lesson?title=${slug}&type=${type}`, {
            method: "GET",
        })).json();
    };

    return {
        getLesson,
        addLesson,
        patchLesson,
        removeLesson,
        renameLesson,
        selectIndex,
        selectCategory,
        handleChange,
        lessonIndex,
        category,
        sheepfold,
    };
}
