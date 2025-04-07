import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store.types";
import { Task } from "./tasks.types";

export const selectTasks = (state: RootState): Task[] => state.tasks.items;

export const selectIsLoading = (state: RootState): boolean =>
  state.tasks.isLoading;

export const selectError = (state: RootState): string | null =>
  state.tasks.error;

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
