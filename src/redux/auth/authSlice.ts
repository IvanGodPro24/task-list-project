import { AuthState, User } from "./auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const handleAuthentication = (
  state: AuthState,
  action: { payload: { user: AuthState["user"]; token: string } }
) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleAuthentication)
      .addCase(logIn.fulfilled, handleAuthentication)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;
