import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleCompleted,
  editTask,
} from "./operations";
import { logOut } from "../auth/operations";
import { Task, TaskState } from "./tasks.types";

const handlePending = (state: TaskState) => {
  state.isLoading = true;
};

const handleRejected = (state: TaskState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState: TaskState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "tasks",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
      })

      .addCase(
        toggleCompleted.fulfilled,
        (state, action: PayloadAction<Task>) => {
          state.isLoading = false;
          state.error = null;

          state.items = state.items.map((task) =>
            task.id === action.payload.id ? action.payload : task
          );
        }
      )

      .addCase(editTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.error = null;

        // const index = state.items.findIndex(
        //   (task) => task.id === action.payload.id
        // );

        // state.items[index] = action.payload;

        state.items = state.items.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })

      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher((action) => {
        return action.type.endsWith("pending");
      }, handlePending)

      .addMatcher((action) => {
        return action.type.endsWith("rejected");
      }, handleRejected);
  },
});

export default slice.reducer;
