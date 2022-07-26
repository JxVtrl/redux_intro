import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import stockReducer from "./Stock.store";

const store = configureStore({
    reducer: {
        stock: stockReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store
