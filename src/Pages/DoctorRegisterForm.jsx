import React from "react";
import { useForm } from "react-hook-form";
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const DoctorRegisterForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Doctor Data:", data);
    reset();
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
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center gap-2">
              <Lock size={18} />
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Password"
                className="w-full border rounded px-3 py-2"
              />
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
                className="w-full border rounded px-3 py-2"
              />
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
                className="w-full border rounded px-3 py-2"
              />
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
                placeholder="Qualifications"
                className="w-full border rounded px-3 py-2"
              />
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
                className="w-full border rounded px-3 py-2"
              />
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
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {errors.specialization && (
              <p className="text-red-500 text-sm">
                {errors.specialization.message}
              </p>
            )}
          </div>

          {/* Optional Fields */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                <input
                  {...register("experience", {
                    maxLength: { value: 2, message: "Not valid!" },
                  })}
                  placeholder="Experience (e.g. 5)"
                  type="number"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              {errors.experience && (
                <p className="text-red-500 text-sm">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Languages size={18} />
              <input
                {...register("languages")}
                placeholder="Languages (e.g. English, Hindi)"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <input
                {...register("availableDays")}
                placeholder="Available Days (e.g. Mon-Fri)"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <input
                {...register("availableTime")}
                placeholder="Available Time (e.g. 10AM - 4PM)"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <Hospital size={18} />
              <input
                {...register("hospitalAffiliation")}
                placeholder="Hospital Affiliation"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <Building2 size={18} />
              <input
                {...register("clincname")}
                placeholder="Clinic Name"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <Venus size={18} />
              <select
                {...register("gender")}
                className="w-full border rounded px-3 py-2">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded mt-4 transition duration-200">
          Register
        </button>
        <div className="flex gap-x-2 items-center">
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
