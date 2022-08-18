import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface orderState {
  [key: number]: number;
}

const initialState: orderState = {};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<any>) => {
      if (!state[action.payload]) state[action.payload] = 0;
      state[action.payload] += 1;
    },
    decrement: (state, action: PayloadAction<any>) => {
      if (state[action.payload] !== 0) state[action.payload] -= 1;
    },
    deleteOrder: (state, action) => {
      state[action.payload] = 0;
    },
  },
});

export const { increment, decrement, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
