import {ArrowsVisibility} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DIR} from "../../components/Arrow/Arrow";

const initialState: ArrowsVisibility = {
    array: [false, false, false, false, false, false, false, false, false, false]
}

const array = [false, true]

interface Payload {
    num: number
    value: boolean
}

export const arrowSlice = createSlice({
    name: 'arrowSlice',
    initialState,
    reducers: {
        setArrowsVisibility: (state: ArrowsVisibility, action: PayloadAction<Payload>) => {
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
export const {setArrowsVisibility} = arrowSlice.actions