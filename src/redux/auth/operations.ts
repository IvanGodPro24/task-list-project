import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "./operations.types";
import { RootState } from "../store.types";
import { User } from "./auth.types";

axios.defaults.baseURL = "https://task-manager-api.goit.global/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<AuthResponse, RegisterCredentials>(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/signup", user);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk<AuthResponse, LoginCredentials>(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/login", user);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");

      clearAuthToken();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk<User, void>(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/me");

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
