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
import Blog from "../Pages/blogs";
import AllBlogs from "../Pages/AllBlogs";
import Emergency from "../Pages/Emergency";
import NewsList from "../Components/newsList";
import HealthNewsPage from "../Pages/news";

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
        <Route element={<UserAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/fundraiser" element={<FundraisingForm />} />
          <Route path="/Fundraisingcampaigns" element={<Fundraisingcampaigns/>}/>
          <Route path="/fundraisingprofile" element={<DonateFund/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/allblogs" element={<AllBlogs/>}/>
          <Route path="/emergency" element={<Emergency/>}/>
          <Route path="/news" element={<HealthNewsPage/>}/>
          
        </Route>
      </Routes>
  );
};

export default AllRouters;
