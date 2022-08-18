import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface orderState {
  inputAddr: string,
  totalOrder: any[]
}

const initialState: orderState = { inputAddr: '', totalOrder: [] };

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setInputAddr: (state, action: PayloadAction<any>) => {
      state.inputAddr = action.payload
    },
    incrementOrder: (state, action: PayloadAction<any>) => {
      state.totalOrder.push(action.payload)
      // console.log("totalOrder", state.totalOrder)
    },
    decrementOrder: (state, action: PayloadAction<any>) => {
      if (state.totalOrder.indexOf(action.payload) !== -1) {
        state.totalOrder.splice(state.totalOrder.indexOf(action.payload), 1)
      }
      // console.log("totalOrder", state.totalOrder)
    },
  },
});

export const { setInputAddr, incrementOrder, decrementOrder } = mapSlice.actions;

export default mapSlice.reducer;
