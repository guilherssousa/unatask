import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

import { useSelector } from "react-redux";

import { loadState } from "./browser-storage";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTasks = () =>
  useSelector((state: RootState) => state.todo.tasks);
