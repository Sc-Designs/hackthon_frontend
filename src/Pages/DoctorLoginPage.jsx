import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, EyeClosedIcon, Eye } from "lucide-react";
import DoctorAxios from "../Config/DoctorAxios";
import { useDispatch } from "react-redux";
import { login } from "../Store/Reducers/DoctorReducer";
import { useNavigate } from "react-router-dom";

const DoctorLoginPage = () => {
  const [seepass, setSeePass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit = async(data) => {
    const res = await DoctorAxios.post("/doctor/login", data);
    localStorage.setItem("DoctorToken" ,res.data.token);
    dispatch(login(res.data.doctor))
    navigate("/doctor-profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Doctor Login
        </h2>
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Mail className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className={`bg-transparent outline-none flex-1 text-gray-700 ${
              touchedFields.email && errors.email
                ? "border-b-2 border-red-500"
                : ""
            }`}
            {...register("email", { required: true })}
          />
        </div>
        {touchedFields.email && errors.email && (
          <span className="text-red-500 text-sm ml-1">Email is required</span>
        )}
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Lock className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type={seepass ? "text" : "password"}
            placeholder="Password"
            className={`bg-transparent outline-none flex-1 text-gray-700 ${
              touchedFields.password && errors.password
                ? "border-b-2 border-red-500"
                : ""
            }`}
            {...register("password", { required: true })}
          />
          {seepass ? (
            <Eye onClick={() => setSeePass(false)} />
          ) : (
            <EyeClosedIcon onClick={() => setSeePass(true)} />
          )}
        </div>
        {touchedFields.password && errors.password && (
          <span className="text-red-500 text-sm ml-1">
            Password is required
          </span>
        )}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-4 mt-2 transition">
          Login
        </button>
        <div className="flex gap-x-2 items-center">
          <div className="w-full h-[1px] bg-black"></div>
          <h1 className="font-semibold">Or</h1>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
        <div className="flex justify-between text-sky-600 font-semibold">
          <button
            onClick={() => navigate("/doctor-register")}
            className="cursor-pointer">
            SignUp
          </button>
          <button className="cursor-pointer">Forget Password?</button>
        </div>
      </form>
    </div>
  );
};

export default DoctorLoginPage;