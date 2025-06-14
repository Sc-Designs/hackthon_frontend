import { createSlice } from "@reduxjs/toolkit";
// import { UserSlice } from './UserReducer';

const initialState = {};

export const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        // all Sync actions
    }
});

export const UserReducer = UserSlice.reducer;
// export const { all action name } = UserSlice.actions;
