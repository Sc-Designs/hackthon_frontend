import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PetientProfile from '../Components/PetientProfile'
import UploadForm from '../Components/UploadForm';

const Profile = () => {
    const user = useSelector(state=>state.User);
    const [picModel, setpicModel] = useState(false);
  return (
    <>
      {picModel && <UploadForm fn={setpicModel} />}
      <PetientProfile
        fn={setpicModel}
        patient={{
          username: user.username,
          email: user.email,
          isActive: user.isActive,
          profilePic: user.profilepic,
          pictype: user.pictype,
        }}
        bookedDoctors={[
          {
            name: "Dr. Smith",
            specialization: "Cardiologist",
            hospital: "City Hospital",
            experience: 10,
            profilePic: "https://res.cloudinary.com/.../doc1.jpg",
          },
          {
            name: "Dr. Jane",
            specialization: "Dermatologist",
            hospital: "Green Clinic",
            experience: 7,
            profilePic: "",
          },
        ]}
      />
    </>
  );
}

export default Profile