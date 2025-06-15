import { useSelector,useDispatch } from "react-redux";
import { FetchBlog } from "../Store/Reducers/blogsReducer";
import { useEffect } from "react";
const Blog=()=>{
    
        const dispatch=useDispatch()
    const id=useSelector((state)=>state.blog.blogsid)
      const { data, isLoading, error } = useSelector(
    (state) => state.blog.blog
  );
   useEffect(() => {
    dispatch(FetchBlog(id));
  }, [dispatch, id]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: something went wrong try again later</p>;
  const { title, blog, images, video, category, createdAt } =data;
    return<div className="mt-[80px]">
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-8">
      <p className="text-sm text-gray-400 mb-2 capitalize">{category} • {new Date(createdAt).toDateString()}</p>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

      {images?.[0] && (
        <img
          src={images[0]}
          alt={title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}

      <p className="text-gray-700 leading-7 text-base mb-6">{blog}</p>

      {video && (
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            src={video.replace("watch?v=", "embed/")}
            title="Yoga Video"
            className="w-full h-64 rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  
    </div>

}
export default Blog