import { createSelector } from "@reduxjs/toolkit";
import { selectTasks } from "../tasks/selectors";
import { RootState } from "../store.types";

export const selectStatusFilter = (state: RootState) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);
