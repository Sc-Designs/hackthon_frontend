import React, { useState } from "react";
import logo from "../assets/Arogya[white].png";
import { Link } from 'react-router-dom';
const Footer = () => {
  const [formData, setFormData] = useState({ query: "" });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    
  };

  return (
    <section className="px-8 py-12 bg-[#86CBA0] w-full  rounded-t-[50px] md:rounded-t-[70px]  ">
      <div className="md:flex gap-12 justify-between">
         <div className="w-full md:w-[40rem] flex flex-col gap-10">
        <h1 className="text-6xl font-semibold text-white ">feeling stuck?</h1>
        <div>
          <textarea
            placeholder={`Enter your query or issue.\nWe’ll get back to you shortly.`}
            className="bg-gray-200 w-full px-3 py-4 h-32 outline-0 rounded-t-2xl resize-none"
            onClick={(e)=>{
              setFormData({query:e.target.value})
              
            }}
          />
          <br />
          <button className="bg-gray-900 text-white font-semibold text-sm rounded-b-2xl w-full py-4 -mt-1 cursor-pointer " onClick={
            ()=>{
              handleSubmit()
            }
          }>
            send
          </button>
        </div>
      </div>
      <div>
        <img src={logo} className="h-32 xl:h-40" />
        <p className="text-white  text-sm xl:text-base">
          📍 123 Health Street,Delhi,IN <br /> 📞 +91 98765 43210 <br /> ✉️
          support@talktoarogya.com
        </p>
        <Link to="/doctor-profile">

        <h1 className="bg-green-600 w-fit px-5 py-3 text-white rounded-full">
        Doctor-Dashboard
        </h1>
        </Link>
      </div>
      </div>
     

      <p className="text-white mt-12 font-semibold">
        © 2025 Arogya. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
