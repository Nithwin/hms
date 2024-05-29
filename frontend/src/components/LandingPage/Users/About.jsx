import React from "react";
import profile from "../../images/profile.jpg"
export default function About(){
  return(
  <section className="card-container bg-[#210643] h-screen m-2 rounded overflow-hidden justify-center items-center flex pb-20 ps-20 gap-32">


  <div className="card px-5 py-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded  shadow-black shadow-lg ">
    <div className="bg-black rounded-full p-2 transition duration-500 hover:scale-110 ">
      <img src={profile} alt="" className="h-48 rounded-full" />
    </div>
    <div className="bg-black text-white px-4 py-3 rounded-md mt-5 border-[#f42746] border-2 transition duration-500 hover:scale-110">
      <p className="font-bold text-2xl text-cyan-400 ">Nithwin</p>
      <p className="font-semibold text-teal-600">Frontend Developer</p>
        <p className="text-lime-300 font-medium ms-5">&#8902; React JS</p>
        <p className="text-lime-300 font-medium ms-5">&#8902; Tailwind CSS</p>

    </div>
  </div>

  <div className="card px-5 py-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded  shadow-black shadow-lg ">
    <div className="bg-black rounded-full p-2 transition duration-500 hover:scale-110">
      <img src={profile} alt="" className="h-48 rounded-full" />
    </div>

    <div className="bg-black text-white px-4 py-3 rounded-md mt-5 border-[#f42746] border-2 transition duration-500 hover:scale-110">
      <p className="font-bold text-2xl text-cyan-400 ">Dharun Raj </p>
      <p className="font-semibold text-teal-600">Backend Developer</p>
        <p className="text-lime-300 font-medium ms-5">&#8902; Express JS</p>
        <p className="text-lime-300 font-medium ms-5">&#8902; MySQL</p>

    </div>
  </div>
  <div className="card px-5 py-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded  shadow-black shadow-lg ">
    <div className="bg-black rounded-full p-2 transition duration-500 hover:scale-110">
      <img src={profile} alt="" className="h-48 rounded-full" />
    </div>
    <div className="bg-black text-white px-4 py-3 rounded-md mt-5 border-[#f42746] border-2 transition duration-500 hover:scale-110">
      <p className="font-bold text-2xl text-cyan-400 ">Mahendran</p>
      <p className="font-semibold text-teal-600">Backend Developer</p>
        <p className="text-lime-300 font-medium ms-5">&#8902; Express JS</p>
        <p className="text-lime-300 font-medium ms-5">&#8902; MySQL</p>

    </div>
  </div>


</section>);
}
