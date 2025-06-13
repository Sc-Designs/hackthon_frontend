import { createSlice } from "@reduxjs/toolkit";

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
