import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { UserContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function User() {

  const x = useContext(UserContext);
  console.log(x);
  console.log('object is imported')

  const {user , setUser} = x;
  
  console.log(user)
  console.log(setUser)


  return (
    <div className='m-auto w-1/2  mt-10 text-center '>
      <h1 className='text-3xl' >User Lists</h1>
      <div className='bg-red-100'>
        {/* <h1 className=' p-3 mt-5 m-auto w-1/2'>User Name</h1> */}
        {
          user.map((item) => {
           return <div key={item.id} className='flex gap-3 justify-center  items-center mt-4 '>
                <Link key={item.id} to={`/user/${item.id}`} className='text-2xl mb-2'>{item.name}</Link>
            </div>
          })
        }
      </div>
     
    </div>
  )
}

export default User

