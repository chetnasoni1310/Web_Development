import React from 'react'
import { TbFriends, TbFriendsOff } from "react-icons/tb"; 

function Task2_method2({values , onClickFriendsHandling ,cardIndex }) {

  /*****good and important practice***************/
  const {name , profession , image , friends} = values;


   return (
       <div className={`w-80 bg-zinc-200 rounded overflow-hidden relative `}>
         <img className='w-full h-[250px] object-cover' src={image} alt="" />
         <button onClick={()=> onClickFriendsHandling(cardIndex)} className={`w-8 h-8  rounded-full ${friends ? "bg-green-600" : "bg-zinc-400"} absolute top-4 right-4 flex justify-center items-center`}>
          { friends ? <TbFriends />:<TbFriendsOff />}
         </button>
         <div className='py-2 px-4'>
             <h1 className='font-semibold text-xl'>{name}</h1>
             <h3 className='text-xs'>{profession}</h3>
         </div>
       </div>
  )
}

export default Task2_method2
