import React from "react";

export default function Suggestion(){
  return(
    <section className="text-white px-9 m-3 rounded-xl bg-[#000365] py-7 flex flex-col justify-center items-center w-4/5">
    <p className="font-bold text-5xl text-yellow-400 ">Suggestions</p>
    <div className="bg-black p-5 rounded-xl flex flex-col mt-5 w-80 gap-1">
    <p className="font-medium">Suggestion Title</p>
    <input className="rounded-lg bg-transparent border-cyan-400 border-solid border-2  mt-2 p-2 " type="text" />
    <p className="font-medium">Suggestion Content</p>
    <textarea rows="7"  className="rounded-lg bg-transparent border-cyan-400 border-solid border-2  mt-2 p-2 " type="text" />
    <div >
    <button className="bg-green-500 flex w-full my-4 py-3 rounded-xl font-bold justify-center">Submit</button>
    </div>
    </div>
  </section>);
}
