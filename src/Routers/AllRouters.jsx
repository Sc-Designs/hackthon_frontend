import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import FundraisingForm from "../Pages/FundraisingForm";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import UserAuth from "../Auth/UserAuth";
import SignIn from "../Pages/SignIn";
import DoctorPortal from './../Pages/DoctorPortal';
import SeeAllDoctor from "../Pages/SeeAllDoctor";
import DoctorLoginPage from "../Pages/DoctorLoginPage";
import DoctorRegisterForm from "../Pages/DoctorRegisterForm";
import DoctorProfile from "../Pages/DoctorProfile";
import DoctorAuth from "../Auth/DoctorAuth";
import BookingConfirmation from "../Pages/BookingConfirmation";
import BookingPage from './../Pages/BookingPage';
import Fundraisingcampaigns from "../Pages/fundraisingcampaigns";
import DonateFund from './../Pages/DonateFund';

const AllRouters = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/doctor-login" element={<DoctorLoginPage />} />
        <Route path="/doctor-register" element={<DoctorRegisterForm />} />
        <Route path="/Book" element={<BookingPage/>}/>
        <Route path="/booking-confirmation" element={<BookingConfirmation/>}/>
        <Route path="/see-alldoctor" element={<SeeAllDoctor />} />
        <Route element={<DoctorAuth />}>
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/doctor-portal/*" element={<DoctorPortal />} />
        </Route>
          <Route path="/Fundraisingcampaigns" element={<Fundraisingcampaigns/>}/>
          <Route path="/fundraisingprofile" element={<DonateFund/>}/>
        <Route element={<UserAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/fundraiser" element={<FundraisingForm />} />
        </Route>
      </Routes>
  );
};

export default AllRouters;
