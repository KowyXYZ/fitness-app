import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container mx-auto flex justify-between items-center py-4 '>
        <div>
            <p className='border-2 p-2'>Power | Gym</p>
        </div>

        <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Exercises</Link>
            <Link to='/' className='hover:underline'>About</Link>
            <Link to='/' className='hover:underline'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
