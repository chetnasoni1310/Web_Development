import { NavLink } from 'react-router-dom'
import Routing from './utils/Routing'


const App = () => {
  return (
    <div>
      <nav className='mt-10 flex justify-center gap-6'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About </NavLink>
        <NavLink to='/user' >User</NavLink>
        {/* <NavLink to='/userDetails' ><UserDetails /></NavLink> */}
      </nav>
      <Routing />
    </div>
  )
}

export default App
