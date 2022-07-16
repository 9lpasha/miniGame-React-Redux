import {ArrowsDirection} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DIR} from "../../components/Arrow/Arrow";

const initialState: ArrowsDirection = {
    array: [DIR.UP, DIR.UP, DIR.UP, DIR.UP, DIR.UP, DIR.UP, DIR.UP, DIR.UP, DIR.UP, DIR.UP]
}

interface Payload {
    num: number
    value: DIR.UP | DIR.LEFT | DIR.DOWN | DIR.RIGHT
}

export const arrowSlice = createSlice({
    name: 'arrowSlice',
    initialState,
    reducers: {
        setArrowsDirection: (state: ArrowsDirection, action:PayloadAction<Payload>) => {
            state.array = state.array.map((el, i) => {
                if(i == action.payload.num) {
                    return action.payload.value
                    console.log(action.payload.value)
                } else return el
            })
        }
    }
})

export default arrowSlice.reducer
export const {setArrowsDirection} = arrowSlice.actions