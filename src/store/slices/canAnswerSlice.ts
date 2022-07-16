import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CanAnswerSlice {
    flag: boolean
    visibleSuccess: boolean
    visibleMistake: boolean
    visibleCorrect: boolean
    x: number
    y: number
}
const initialState: CanAnswerSlice = {
    flag: false,
    visibleSuccess: false,
    visibleMistake: false,
    visibleCorrect: false,
    x: -1,
    y: -1
}

interface Payload {
    flag: boolean
    visibleSuccess: boolean
    visibleMistake: boolean
    visibleCorrect: boolean
    x: number
    y: number
}

export const canAnswerSlice = createSlice({
    name: 'canAnswerSlice',
    initialState,
    reducers: {
        setCanAnswer: (state: CanAnswerSlice, action: PayloadAction<Payload>) => {
            state.flag = action.payload.flag
            state.visibleSuccess = action.payload.visibleSuccess
            state.visibleMistake = action.payload.visibleMistake
            state.visibleCorrect = action.payload.visibleCorrect
            state.x = action.payload.x
            state.y = action.payload.y
        }
    }
})

export default canAnswerSlice.reducer
export const {setCanAnswer} = canAnswerSlice.actions