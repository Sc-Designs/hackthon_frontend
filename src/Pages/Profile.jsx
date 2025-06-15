import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../Components/Navigation'
import { Pencil } from 'lucide-react'

const Profile = () => {
    const user = useSelector(state=>state.User)
  return (
    <div className="w-full min-h-screen pt-26 text-black">
      <Navigation />
      <div className="px-4 lg:px-10">
        <div className="card px-4 py-3 rounded-lg border-2 w-full lg:w-fit flex gap-x-4 items-center">
          <div className="lg:w-20 lg:h-20 w-25 h-25 rounded-full relative">
            <img
              className="lg:w-20 lg:h-20 w-25 h-25 rounded-full object-cover"
              src={
                user.profilepic != null
                  ? `data:${user.pictype};base64,${user.profilepic}`
                  : "https://plus.unsplash.com/premium_photo-1749544311043-3a6a0c8d54af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Profile Pic"
            />
            <div className="bg-yellow-500 rounded-full px-2 py-2 absolute -bottom-2 right-0">
              <Pencil className="text-zinc-900 h-4 w-4" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-zinc-500 text-2xl">
              {user.username}
            </h1>
            <p className="font-medium text-zinc-500 text-xl">{user.email}</p>
            <div className="flex items-center gap-x-3">
              {user.isActive ? (
                <h1 className="text-xl">Active</h1>
              ) : (
                <h1 className="text-xl">Not Active</h1>
              )}
              {user.isActive ? (
                <div className="w-3 h-3 rounded-full bg-green-400/70 shadow-[0px_0px_15px_3px_rgba(0,255,0,0.9)]"></div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0px_0px_15px_3px_rgba(255,0,0,0.9)]"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile