import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from '../utils/Axios'


function Services() {
  
  const [users , setUsers]  = useState([])

  const getAPI = () =>{
    const api = '/users'
    axios
       .get(api)
          .then((users)=> setUsers(users.data))
             .catch( err => console.log(err));
  }
 

  useEffect(()=>{
      getAPI();
  },[])


  return (
    <div>
      <h1 className='text-3xl font-semibold my-10 ml-10'>This is the service ✂️🔨 page</h1>
      {
        users.map( (item) =>{
          return <div key={item.id} className='flex flex-wrap gap-20 p-6 mb-10 bg-yellow-100' >
            <h1 className='text-xl mt-2'>{item.username}</h1>
            <h1 className='text-md mt-2'>{item.email}</h1>
            <h1 className='text-xs mt-2'>{item.phone}</h1>
          </div>
        })
      }
    </div>
  )
}

export default Services
