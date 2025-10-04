import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className=' flex justify-between nav items-center text-white mt-4 mx-6'>
        <h3 className='text-l cursor-pointer bg-stone-700 hover:bg-slate-600 hover:duration-300 px-4 py-1.5 rounded-md'>Hi there!</h3>
        <button
        title='Leave a Star for Our repository!'
        onClick={() => window.open("https://github.com", "_blank")}
        className='cursor-pointer bg-red-600 hover:bg-red-800 hover:duration-300 rounded-md hover:solid px-4 py-1.5'>Star ⭐</button>
        
      </div>
    </div>
  )
}

export default Navbar
