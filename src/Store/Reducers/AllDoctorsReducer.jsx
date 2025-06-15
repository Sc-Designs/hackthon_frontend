import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const AllDoctorSlice = createSlice({
    name:"AllDoctors",
    initialState,
    reducers:{
        pushData: (state,action)=>{
            return action.payload;
        },
    }
})

export const AllDoctorReducer = AllDoctorSlice.reducer;
export const {pushData} = AllDoctorSlice.actions;