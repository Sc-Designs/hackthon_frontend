import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const DoctorSlice = createSlice({
  name: "DoctorSlice",
  initialState,
  reducers: {
    // all Sync actions
    login: (state, action) => {
      return action.payload;
    },
    dataFetchFromAuth: (state, action) => {
      return action.payload;
    },
  },
});

export const DoctorReducer = DoctorSlice.reducer;
export const {login, dataFetchFromAuth} = DoctorSlice.actions;
