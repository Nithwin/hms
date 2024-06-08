import React, { useState,useEffect } from "react";
import Attend from './Attend'
export default function Home(){
  let [date,setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return(
    <section className="text-white px-5 m-3 rounded-xl bg-[#000365] py-7 flex flex-col w-4/5">
    <div className="flex justify-between bg-black px-5 py-5 rounded-xl font-bold ">
      <p>{date.toDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
    <div className="mx-3 mt-10">
      <p className="font-bold text-5xl">Welcome <span className="text-purple-500">Admin</span> !</p>
    </div >
    <div className="flex p-10 justify-between px-32">

    <div className="bg-black h-80 w-80 rounded-xl shadow-xl">
      <p className="font-bold px-10 pt-10 text-3xl mb-2">Hostel Fee</p>
      <p className="mx-10 ms-14 font-bold text-xl">&#x20B9; 50,000</p>
    </div>
    <div className="w-64 h-80 "> {/* Change the size here */}
    <Attend/>
</div>

    </div>
  </section>);
}
