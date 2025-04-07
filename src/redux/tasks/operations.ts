import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "./tasks.types";

export const fetchTasks = createAsyncThunk<Task[]>(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Task[]>("/tasks");

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk<Task, string>(
  "tasks/addTask",
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post<Task>("/tasks", { text });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk<Task, string>(
  "tasks/deleteTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await axios.delete<Task>(`/tasks/${taskId}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk<Task, Task>(
  "tasks/toggleCompleted",
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.patch<Task>(`/tasks/${task.id}`, {
        completed: !task.completed,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk<Task, { id: string; text: string }>(
  "tasks/editTask",
  async ({ id, text }, { rejectWithValue }) => {
    try {
      const response = await axios.patch<Task>(`/tasks/${id}`, { text });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
