import React , {useState} from 'react'

function BasicUsestate() {

     //  useState
  //We have useState so that we dont have to repaint all the things 
  //When any thing gets updated if it is in useState only it will get updated by the react 
  //But if it is noot in usestate it will not be get updated  by react


  //Now the array storing this usestate contains 2 values 
  // 1. The 0th index which is the value store in usestate itself 
  // 2. The 1st index is the function which can be use to change the value of this usestate
  const ARRAY = useState(1234);
  


  const data  = 12;
  // const arr = useState(data);
  
  // const [deconstructValue1 , deconstructValue2] = arr ;
  // console.log(deconstructValue1);
  // console.log(deconstructValue2);


  //Now we should use meaningfull names 
  const arr = useState(data);
  const [score , setScore] = arr;

  // setScore(200)
   
  function userPrompt(){
    const newScore = prompt("Enter the updated score : ");
    setScore(newScore);
  }

  return (
    <div>
       <h1>{score}</h1>
      <button onClick={()=>setScore(200)} className='setScore'>Update score</button>
      <button onClick={()=>userPrompt()} className='setScore'>Update score - 2</button>
    </div>
  )
}

export default BasicUsestate;
