import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { Link } from 'react-router-dom';


function AboutUsers() {
  
  const x = useContext(UserContext);
  console.log(x)
  
  const {user , setUser} = x;
  const addUser = () =>{
    setUser( prev => [
      ...prev,
      {id:3 , name : 'Chetna' , city : 'LA'}
    ]);
  };

  return (
    <div className='w-1/2 text-center bg-red-100 m-auto mt-4'>
      {
        user.map((item) => (
          <Link key={item.id} className='text-2xl mb-2 block'>{item.name}</Link>
        ))
      }
      <button onClick={addUser} className='bg-blue-400 rounded-full px-6 py-2' >Add Users</button>
    </div>
  )
}

export default AboutUsers
