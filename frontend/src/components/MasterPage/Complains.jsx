import React, { useState } from "react";
import axios from "axios";
export default function Suggestion(){
  const [title,setTitle] = useState("");
  const [complain,setComplain] = useState("");
  function AddCom(event){
    event.preventDefault();
    axios.post('http://localhost:8081/complain',{title,complain})
      .then(res => {
        console.log(res);
        if(res.data === "sent") {

        } else {
            alert("Did't submit")
        }
      })
      .catch(err => {
        console.log(err);
        alert('Failed');
      });
  }
  return(
    <section className="text-white px-9 m-3 rounded-xl bg-[#000365] py-7 flex flex-col justify-center items-center w-4/5">
    <p className="font-bold text-5xl text-yellow-400 ">Complaints</p>
    <div className="bg-black p-5 rounded-xl flex flex-col mt-5 w-80 gap-1">
    <p className="font-medium">Complaints Title</p>
    <input className="rounded-lg bg-transparent border-cyan-400 border-solid border-2  mt-2 p-2 " type="text" onChange={e => setTitle(e.target.value)} />
    <p className="font-medium">Complaints Content</p>
    <textarea rows="7"  className="rounded-lg bg-transparent border-cyan-400 border-solid border-2  mt-2 p-2 " type="text" onChange={e => setComplain(e.target.value)} />
    <div >
    <button className="bg-green-500 flex w-full my-4 py-3 rounded-xl font-bold justify-center" onClick={AddCom}>Submit</button>
    </div>
    </div>
  </section>);
}
