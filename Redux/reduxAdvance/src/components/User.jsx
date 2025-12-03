import React from 'react'
import { useSelector } from 'react-redux'
import Product from './product'

function User() {

   const {users} = useSelector((state) => state.userReducer)
//    const {users} = userReducer;
  
  return (
    <div>
        <ul className='list-disc pl-5 text-white '>
            {
                users.map((item) => {
                    return <h1 key={item.id} className='text-md leading-[0.7] font-thin my-2 px-2'>{item.title}</h1>
                })
            }
        </ul>
      <Product />
    </div>
  )
}

export default User
