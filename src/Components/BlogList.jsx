
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {FetchallBlogs, setBlogsid} from "../Store/Reducers/blogsReducer";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const BlogList=()=>{
    const navigate=useNavigate()
    let translatevalue=useRef(null)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(FetchallBlogs())
},[])
const {data,error,isLoading}=useSelector((state)=>state.blog.allBlogs)
console.log(data)
  if (isLoading) return <p>Loading...</p>;
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
console.log(translatevalue.current)
    return(
        <section className="flex flex-col items-center">
            <h1 className=" text-4xl md:text-5xl font-bold text-gray-900 mb-2">Read Blogs that keep you healthy</h1>
  <button onClick={()=>{navigate("/allblogs")}} className="px-6 py-2 bg-black  text-white text-lg rounded-lg cursor-pointer">Read blogs</button>

            <div className="flex pr-[5%] gap-5 flex-row justify-end items-center  w-full"><button className="cursor-pointer" onClick={()=>{scroll("-")}}><FaAngleLeft size={25}/></button><button className="cursor-pointer" onClick={()=>{scroll("+")}}><FaAngleRight size={25}/></button> </div>
            <div id="new-arraivals" className="overflow-x-auto overflow-hidden w-[90vw]  " ref={translatevalue} style={{scrollBehavior:"smooth" }} >
<div className={` flex flex-row  gap-2 `}>

                {data.map((item,i)=>{
                   return<>{i<6&&<div  onClick={()=>{dispatch(setBlogsid(item._id));navigate("/blog")}} key={i} className="p-6 h-full bg-gray-50">
  <div className="w-72 shrink-0 flex flex-col gap-2 p-4 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
    <img
      className="object-cover w-full h-40 rounded-xl"
      src={item.image}
      alt={item.title}
    />
    <p className="text-lg font-bold text-gray-800">{item.title}</p>
    <p className="text-sm text-gray-600 line-clamp-3">{item.blog}</p>
  </div>
</div>}
</>
                
            })}
            </div>
            </div>
        </section>
    )
}
export default BlogList