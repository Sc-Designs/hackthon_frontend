import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DoctorAxios from "../Config/DoctorAxios";
import { useDispatch } from "react-redux";
import { dataFetchFromAuth } from "../Store/Reducers/DoctorReducer";

const DoctorAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("DoctorToken");
    console.log(token)
    const fetchUser = async () => {
      if (!token) {
        navigate("/doctor-login");
        return;
      }

      try {
        const res = await DoctorAxios.get("/doctor/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(dataFetchFromAuth(res.data.Doctor));
        setLoading(false);
      } catch (err) {
        console.log("Auth Error", err);
        localStorage.removeItem("DoctorToken");
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate, dispatch]);

  if (loading) return <div>Loading...</div>;
  return <Outlet />;
};

export default DoctorAuth;
