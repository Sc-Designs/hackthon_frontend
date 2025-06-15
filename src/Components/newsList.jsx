
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {FetchallNews} from "../Store/Reducers/newsReducer";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
 
const NewsList=()=>{
// const news={
//   "timestamp": "1749996093000",
//   "title": "Genetic variant tied to doubled dementia risk for older men",
//   "snippet": "Researchers looked at a gene that is critical to regulating the body's iron levels.",
//   "images": {
//     "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHhjM0ZQYTFGRlkycE1WRlU0VFJEVkF4aU9CU2dLTWdtTlZJNEhLaVpzYVFJ=-w280-h168-p-df-rw",
//     "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNHhjM0ZQYTFGRlkycE1WRlU0VFJEVkF4aU9CU2dLTWdtTlZJNEhLaVpzYVFJ"
//   },
//   "newsUrl": "https://www.washingtonpost.com/health/2025/06/15/dementia-risk-men-genetic-variant/",
//   "publisher": "The Washington Post"
// }

    const navigate=useNavigate()
    let translatevalue=useRef(null)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(FetchallNews())
},[])
const {data,error,isLoading}=useSelector((state)=>state.news.allNews)

if (isLoading) return <p>Loading...</p>;
console.log(data)
  if (error) return <p>Error: something went wrong try again later</p>;
const scroll=(action)=>{
     if(action==="+"){
        translatevalue.current.scrollBy({
            left:288,
            behavior:"smooth"
        })
    }
    else if(action==="-"){
        translatevalue.current.scrollBy({
            left:-288,
            behavior:"smooth"
        })
    }
}

    return(
        <section className="flex flex-col items-center mt-24">
            <h1 className=" text-4xl md:text-5xl font-bold text-gray-900 mb-2">Stay update with Latest health news</h1>
  <button onClick={()=>{navigate("/news")}} className="px-6 py-2 bg-red-800  text-white text-lg rounded-lg cursor-pointer mt-10">News</button>

            <div className="flex pr-[5%] gap-5 flex-row justify-end items-center  w-full"><button className="cursor-pointer" onClick={()=>{scroll("-")}}><FaAngleLeft size={25}/></button><button className="cursor-pointer" onClick={()=>{scroll("+")}}><FaAngleRight size={25}/></button> </div>
            <div id="new-arraivals" className="overflow-x-auto overflow-hidden w-[90vw]  " ref={translatevalue} style={{scrollBehavior:"smooth" }} >
<div className={` flex flex-row  gap-2 `}>

                {data.map((news,i)=>{
                   return <>{i<6&&
                   <div className="max-w-3xl mt-[89px] min-w-[400px] mx-auto p-4 bg-white  rounded-2xl shadow hover:shadow-lg transition-shadow duration-200">
      <a  target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-col gap-4 items-start">
        {/* Thumbnail */}
     

        {/* Textual Content */}
        <div className="flex flex-col justify-between flex-1">
         <div className="flex gap-5 h-full items-center mb-5">
          <h2 className="text-lg font-semibold text-gray-800 underline underline-offset-2 leading-snug">
            {news.source_name}
          </h2>
          <img src={news.source_icon} width={35} className="rounded-full"></img>
         </div>
          <h2 className="text-lg font-semibold text-gray-700 leading-snug">
            {news.title}
          </h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">
            {news.description}
          </p>
          <span className="text-xs text-gray-400 mt-2">{news.publisher}</span>
        </div>
        <a href={news.link} className="text-blue-400 underline" >Visits</a>
      </a>
    </div>}
</>
                
            })}
            </div>
            </div>
        </section>
    )
}



export default NewsList