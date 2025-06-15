import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from "./Reducers/UserReducer"
import { DoctorReducer } from "./Reducers/DoctorReducer";
<<<<<<< HEAD
import { AllDoctorReducer } from "./Reducers/AllDoctorsReducer";
=======
import Fundraise from"./Reducers/fundraiseReducer";
>>>>>>> rubultanti
export const store = configureStore({
    reducer:{
        // all reducers
        // key: value of key
        User : UserReducer,
        Doctor: DoctorReducer,
<<<<<<< HEAD
        AllDoctors: AllDoctorReducer
=======
        fundraise:Fundraise

>>>>>>> rubultanti
    }
})