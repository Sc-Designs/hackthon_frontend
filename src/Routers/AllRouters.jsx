import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import FundraisingForm from "../Pages/FundRaisingForm";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import UserAuth from "../Auth/UserAuth";
import SignIn from "../Pages/SignIn";
import DoctorPortal from '../Pages/DoctorPortal';
import SeeAllDoctor from "../Pages/SeeAllDoctor";
import DoctorLoginPage from "../Pages/DoctorLoginPage";
import DoctorRegisterForm from "../Pages/DoctorRegisterForm";
import DoctorProfile from "../Pages/DoctorProfile";
import DoctorAuth from "../Auth/DoctorAuth";
import BookingPage from "../Pages/BookingPage";
import BookingConfirmation from "../Pages/BookingConfirmation";

const AllRouters = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/doctor-login" element={<DoctorLoginPage />} />
      <Route path="/doctor-register" element={<DoctorRegisterForm />} />
      <Route path="/see-alldoctor" element={<SeeAllDoctor />} />
      
      {/* Booking Routes */}
      <Route path="/book" element={<BookingPage />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      
      {/* Doctor Protected Routes */}
      <Route element={<DoctorAuth />}>
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/doctor-portal/*" element={<DoctorPortal />} />
      </Route>
      
      {/* User Protected Routes */}
      <Route element={<UserAuth />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/fundraiser" element={<FundraisingForm />} />
      </Route>
    </Routes>
  );
};

export default AllRouters;