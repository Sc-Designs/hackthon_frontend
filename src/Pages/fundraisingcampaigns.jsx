import { useEffect } from "react";
import {  setFundraiseid,Fetchallfundraisecampaign} from"../Store/Reducers/fundraiseReducer"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Fundraisingcampaigns = () => {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Fetchallfundraisecampaign())
    },[])
    
       const { data, isLoading, error } = useSelector(
     (state) => state.fundraise.allFundraiseingcampaign
   );
console.log(data[0])
   const campaigns=data
   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Error: something went wrong try again later</p>;


const handleonclick=(id)=>{
  console.log(id)
dispatch(setFundraiseid(id))
navigate("/fundraisingprofile")
}
  return (
    <div className="flex flex-wrap gap-6 mt-[70px] justify-center p-6">
      {campaigns.map((item) => {
        return(
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 space-y-4 w-full max-w-md">
      <img
        src={item.media.photos}
        alt="Campaign"
        className="rounded-lg w-full h-48 object-cover"
      />
      <div className="space-y-1 relative ">

        <h2 className="text-lg font-semibold text-gray-800">{item.campaignTitle}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm text-gray-500">Submitted by: {item.submittedBy}</p>
        <p className="text-xs text-gray-400">Created: {new Date(item.createdAt).toLocaleString()}</p>
    
      <button onClick={()=>{handleonclick(item._id)}} className="absolute cursor-pointer bottom-0 bg-green-600 text-white font-bold px-6 py-3 rounded-lg right-0 outline-0">Donate</button>
      </div>
    </div>
      )})}
    </div>
  );
};

export default Fundraisingcampaigns 