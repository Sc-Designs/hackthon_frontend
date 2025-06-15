import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import { Search } from 'lucide-react';
import DoctorCard from '../Components/DoctorCard';
import { useDispatch, useSelector } from 'react-redux';
import { pushData } from '../Store/Reducers/AllDoctorsReducer';
import DoctorAxios from "../Config/DoctorAxios"

const SeeAllDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allDoctors = useSelector((state) => state.AllDoctors);
  useEffect(()=>{
    const fetchDoctorsData = async ()=>{
      const res = await DoctorAxios.get("/doctor/see-alldoctor");
      dispatch(pushData(res.data))
    }
    fetchDoctorsData()
  },[])
  const handleBookAppointment = (doctorId) => {
    // You can pass doctor details to booking page if needed
    navigate('/book', { state: { doctorId } });
  };

  return (
    <div className="w-full min-h-screen pt-25">
      <Navigation />
      <div className="lg:w-[80%] w-[90%] fixed z-30 top-24 left-1/2 -translate-x-1/2 mx-auto h-12">
        <div className="group w-full border-2 h-full bg-zinc-50 overflow-hidden duration-150 border-zinc-300 rounded-md flex items-center focus-within:border-violet-500 focus-within:border-2">
          <input
            placeholder="Search Doctor..."
            className="w-full h-full px-4 placeholder:text-zinc-400 placeholder:font-medium outline-none border-none"
            type="text"
          />
          <div className="px-3 bg-zinc-300 border-l-2 border-zinc-200 duration-150 group-focus-within:border-violet-500 h-full flex items-center">
            <Search className="text-zinc-600 w-6" />
          </div>
        </div>
      </div>
      <div className="w-full py-5 px-7 gap-5 mt-10 grid lg:grid-cols-4 grid-cols-1">
        {allDoctors != null && allDoctors.map((doctor,i) => (
          <DoctorCard
            key={i}
            doctor={doctor}
            onBookClick={() => handleBookAppointment(doctor.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default SeeAllDoctor;