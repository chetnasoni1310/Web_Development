import React, { useState } from "react";
import Demo from "./Components/Demo";
import Task from "./Components/Task";
import Task2 from "./Components/Task2";
import Task2_method2 from "./Components/Task2_method2";
import { TbFriends } from 'react-icons/tb';

function App() {
  // Demo and Task 1 implementation
  //return (
  // <div className='flex justify-center'>
  //   <Demo button_text = "Know more"  color="bg-blue-400"  />
  //   <Demo button_text = "Start over"  color="bg-red-400"  />
  // </div>

  // <div className='flex justify-center'>
  //    <Task img_src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"/>

  //    <Task img_src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"/>

  //    <Task img_src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"/>
  // </div>
  //   )

  const data = [
    {
      name: "Saksham",
      profession: "Teacher",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
      friends: false,
    },

    {
      name: "Harsh",
      profession: "Artist",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      friends: false,
    },

    {
      name: "Himanshu",
      profession: "Content Creator",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
   
  const handleFriends = (cardIndex) =>{
    setRealData(
      (previousState) =>{
         return previousState.map((item , index)=>{
           if(index === cardIndex)
            return {...item , friends: !item.friends}
          else
            return item
         })
      }
    )
  }

  return (
    <>
      <div className="bg-zinc-100 w-full h-screen flex justify-center items-center gap-10">

        {/* /*******Big mistake i was mapping data instead of realData  */}
        {realData.map((item, index) => (
          // ************ Task ********************
          //This is way too long instead we can simply provide values krke kuch kuch and then jo values krke aaya hai usko hum
          //Task2 mai jaake deconstruct kr skte hai i usmai jo bhi aa rha hai voh kin kin tukdo mai batt jaaye
          //Like this
          //This is the commented code ------->>>
          //<Task2 img_src={item.image} name={item.name} profession={item.Profession}/>

          // ************ Task2 ********************
          //This one also lacks full control to props because I am doing conditional rendering at task2Side
          // i.e. not fully control over the app.jsx side
          // so here is this new jsx task2_method2 jismai hum fully controlled jsx bnaa rhe honge
          //This is the commented code ------->>>
          // <Task2 key={index} values={item} />

          // ************ Task2_method2 ********************
          //First add a friends property in the data array object
          //Fir hum app.jsx mai hi state bnaayenge data ke niche
          //Then what we want that is ki hum app.jsx mai ek state bnaate hai data change krne ke liye , fir ab jaha state bnaate hai vhi change kr skte hai
          // toh fir hum yahin uska data change krne ke liye ek function bnaayenge aur uss function ko props ke through pass kr denge task2method2 mai ,
          // aur fir usko access krlenge onclick function mai
          //This is the code ------->>>

          <Task2_method2
            key={index}
            values={item}
            cardIndex = {index}
            onClickFriendsHandling={handleFriends}
          />
        ))}
      </div>
      <h1>Total Friends: {realData.filter((item) => item.friends).length}</h1>
    </>
  );
}

export default App;
