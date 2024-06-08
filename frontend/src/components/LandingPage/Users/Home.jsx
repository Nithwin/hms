import React from "react";
import banner from "../../images/banner.png"
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-white px-5 m-3 rounded flex flex-col md:flex-row h-4/5 p-3 bg-[#210643]">
      <div className="flex items-center justify-center flex-col w-full md:w-1/2">
        <p className="font-bold uppercase text-4xl">Hostel <span className="text-blue-600">Management</span> System</p>
        <p className="mt-5">One Solution For All Of The Hostel's Needs</p>
        <NavLink to="/login" className="font-bold text-xl mt-10 px-10 py-3 bg-blue-600 rounded hover:bg-blue-800 transition-all ease-linear hover:delay-75">Login</NavLink>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img src={banner} alt="" className="h-fit pb-10 size-96" />
      </div>
    </section>
  );
}
