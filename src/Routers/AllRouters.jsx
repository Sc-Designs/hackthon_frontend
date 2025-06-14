import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import FundraisingForm from "../Pages/FundRaisingForm";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import UserAuth from "../Auth/UserAuth";

const AllRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<UserAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/fundraiser" element={<FundraisingForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRouters;
