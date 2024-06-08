import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/book.png'
export default function NavBar (){
  return(
    <nav className='flex justify-between font-bold text-white bg-[#020f39] px-10 py-4 items-center m-2 rounded-lg h-1/5'>
    <div className="flex items-center" >
      <img src={logo} alt="book" className="me-2" />
      <NavLink to="/" className="py-5 text-3xl">HMS</NavLink>
    </div>
    <div className="flex space-x-5 items-center text-xl ">
      <NavLink to="/contact" className="px-5 py-3 rounded hover:bg-slate-50 hover:text-gray-950 transition-all ease-linear hover:delay-75" >Contact</NavLink>
      <NavLink to="/about" className="px-5 py-3 rounded hover:bg-slate-50 hover:text-gray-950 transition-all ease-linear hover:delay-75">About</NavLink>
      <NavLink to="/admin" className="px-5 py-3 rounded hover:bg-slate-50 hover:text-gray-950 transition-all ease-linear hover:delay-75" >Adim</NavLink>
      <NavLink to="/login" className="px-5 py-3 bg-blue-600 rounded hover:bg-blue-800 transition-all ease-linear hover:delay-75" >Login</NavLink>
    </div>
  </nav>);
}
