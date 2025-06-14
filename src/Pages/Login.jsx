import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, EyeClosed, EyeIcon } from "lucide-react";
import Axios from "../Config/Axios"
import {useDispatch, useSelector} from "react-redux"
import { login } from "../Store/Reducers/UserReducer";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const [passSee, setPassSee] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        const res = await Axios.post("/user/login", data)
        dispatch(login(res.data.user))
        localStorage.setItem("UserToken", res.data.token);
        navigate("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="lg:w-full lg:max-w-md w-[90%] bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center font-sans">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="gmail" className="block mb-1 font-medium font-sans">
              Gmail
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="gmail"
                type="email"
                className="w-full bg-transparent outline-none font-sans"
                placeholder="yourname@gmail.com"
                {...register("email", {
                  required: "Gmail is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Enter a valid Gmail address",
                  },
                })}
              />
            </div>
            {errors.gmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gmail.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium font-sans">
              Password
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="password"
                type={passSee ? "text" : "password"}
                className="w-full bg-transparent outline-none font-sans"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {passSee ? (
                <EyeIcon onClick={() => setPassSee(false)} />
              ) : (
                <EyeClosed onClick={() => setPassSee(true)} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded font-sans transition">
            Login
          </button>
          <div className="flex gap-x-2 items-center">
            <div className="w-full h-[1px] bg-black"></div>
            <h1 className="font-semibold">Or</h1>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
          <div className="flex justify-between text-sky-600 font-semibold">
            <button className="cursor-pointer">SignUp</button>
            <button className="cursor-pointer">Forget Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
}