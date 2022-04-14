import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-900 text-white py-4 fixed'>
      <div className='container flex justify-between mx-auto items-center' >
        <div className='logo'>logo</div>
        <div className='flex flex-row gap-4 text-base font-base items-center'>
          <ul className='flex flex-row gap-12 md:px-64'>
            <li className='hover:text-yellow-300 transition ease-in-out duration-500'><a href="">Home</a></li>
            <li className='hover:text-yellow-300 transition ease-in-out duration-500'><a href="">Home</a></li>
            <li className='hover:text-yellow-300 transition ease-in-out duration-500'><a href="">Home</a></li>
          </ul>
          <button className='hover:bg-yellow-900 transition ease-in-out duration-500 border-yellow-700 border-2 px-4 py-1 rounded-full'>login</button>
        </div>
      </div>
    </header>

  )
}

export default Navbar
