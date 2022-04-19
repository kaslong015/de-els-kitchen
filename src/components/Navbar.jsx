import React from 'react'
import logo from '../logo.png';


const Navbar = () => {
  return (
    <header className='bg-tranperant text-white py-4 fixed w-full font-kaslong'>
      <div className="flex w-full container mx-auto  justify-between items-center">
        <img src={logo} className="h-16"></img>
        <div className="flex flex-row gap-8 md:justify-center w-full">
          <a href="#" className="hidden md:block hover:text-[#fd9d3e] transition ease-in-out duration-300" >Home</a>
          <a href="#" className="hidden md:block hover:text-[#fd9d3e] transition ease-in-out duration-300" >Menu</a>
          <a href="#" className="hidden md:block hover:text-[#fd9d3e] transition ease-in-out duration-300" >Reservation</a>
          <a href="#" className="hidden md:block hover:text-[#fd9d3e] transition ease-in-out duration-300" >+234 8148462023</a>
          <a href="#" className="hidden md:block hover:text-[#fd9d3e] transition ease-in-out duration-300" >items</a>
          <a href="#" className="hidden md:block justify-end ml-40 rounded-full px-4 py-2 bg-[#82b440] uppercase hover:bg-[#fd9d3e]">Order online</a>

          {/* small screen */}
          <a href="#" className="text-[#fd9d3e] ml-24 md:hidden hover:text-[#fd9d3e] transition ease-in-out duration-300" ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></a>
          <a href="#" className="text-[#fd9d3e] md:hidden hover:text-[#fd9d3e] transition ease-in-out duration-300" ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></a>

        </div>

        <div class="px-4 cursor-pointer md:hidden" id="burger">
          <svg class="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
    </header>

  )
}

export default Navbar

