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
    changeInData: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    signup: (state,action)=>{
      return action.payload;
    }
  },
});

export const DoctorReducer = DoctorSlice.reducer;
export const { login, dataFetchFromAuth, changeInData, signup } = DoctorSlice.actions;
