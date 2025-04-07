import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState, StatusFilterType } from "./filters.types";

const initialState: FiltersState = {
  status: "all",
};

const slice = createSlice({
  name: "filters",

  initialState,

  reducers: {
    setStatusFilter: (state, action: PayloadAction<StatusFilterType>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;

export default slice.reducer;
