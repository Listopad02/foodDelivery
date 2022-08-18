import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface orderState {
    vegan: boolean,
    meat: boolean
}

const initialState: orderState = { vegan: false, meat: false };

export const clickSlice = createSlice({
    name: "click",
    initialState,
    reducers: {
        setVegan: (state, action) => {
            state.vegan = action.payload
        },
        setMeat: (state, action) => {
            state.meat = action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { setVegan, setMeat } = clickSlice.actions;

export default clickSlice.reducer;
