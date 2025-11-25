import React from 'react'
import { Link } from 'react-router-dom';
import Routing from './utils/Routing';

function App() {
  return (
    <div>
      <nav className='flex justify-center items-center gap-6 text-md bg-red-100 py-2 mb-10'>
       <Link to='/' className='hover:font-semibold' >Home</Link>
       <Link to='/products' className='hover:font-semibold' >Products</Link>
       <Link to='/about' className='hover:font-semibold' >About</Link>
      </nav>

      <Routing />
    </div>
  )
}

export default App
