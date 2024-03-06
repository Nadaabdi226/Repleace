import React from 'react'

function Header() {
  return  (
    <div>
    <div className="bg-yellow-300   w-[1480px] h-[600px] flex pl-8   ">
      <div>
        <h1 className='text-3xl font-bold mt-5 ml-3'> Code Xlaka</h1>
        <h1 className="text-7xl text-center font-bold mt-36 ml-2">You Dream And We Build </h1>
          <p className='ml-3 mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, rem.</p>
          <button className='bg-white px-12 py-4 mt-5 ml-3 rounded-sm '>Explore More</button>
          </div>
          <ul className="flex  gap-8 text-3xl mt-5">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
           
        </ul>
    </div>

    
    </div>
);


}



export default Header