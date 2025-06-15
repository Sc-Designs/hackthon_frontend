
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {FetchallBlogs, setBlogsid} from "../Store/Reducers/blogsReducer";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
    const AllBlogs=()=>{
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

return<>
<div className="mt-[80px] grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 p-4">
  {data.map((item, i) => (

      <div
        key={i}
        onClick={() => {
          dispatch(setBlogsid(item._id));
          navigate("/blog");
        }}
        className="cursor-pointer transition-transform hover:scale-[1.02]"
      >
        <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
          <img
            className="object-cover w-full h-40 rounded-xl"
            src={item.image}
            alt={item.title}
          />
          <p className="text-base font-semibold text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-600 line-clamp-3">{item.blog}</p>
        </div>
      </div>
    
  ))}
</div>
</>

}
export default AllBlogs