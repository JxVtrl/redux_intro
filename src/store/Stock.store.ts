import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
    name: "slice",
    initialState: {
        count: 0,
    },

    reducers: {
        increment (state) {
            state.count++;
        },

        decrement(state) {
            state.count--;
        }
    }
})

export const { increment, decrement } = stock.actions;
export default stock.reducer;