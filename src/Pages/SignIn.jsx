import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, EyeIcon, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Axios from "../Config/Axios"

const SignIn = () => {
    const [passSee, setPassSee] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="lg:w-full max-w-md w-[90%] bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center font-sans">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 font-medium font-sans">
              Username
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="username"
                type="text"
                className="w-full bg-transparent outline-none font-sans"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium font-sans">
              Email
            </label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                className="w-full bg-transparent outline-none font-sans"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded font-sans transition">
            Register
          </button>
          <div className="flex gap-x-2 items-center">
            <div className="w-full h-[1px] bg-black"></div>
            <h1 className="font-semibold">Or</h1>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer text-center w-full text-sky-600 font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn