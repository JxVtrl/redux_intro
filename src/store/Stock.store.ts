import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from ".";

const stock = createSlice({
    name: "slice",
    initialState: {
        count: 0,
    },

    reducers: {
        increment (state, action: PayloadAction<number>) {
            state.count += action.payload;
        },

        decrement(state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    }
})

export const { increment, decrement } = stock.actions;
export default stock.reducer;

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function asyncIncrement(amount: number): AppThunk {
    return async (dispatch: AppDispatch) => {
        await sleep(3000);
        dispatch(increment(amount));
    }
}

export function asyncDecrement(amount: number): AppThunk  {
    return async (dispatch: AppDispatch) => {
        await sleep(3000);
        dispatch(decrement(amount));
    }
}