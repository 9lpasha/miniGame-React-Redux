import {Coords} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Coords = {
    x: -1,
    y: -1,
    startX: -1,
    startY: -1
}

export const coordsSlice = createSlice({
    name: 'firstSlice',
    initialState,
    reducers: {
        up: (state: Coords) => {
            state.y -= 1
        },
        left: (state: Coords) => {
            state.x -= 1
        },
        down: (state: Coords) => {
            state.y += 1
        },
        right: (state: Coords) => {
            state.x += 1
        },
        setRandomCoords: (state: Coords) => {
            state.x = Math.floor(Math.random()*3)
            state.y = Math.floor(Math.random()*3)
            state.startX = state.x
            state.startY = state.y
        }
    }
})

export default coordsSlice.reducer
export const {up, left, right, down, setRandomCoords} = coordsSlice.actions