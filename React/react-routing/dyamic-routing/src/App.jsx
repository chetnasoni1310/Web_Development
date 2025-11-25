import React from 'react'
import { Link } from 'react-router-dom';
import Routing from './utils/Routing';

function App() {
  return (
    <div>
      <nav className='flex justify-center items-center gap-4 text-md bg-red-100 py-2 mb-10'>
       <Link to='/' >Home</Link>
       <Link to='/products' >Products</Link>
      </nav>

      <Routing />
    </div>
  )
}

export default App
