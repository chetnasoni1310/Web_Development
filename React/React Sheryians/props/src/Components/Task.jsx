//Humara data jo hai voh main appp component mai hoga aur hum usko props ke through pass krenge cards mai 
//Har card pe ek add fiend button hoga and add friend button pe click hone pe alert dena hai


import React, { useState } from 'react'
import { TbFriendsOff } from "react-icons/tb";
import { TbFriends } from "react-icons/tb";

function Task({img_src}) {
  const [val , setVal] = useState(false)
  return (
    <div className='bg-zinc-100 w-full h-screen flex justify-center items-center'>
      <div className={`w-90 h-50 bg-zinc-300 rounded overflow-hidden relative `}>
        <img className='w-full h-full object-cover' src={img_src} alt="" />
        <span onClick={()=>{
            setVal(()=> !val);
            alert(!val ? "Added to Friends" : "Removed from Friends")}} className='w-8 h-8 bg-zinc-400 rounded-full absolute top-4 right-4 flex justify-center items-center'>
           { val ? <TbFriends />:<TbFriendsOff />}
        </span>
      </div>
    </div>
  )
}

export default Task
