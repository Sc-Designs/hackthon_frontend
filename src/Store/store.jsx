import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from "./Reducers/UserReducer"
import { DoctorReducer } from "./Reducers/DoctorReducer";
export const store = configureStore({
    reducer:{
        // all reducers
        // key: value of key
        User : UserReducer,
        Doctor: DoctorReducer,
    }
})