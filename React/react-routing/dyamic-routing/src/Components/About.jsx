import React, { useContext } from 'react'
import { userContext } from '../utils/Context'
import { Link, Outlet } from 'react-router-dom';

function About() {

    const {product} = useContext(userContext);

  return (
    <div>
    <h1>This is about page</h1>
    {
        product.map((item) =>{
          return <Link to={`${item.title}`} key={item.id} className='bg-gray-200 text-center w-1/6 m-auto mb-2 uppercase block hover:font-semibold cursor-pointer'>{item.title}</Link >
        })
    }
    <hr />
    <br />
    <Outlet />
    </div>
  )
}

export default About
