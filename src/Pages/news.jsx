import React from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {FetchallNews} from "../Store/Reducers/newsReducer";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
 


const HealthNewsPage = () => {

    const navigate=useNavigate()
    let translatevalue=useRef(null)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(FetchallNews())
},[])
const {data,error,isLoading}=useSelector((state)=>state.news.allNews)

if (isLoading) return <p>Loading...</p>;
  return (
    <div className="pt-24 pb-10 bg-gray-100 min-h-screen mt-[80px]">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-10">🩺 Latest Health News</h1>
      
      <div className="flex flex-col gap-6 items-center">
        {data.map((news, i) => (
          <div
            key={i}
            className="max-w-3xl w-[90%] sm:w-[80%] mx-auto p-5 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3"
            >
              {/* Header with source */}
              <div className="flex gap-4 items-center">
                {news.source_icon && (
                  <img
                    src={news.source_icon}
                    alt="source icon"
                    width={35}
                    className="rounded-full"
                  />
                )}
                <h2 className="text-base font-semibold text-gray-700 underline underline-offset-2">
                  {news.source_name}
                </h2>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800">
                {news.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 line-clamp-3">
                {news.description}
              </p>

              {/* Publisher */}
              <div className="text-xs text-gray-400 mt-1">{news.publisher}</div>

              {/* Visit Link */}
              <div className="mt-2">
                <span className="text-blue-500 underline text-sm hover:text-blue-700">
                  Visit Source →
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthNewsPage;
