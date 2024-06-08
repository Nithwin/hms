import React from "react";
import Attend from './Attend'
export default function Attendence(){
  const total = 100;
  const present = 75;
  const absent = 25;
  return(
    <section className="text-white px-9 m-3 rounded-xl bg-[#000365] py-7 flex flex-col w-4/5 justify-center items-center">
      <div className="my-12">
        <p className="font-bold text-5xl text-green-400 text-center">Attendence</p>
        <div className="flex flex-row gap-5 mt-5 font-medium">
          <p>Total Days:{total}</p>
          <p>Present Days:{present}</p>
          <p>Absent Days:{absent}</p>
        </div>
      </div>
    <div className="w-64 h-80 ">
    <Attend/>
</div>
  </section>);
}
