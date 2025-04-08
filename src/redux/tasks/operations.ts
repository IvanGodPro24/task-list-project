import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "./tasks.types";

export const fetchTasks = createAsyncThunk<
  Task[],
  void,
  { rejectValue: string }
>("tasks/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/tasks");

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addTask = createAsyncThunk<Task, string, { rejectValue: string }>(
  "tasks/addTask",
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post("/tasks", { text });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk<
  Task,
  string,
  { rejectValue: string }
>("tasks/deleteTask", async (taskId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/tasks/${taskId}`);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const toggleCompleted = createAsyncThunk<
  Task,
  Task,
  { rejectValue: string }
>("tasks/toggleCompleted", async (task, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/tasks/${task.id}`, {
      completed: !task.completed,
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const editTask = createAsyncThunk<
  Task,
  { id: string; text: string },
  { rejectValue: string }
>("tasks/editTask", async ({ id, text }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/tasks/${id}`, { text });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
