import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/tasks");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post("/tasks", { text });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/tasks/${task.id}`, {
        completed: !task.completed,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async ({ id, text }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/tasks/${id}`, { text });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
