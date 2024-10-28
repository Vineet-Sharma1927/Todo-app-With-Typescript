import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-around w-[70%] mx-auto p-4'>
      <Link className='border-black rounded-full hover:bg-gray-200 px-3 py-1' to="/">All</Link>
      <Link className='border-black rounded-full hover:bg-gray-200 px-3 py-1' to="/?todos=active">Active</Link>
      <Link className='border-black rounded-full hover:bg-gray-200 px-3 py-1' to="/?todos=completed">Completed</Link>
    </nav>
  )
}

export default Navbar
