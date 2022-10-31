import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 text-xl bg-green-100'>
      <div className='text-blue-5000 flex items-center gap-3'>
        <NavLink className="text-blue-5000 flex items-center gap-3"
          to="/home" style={({ isActive }) => ({
            color: isActive ? "red" : ""
          })}>
          Reciepe
          </NavLink>
      </div>
      <div className='flex gap-5 text-grey-600'>
          <NavLink className={"hover:text-blue-400"} >About</NavLink>
      </div>
    </div>

  )
}

export default Navbar