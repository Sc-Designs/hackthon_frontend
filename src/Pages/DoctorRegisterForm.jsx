import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DoctorAxios from "../Config/DoctorAxios";
import {
  User,
  Lock,
  Mail,
  Phone,
  Hospital,
  MapPin,
  Building2,
  Languages,
  CalendarDays,
  Clock,
  Venus,
  GraduationCap,
  Briefcase,
  Eye,
  EyeClosed,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signup } from "../Store/Reducers/DoctorReducer";
import { useDispatch } from "react-redux";

const DoctorRegisterForm = () => {
  const dispatch = useDispatch()
  const splitStringToArray = (str) => {
    if (typeof str !== "string") return [];
    return str.split(",").map((item) => item.trim());
  };

  const navigate = useNavigate();
  const [passSee, setpassSee] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { availableTimeStart, availableTimeEnd, ...restData } = data;

    const transformedData = {
      ...restData,
      availableDays: splitStringToArray(data.availableDays),
      qualifications: splitStringToArray(data.qualifications),
      languages: splitStringToArray(data.languages),
      availableTime: {
        start: availableTimeStart,
        end: availableTimeEnd,
      },
    };

    try {
      const res = await DoctorAxios.post("/doctor/register", transformedData);
      dispatch(signup(res.data.doctor));
      navigate("/doctor-profile");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-5 mb-5 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Doctor Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="w-full border rounded px-3 py-2 outline-none"
              />
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center gap-2">
              <Lock size={18} />
              <div className="w-full border rounded flex pr-2 items-center">
                <input
                  type={passSee ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="Password"
                  className="w-full h-full px-3 py-2 outline-none"
                />
                {passSee ? (
                  <Eye onClick={() => setpassSee(false)} size={18} />
                ) : (
                  <EyeClosed onClick={() => setpassSee(true)} size={18} />
                )}
              </div>
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="Email"
                className="w-full border rounded px-3 py-2 outline-none"
              />
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                placeholder="Phone Number"
                className="w-full border rounded px-3 py-2 outline-none"
              />
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Qualifications */}
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} />
              <input
                {...register("qualifications", {
                  required: "Qualifications are required",
                })}
                placeholder="Qualifications (e.g. MBBS, MD)"
                className="w-full border rounded px-3 py-2 outline-none"
              />
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.qualifications && (
              <p className="text-red-500 text-sm">
                {errors.qualifications.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <input
                {...register("address", { required: "Address is required" })}
                placeholder="Address"
                className="w-full border rounded px-3 py-2 outline-none"
              />
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Specialization */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <User size={18} />
              <input
                {...register("specialization", {
                  required: "Specialization is required",
                })}
                placeholder="Specialization"
                className="w-full border rounded px-3 py-2 outline-none"
              />
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.specialization && (
              <p className="text-red-500 text-sm">
                {errors.specialization.message}
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} />
              <input
                {...register("experience")}
                placeholder="Experience (Years)"
                type="number"
                className="w-full border rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-2">
              <Languages size={18} />
              <input
                {...register("languages")}
                placeholder="Languages (e.g. Hindi, English)"
                className="w-full border rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Available Days */}
          <div>
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <input
                {...register("availableDays")}
                placeholder="Available Days (e.g. Mon,Wed,Fri)"
                className="w-full border rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Available Time - START & END */}
          <div className="md:col-span-2 flex gap-4 items-center">
            <Clock size={18} />
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-600">Start Time</label>
              <input
                type="time"
                {...register("availableTimeStart", {
                  required: "Start time is required",
                })}
                className="border rounded px-3 py-2 outline-none"
              />
              {errors.availableTimeStart && (
                <p className="text-red-500 text-sm">
                  {errors.availableTimeStart.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-600">End Time</label>
              <input
                type="time"
                {...register("availableTimeEnd", {
                  required: "End time is required",
                })}
                className="border rounded px-3 py-2 outline-none"
              />
              {errors.availableTimeEnd && (
                <p className="text-red-500 text-sm">
                  {errors.availableTimeEnd.message}
                </p>
              )}
            </div>
          </div>

          {/* Hospital Affiliation */}
          <div>
            <div className="flex items-center gap-2">
              <Hospital size={18} />
              <input
                {...register("hospitalAffiliation")}
                placeholder="Hospital Affiliation"
                className="w-full border rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Clinic Name */}
          <div>
            <div className="flex items-center gap-2">
              <Building2 size={18} />
              <input
                {...register("clincname")}
                placeholder="Clinic Name"
                className="w-full border rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <div className="flex items-center gap-2">
              <Venus size={18} />
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full border rounded px-3 py-2 outline-none">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="text-red-500 text-lg">*</span>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded mt-4 transition duration-200">
          Register
        </button>

        {/* Or Login */}
        <div className="flex gap-x-2 items-center mt-4">
          <div className="w-full h-[1px] bg-black"></div>
          <h1 className="font-semibold">Or</h1>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
        <button
          onClick={() => navigate("/doctor-login")}
          className="cursor-pointer text-center w-full text-sky-600 font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default DoctorRegisterForm;
