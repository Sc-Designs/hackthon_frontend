import { Pencil } from "lucide-react";
import React from "react";

const PetientProfile = ({ patient, bookedDoctors,fn }) => {
    console.log(patient)
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-6 md:px-20">
      {/* Profile Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full border-2 relative border-blue-500">
            <img
              src={
                `data:${patient.pictype};base64,${patient.profilePic}` ||
                "/default-avatar.png"
              }
              alt="Profile"
              className="w-w-full h-full rounded-full object-cover"
            />
            <abbr title="Edit Profile Pic">
            <div
              onClick={() => fn(true)}
              className="px-1 absolute cursor-pointer hover:bg-yellow-400 duration-150 -translate-x-1/2 -right-5 -bottom-1 rounded-full py-1 bg-yellow-300">
              <Pencil className="scale-75" />
            </div>
                  </abbr>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {patient.username}
            </h2>
            <p className="text-gray-600">{patient.email}</p>
            <p
              className={`mt-1 text-sm font-medium ${
                patient.isActive ? "text-green-600" : "text-red-500"
              }`}>
              {patient.isActive ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>

      {/* Booked Doctors Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Booked Doctors
        </h3>
        {bookedDoctors?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bookedDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-center space-x-4 mb-3">
                  <img
                    src={doctor.profilePic || "/doctor-placeholder.png"}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Hospital: {doctor.hospital}
                </p>
                <p className="text-sm text-gray-600">
                  Experience: {doctor.experience} years
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No doctors booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default PetientProfile;
