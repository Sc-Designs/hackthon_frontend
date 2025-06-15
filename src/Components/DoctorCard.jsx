<<<<<<< HEAD
import React from 'react'

const DoctorCard = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col inset-shadow-[0px_-5px_20px_5px_rgba(0,0,100,0.2)] gap-y-3 p-2 border-2 border-zinc-300 bg-zinc-100 rounded-lg hover:-translate-y-1.5 hover:scale-105 duration-150">
      <div className="w-full rounded-lg max-h-40 overflow-hidden shadow-sm border-1">
        <img
          className="object-cover"
          src="https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
          alt="Doctor img"
        />
      </div>
      <div className="px-4 flex flex-col gap-y-3">
        <h1 className="text-zinc-700 font-medium">Name: Suvam Chakraborti</h1>
        <p className="text-zinc-600 font-medium">
          Specialization: Gynecologist
        </p>
        <p className="text-zinc-500 font-medium">Address: Durgapur</p>
      </div>
      <button className="bg-sky-500 duration-150 cursor-pointer hover:bg-sky-600 rounded-md text-white uppercase font-medium tracking-wide py-3">
        Book Doctor
      </button>
    </div>
  );
}

export default DoctorCard
=======
import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  // Handle cases where doctor or doctor properties are undefined
  const doctorData = doctor || {};
  const {
    image = '',
    name = 'Unknown Doctor',
    specialty = 'General Practitioner',
    rating = 0,
    experience = '0 years',
    availableDays = [] // Default empty array if not provided
  } = doctorData;

  const handleBookClick = () => {
    navigate('/book', { state: { doctor: doctorData } });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-100 hover:shadow-lg transition-all duration-300">
      <div className="p-5">
        <div className="flex items-start space-x-4">
          {image && (
            <img 
              src={image} 
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-2 border-emerald-400"
            />
          )}
          <div className="flex-1">
            <h3 className="font-bold   text-lg text-emerald-900">{name}</h3>
            <p className="text-emerald-600 font-medium">{specialty}</p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-700">{rating}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-emerald-600">{experience} experience</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-emerald-50">
          <h4 className="text-sm font-medium text-emerald-800 mb-2">Available Days:</h4>
          <div className="flex flex-wrap gap-2">
            {availableDays.length > 0 ? (
              availableDays.map((day, index) => (
                <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">
                  {day}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">No availability information</span>
            )}
          </div>
        </div>

        <button
          onClick={handleBookClick}
          className="mt-6 w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
        >
          Book Appointment
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
const SeeAllDoctor = () => {
  const doctors = [
    {
      id: 1,
      image: 'doctor-image-url.jpg',
      name: 'Dr. Sham',
      specialty: 'Cardiologist',
      rating: 4.8,
      experience: '10 years',
      availableDays: ['Monday', 'Wednesday', 'Friday']
    },
    // ... other doctors
  ];

  return (
    <div className="grid gap-4">
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};
export default DoctorCard;
>>>>>>> 69fb339 (Edited frontend code)
