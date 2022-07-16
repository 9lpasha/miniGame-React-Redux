import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import coordsSlice from "./slices/coordsSlice";
import arrowDirectionSlice from "./slices/arrowsDirectionSlice";
import arrowsVisibilitySlice from "./slices/arrowsVisibilitySlice";
import canAnswerSlice from "./slices/canAnswerSlice";

export const store = configureStore({
    reducer: {
        coords: coordsSlice,
        arrowsDirection: arrowDirectionSlice,
        arrowsVisibility: arrowsVisibilitySlice,
        canAnswerSlice: canAnswerSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch