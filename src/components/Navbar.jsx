import React from 'react'
import logo from '../logo.png';


const Navbar = () => {
  return (
    // nav bar
    <nav className="relative container mx-auto p-6 ">
      {/* flex container */}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} className="h-11" alt="logo" />
        </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#" className=" hover:text-[#fd9d3e] transition ease-in-out duration-300" >Home</a>
          <a href="#" className=" hover:text-[#fd9d3e] transition ease-in-out duration-300" >Menu</a>
          <a href="#" className=" hover:text-[#fd9d3e] transition ease-in-out duration-300" >Reservation</a>
          <a href="#" className=" flex hover:text-[#fd9d3e] transition ease-in-out duration-300" ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>+234 8148462023</a>
          <a href="#" className="flex  hover:text-[#fd9d3e] transition ease-in-out duration-300" ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> Items</a>
        </div>
        {/* button */}
        <a href="#" className="hidden md:block  p-3 pt-2 text-white rounded-full px-4 py-2 bg-[#82b440] uppercase hover:bg-[#fd9d3e]">order online</a>
      </div>
    </nav>

  )
}

export default Navbar

