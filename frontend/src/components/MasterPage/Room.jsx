import React from 'react'

export default function Rect(){
  return( <section className="text-white px-9 m-3 rounded-xl bg-[#000365] py-7 flex flex-col justify-center items-center w-4/5">
    <p className='font-bold text-4xl text-yellow-400 mb-10'>Available Rooms</p>
    <div className='bg-black px-4 py-3 rounded-xl flex-col'>
      <div className='flex items-center'><span className='m-3 p-3 bg-green-400 w-1 h-1 rounded font-bold flex justify-center items-center '></span> <p className='font-medium'>Filled</p>
        </div>
      <div className='flex items-center'><span className='m-3 p-3 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center '></span> <p className='font-medium'>Available</p>
        </div>
      <div className='flex items-center'><span className='m-3 p-3 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center '></span> <p className='font-medium'>Not Filled</p>
        </div>
    </div>

  <div className='flex m-5 gap-5  '>
  <div className='bg-black px-4 py-4 rounded-2xl'>
    <p className='font-bold m-2 text-cyan-400'>Floor 1</p>
    <div className='bg-slate-600 grid grid-cols-3 gap-3 p-3 rounded-xl'>
      <span className="p-5 bg-green-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">101</span>
      <span className="p-5 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">102</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">103</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">104</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">105</span>
      <span className="p-5 bg-green-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">106</span>
      <span className="p-5 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">107</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">108</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">109</span>
    </div>
  </div>

  <div className='bg-black px-4 py-4 rounded-2xl'>
    <p className='font-bold m-2 text-cyan-400'>Floor 2</p>
    <div className='bg-slate-600 grid grid-cols-3 gap-3 p-3 rounded-xl'>
      <span className="p-5 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">201</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">202</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">203</span>
      <span className="p-5 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">204</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">205</span>
      <span className="p-5 bg-green-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">206</span>
      <span className="p-5 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">207</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">208</span>
      <span className="p-5 bg-yellow-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">209</span>
    </div>
  </div>
  <div className='bg-black px-4 py-4 rounded-2xl'>
    <p className='font-bold m-2 text-cyan-400'>Floor 3</p>
    <div className='bg-slate-600 grid grid-cols-3 gap-3 p-3 rounded-xl'>
      <span className="p-5 bg-green-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">301</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">302</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">303</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">304</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">305</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">306</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">307</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">308</span>
      <span className="p-5 bg-red-400 w-1 h-1 rounded font-bold flex justify-center items-center hover:opacity-70">309</span>
    </div>
  </div>
  </div>
</section>)
}
