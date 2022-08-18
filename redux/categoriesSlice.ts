import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface orderState {
  [key: number]: any;
}

const initialState: orderState = {};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<any>) => {
      action.payload.map((e: any) => {
        state[e.id] = e;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
