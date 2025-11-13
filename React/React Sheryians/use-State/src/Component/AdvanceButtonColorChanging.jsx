import React, { useState } from 'react'

function AdvanceButtonColorChanging() {
 
 const [objValue , setValues] = useState({
                                name:"I",
                                isFree:true
                            })
 
   return (
     <div>
       <h6 style={{fontSize:"26px" , margin:"30px 0"}}>{objValue.name} am {objValue.isFree ? " Freeeeee due to cool blue button , please don't press the red button to arrest me " : " Arrested due to that bully red button presser , please set me free by this blue button"}</h6>
       <button onClick={()=>setValues( 
         (prev)=>({
             ...prev,
             isFree: !prev.isFree
         })
       )}  className={`advanceButton ${objValue.isFree ? 'isFree' : 'isArrested'}`}>{!objValue.isFree ? "Set me Free" : "Arrest me"}</button>
     </div>
   )
}

export default AdvanceButtonColorChanging
