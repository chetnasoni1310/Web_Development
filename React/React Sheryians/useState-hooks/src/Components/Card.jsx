import React, { useState } from "react";
import { GiBearFace } from "react-icons/gi";

function Card() {

  const[val , setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="w-150 h-90 bg-zinc-500 rounded-md overflow-hidden flex ">
        <img
          className={` shrink-0 w-full h-full transition-transform duration-300 ${val ? '-translate-x-[0%] ': '-translate-x-[100%]'} object-cover `}
          src="https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Flowers looks pretty on you"
        />
        <img
          className={` shrink-0 w-full h-full transition-transform duration-300 ${val ? '-translate-x-[0%] ': '-translate-x-[100%]'} object-cover `}
          src="https://images.unsplash.com/photo-1758968299265-075147f12261?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Flowers looks pretty on you"
        />
        <span onClick={()=>setVal(()=> !val)}   className="h-15 w-15 bg-[#dadada7b] flex justify-center items-center rounded-full absolute top-[30%] left-130 -translate-x-[50%]  -translate-y-[50%]">
          <GiBearFace size={"2em"} />
        </span>
      </div>
    </div>
  );
}

export default Card;
