import React from 'react'

const DoctorCard = ({data}) => {
  return (
    <div className="w-full overflow-hidden flex flex-col inset-shadow-[0px_-5px_20px_5px_rgba(0,0,100,0.2)] gap-y-3 p-2 border-2 border-zinc-300 bg-zinc-100 rounded-lg hover:-translate-y-1.5 hover:scale-105 duration-150">
      <div className="w-full rounded-lg max-h-55 overflow-hidden shadow-sm border-1">
        <img
          className="object-cover w-full h-full object-center"
          src={
            data.profileImage == null
              ? "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
              : `data:${data.pictype};base64,${data.profileImage}`
          }
          alt="Doctor img"
        />
      </div>
      <div className="px-4 flex flex-col gap-y-3">
        <h1 className="text-zinc-700 font-medium">Name: {data.name}</h1>
        <p className="text-zinc-600 font-medium">
          Specialization: {data.specialization}
        </p>
        <p className="text-zinc-500 font-medium">Address: {data.address}</p>
      </div>
      <button className="bg-green-500 duration-150 cursor-pointer hover:bg-green-600 rounded-md text-white uppercase font-medium tracking-wide py-3">
        Book Doctor
      </button>
    </div>
  );
}

export default DoctorCard