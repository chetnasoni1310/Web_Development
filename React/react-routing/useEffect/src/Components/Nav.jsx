import React from 'react'
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <div>
       <nav className='flex gap-4 justify-center items-center'>
        <NavLink to='/' className={ (e) => {
           return [
            e.isActive ? 'text-red-400' : '',
            e.isActive ? 'font-semibold' : ''
           ].join(' ')
        }}>Home</NavLink>


        <NavLink to='/show' className={
            (e) => {
                return [
                    e.isActive ? 'text-red-400' : '',
                    e.isActive ? 'font-semibold' : ''
                ].join(' ')
            }
        }>Show</NavLink>


         <NavLink to='/services' className={
            (e) => {
                return [
                    e.isActive ? 'text-red-400' : '',
                    e.isActive ? 'font-semibold' : ''
                ].join(' ')
            }
        }>Services</NavLink>
      </nav>
    </div>
  )
}

export default Nav
