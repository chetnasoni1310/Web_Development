import React , {useState} from 'react'
import { TbFriends, TbFriendsOff } from "react-icons/tb"; 

// function Task2({img_src , name , profession}) {
//   const [val , setVal] = useState(false)
//Pehle hum yahin use kr rhe the but ab hum --> Smart bnn gye hai toh yeh use krenge 

function Task2({values}) {


  const [val , setVal] = useState(false)

  /*****good and important practice***************/
  const {name , profession , image } = values;

   return (
       <div className={`w-80 bg-zinc-200 rounded overflow-hidden relative `}>
         <img className='w-full h-[250px] object-cover' src={image} alt="" />
         <button onClick={()=>{
             setVal(()=> !val);
             }} className={`w-8 h-8 ${val ? "bg-green-600" : "bg-zinc-400"} rounded-full absolute top-4 right-4 flex justify-center items-center`}>
            { val ? <TbFriends />:<TbFriendsOff />}
         </button>
         <div className='py-2 px-4'>
             <h1 className='font-semibold text-xl'>{name}</h1>
             <h3 className='text-xs'>{profession}</h3>
         </div>
       </div>
  )
}

export default Task2
