import {DIR} from "../components/Arrow/Arrow";

export interface Coords {
    x: number
    y: number
    startX: number
    startY: number
}

export interface ArrowsDirection {
    array: Array<DIR.UP | DIR.LEFT | DIR.DOWN | DIR.RIGHT>
}

export interface ArrowsVisibility {
    array: Array<boolean>
}