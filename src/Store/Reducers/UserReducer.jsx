import { createSlice } from "@reduxjs/toolkit";
// import { UserSlice } from './UserReducer';

const initialState = null;

export const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        // all Sync actions
        login: (state,action)=>{
            return action.payload;
        },
        dataFetchFromAuth: (state,action)=>{
            return action.payload;
        }
    }
});

export const UserReducer = UserSlice.reducer;
export const { login, dataFetchFromAuth } = UserSlice.actions;
