import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface orderState {
  [key: number]: any;
}

const initialState: orderState = {};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    addDishes: (state, action: PayloadAction<any>) => {
      action.payload.map((e: any) => {
        state[e.id] = e;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDishes } = dishesSlice.actions;
export default dishesSlice.reducer;