import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  label: string;
  done: boolean;
}

export interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [{ id: 1, label: "Learn about React", done: true }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleDone: (state, action: PayloadAction<Task["id"]>) => {
      const task = state.tasks.find((task) => task.id == action.payload);
      if (!task) return;
      const index = state.tasks.indexOf(task);

      if (index >= 0) {
        state.tasks[index].done = !state.tasks[index].done;
      }
    },
    removeTask: (state, action: PayloadAction<Task["id"]>) => {
      state.tasks = state.tasks.filter((T) => T.id !== action.payload);
    },
  },
});

export const { addTask, removeTask, toggleDone } = todoSlice.actions;

// I can also define selectors to get state without having to change its values at a some point.

export default todoSlice.reducer;
