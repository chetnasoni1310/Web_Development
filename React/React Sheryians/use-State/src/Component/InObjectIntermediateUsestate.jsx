import React, { useState } from 'react'

function InObjectIntermediateUsestate() {

const [objValue , setValues] = useState({
                               name:"I",
                               isFree:true
                           })

  return (
    <div>
      <h6 style={{fontSize:"26px" , margin:"30px 0"}}>{objValue.name} am {objValue.isFree ? " Freeeeee" : " Arrested"}</h6>
      <button onClick={()=>setValues( 
        (prev)=>({
            ...prev,
            isFree: !prev.isFree
        })
      )}>{!objValue.isFree ? "Set me Free" : "Arrest me"}</button>
    </div>
  )
}

export default InObjectIntermediateUsestate
