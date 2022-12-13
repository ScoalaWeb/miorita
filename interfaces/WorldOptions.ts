import WorldObject from "./WorldObject";
import WorldCurrent from "~/interfaces/WorldCurrent";

export type Coordinates<T=number> = {
    x: T
    y: T
};

export default interface WorldOptions {
    size: Coordinates
    start: WorldCurrent
    walls?: Coordinates<Coordinates[]>

    objects: WorldObject[]

    timeout: number
    title: string
    slug: string
    lesson?: number
    nextLesson?: string
    previousLesson?: string
    details: {
        title: string
        text: string[]
        class: "paragraph" | "code"
    }[]
}
