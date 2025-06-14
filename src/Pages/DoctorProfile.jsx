import React, { useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Languages,
  Hospital,
  Building2,
  CalendarDays,
  Clock,
  Stethoscope,
} from "lucide-react";
import { useSelector } from "react-redux";

// Doctor info
const doctor = {
  image:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80", // Sample doctor image
};

// Dummy patients
const patients = [
  {
    id: 1,
    name: "Ankita Sharma",
    age: 32,
    problem: "Chest Pain",
    date: "2025-06-13",
    time: "11:30 AM",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    age: 45,
    problem: "High BP",
    date: "2025-06-14",
    time: "10:00 AM",
  },
];

const DoctorProfile = () => {
  const doctorDets = useSelector(state=>state.Doctor);
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* Doctor Profile */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-10 flex flex-col md:flex-row gap-6 items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={
              doctor.ProfilePic == null
                ? doctor.image
                : `data:${doctor.pictype};base64,${doctor.profilepic}`
            }
            alt="Doctor"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-200 shadow"
          />
        </div>

        {/* Doctor Info Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <Stethoscope size={24} /> Doctor Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem
              icon={<User size={18} />}
              label="Name"
              value={`Dr. ${doctorDets.name}`}
            />
            <InfoItem
              icon={<Mail size={18} />}
              label="Email"
              value={doctorDets.email}
            />
            <InfoItem
              icon={<Phone size={18} />}
              label="Phone"
              value={doctorDets.phone}
            />
            <InfoItem
              icon={<Stethoscope size={18} />}
              label="Specialization"
              value={doctorDets.specialization}
            />
            <InfoItem
              icon={<GraduationCap size={18} />}
              label="Qualifications"
              value={doctorDets.qualifications}
            />
            <InfoItem
              icon={<Briefcase size={18} />}
              label="Experience"
              value={doctorDets.experience}
            />
            <InfoItem
              icon={<Languages size={18} />}
              label="Languages"
              value={doctorDets.languages}
            />
            <InfoItem
              icon={<Hospital size={18} />}
              label="Hospital"
              value={doctorDets.hospitalAffiliation}
            />
            <InfoItem
              icon={<Building2 size={18} />}
              label="Clinic"
              value={
                doctorDets.clincname ? doctorDets.clincname : "Not Mentioned"
              }
            />
            <InfoItem
              icon={<MapPin size={18} />}
              label="Address"
              value={doctorDets.address}
            />
            <InfoItem
              icon={<CalendarDays size={18} />}
              label="Available Days"
              value={
                doctorDets.availableDays.length != 0
                  ? doctorDets.availableDays
                  : "Not Mentioned"
              }
            />
            <InfoItem
              icon={<Clock size={18} />}
              label="Available Time"
              value={
                doctorDets.availableTime
                  ? doctorDets.availableTime
                  : "Not Mentioned"
              }
            />
          </div>
        </div>
      </div>

      {/* Patient Booking Cards */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Patient Bookings
        </h2>
        {patients.length === 0 ? (
          <p className="text-gray-600">No patients have booked yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-1 text-blue-800">
                  {patient.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">Age: {patient.age}</p>
                <p className="text-sm text-gray-600 mb-1">
                  Problem: {patient.problem}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Date: {patient.date}
                </p>
                <p className="text-sm text-gray-600">Time: {patient.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable info row
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-2">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  </div>
);

export default DoctorProfile;
