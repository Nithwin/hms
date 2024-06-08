import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar(){
  return(

     <nav className="text-white px-9 m-3 rounded-xl bg-[#000365] py-7 inset-y-0 left-0 flex flex-col justify-between w-1/5 ">
    <div className="flex justify-center">
    <NavLink className="bg-blue-600 px-7 py-3 rounded-xl font-bold hover:bg-white transition delay-75 ease-in-out hover:text-blue-600 ">Dashboard</NavLink>

    </div>
    <div className="flex flex-col items-start">
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/">Home</NavLink>
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/attend">Attendence</NavLink>
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/leave">Leave</NavLink>
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/mess">Mess</NavLink>
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/suggestion">Suggestion</NavLink>
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/complaint">Complaints</NavLink>
  <NavLink className="text-cyan-500 m-2 px-7 py-2 text-center rounded-lg font-bold border-2 border-transparent hover:border-cyan-400 " to="/ahms/room">Room</NavLink>
</div>

    <div className="flex justify-center ">
    <NavLink className=" bg-blue-600 px-12 py-3 rounded-xl font-bold hover:bg-white transition delay-75 ease-in-out hover:text-blue-600 " to="/">Logout</NavLink>
    </div>
  </nav>

  );
}
