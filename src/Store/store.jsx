import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from "./Reducers/UserReducer"
export const store = configureStore({
    reducer:{
        // all reducers
        // key: value of key
        User : UserReducer,
    }
})