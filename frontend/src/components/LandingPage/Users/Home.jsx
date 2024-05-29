import React from "react";
import banner from "../../images/banner.png"
import { NavLink } from "react-router-dom";
export default function Home(){
  return(<section className=" bg-[#210643] h-screen m-2 rounded overflow-hidden flex pb-10 ps-20 pe-0">
    <div className="text-white flex items-center justify-center flex-col w-1/2 ">
      <p className="font-bold uppercase text-4xl">Hostel <span className="text-blue-600 ">Management</span> System</p>
      <p className="mt-5">One Solution For All Of The Hostel's Needs</p>
      <NavLink to="/login" className="font-bold text-xl mt-10 px-10 py-3 bg-blue-600 rounded hover:bg-blue-800 transition-all ease-linear hover:delay-75" >Login</NavLink>

    </div>
    <div className="flex items-center justify-center flex-row ">
  <img src={banner} alt="" className="h-fit w-1/2 pb-10 " />
    </div>
  </section>);
}
