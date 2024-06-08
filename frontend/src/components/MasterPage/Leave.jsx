import React ,{useState} from "react";
import axios from 'axios'
export default function Leave(){
  const total = 5;
  const messoff = 0;
  const request = 1;
  const [leave,setLeave] = useState("");
  const [sreturn,setReturn] = useState("");
  const [reason,setReason] = useState("");
  function AddCom(event){
    event.preventDefault();
    axios.post('http://localhost:8081/leave',{leave,sreturn,reason})
      .then(res => {
        console.log(res);
        if(res.data === "sent") {
          alert("sent")
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
    <div>
    <p className="font-bold text-5xl">Leave off</p>
    </div>
    <div className="flex flex-row gap-5 mt-5 font-medium">
          <p>Total Leave:{total}</p>
          <p>Leave Off:{messoff}</p>
          <p>Requests Sent:{request}</p>
        </div>

      <div className="flex flex-col bg-black rounded mt-10 px-5 py-7">
        <div className="flex gap-5 m-5">
        <div>
          <p className="font-semibold mb-2" >Your leaving Date</p>
          <input className="bg-cyan-600 p-2 rounded-lg font-medium" type="date" onChange={e => setLeave(e.target.value)} />
        </div>
        <div>
          <p  className="font-semibold mb-2">Your return Date</p>
          <input className="bg-cyan-600 p-2 rounded-lg font-medium" type="date" onChange={e => setReturn(e.target.value)}/>
        </div>

        </div>
        <p className="font-semibold ms-5">Reason</p>
        <input className="bg-transparent m-5 py-3 rounded-xl border-2 border-green-400 font-bold" type="text" onChange={e => setReason(e.target.value)} />
        <button className="bg-teal-700 m-5 py-3 rounded-xl font-bold" onClick={AddCom}>Request Mess</button>
      </div>
  </section>);
}
