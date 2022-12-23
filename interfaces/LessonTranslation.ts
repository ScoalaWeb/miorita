
export default interface LessonTranslation {
    title: string
    slug: string
    description: string
    details: Array<{
        title: string
        text: string
        class: "paragraph" | "code"
    }>
    workCode: string

    // Automatically set
    lessonIndex?: number
    lessonCount?: number
    nextLesson?: string | null
    previousLesson?: string | null
}
