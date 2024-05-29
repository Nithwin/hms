import React from "react";

export default function Leave(){
  const total = 5;
  const messoff = 0;
  const request = 1;
  return(
    <section className="text-white px-9 m-3 rounded-xl bg-[#000365] py-7 flex flex-col justify-center items-center w-4/5">
    <div>
    <p className="font-bold text-5xl">Mess off</p>
    </div>
    <div className="flex flex-row gap-5 mt-5 font-medium">
          <p>Total Mess:{total}</p>
          <p>Mess Off:{messoff}</p>
          <p>Requests Sent:{request}</p>
        </div>

      <div className="flex flex-col bg-black rounded mt-10 px-5 py-7">
        <div className="flex gap-5 m-5">
        <div>
          <p className="font-semibold mb-2" >Your leaving Date</p>
          <input className="bg-cyan-600 p-2 rounded-lg font-medium" type="date" />
        </div>
        <div>
          <p  className="font-semibold mb-2">Your return Date</p>
          <input className="bg-cyan-600 p-2 rounded-lg font-medium" type="date" />
        </div>

        </div>
        <button className="bg-teal-700 m-5 py-3 rounded-xl font-bold">Request Mess</button>
      </div>
  </section>);
}
