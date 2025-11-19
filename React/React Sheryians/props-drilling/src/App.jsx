import React, { useState } from 'react'
import Card from './Components/Card'
import radio from "./assets/radio.png";
import Favourite from './Components/Favourite';
import Color from './Components/Color';
// import radio2 from "./assets/radio2.jpg";



function App() {

   const raw = [
    {song_name : 'Mere Nishaan' , artist_name:'Darshan Raval' , icon:radio , isFav : false} ,
    {song_name : 'Mere Nishaan' , artist_name:'Darshan Raval' , icon:radio , isFav : false} ,
    {song_name : 'Mere Nishaan' , artist_name:'Darshan Raval' , icon:radio , isFav : false} ,
    {song_name : 'Mere Nishaan' , artist_name:'Darshan Raval' , icon:radio , isFav : false} ,
    {song_name : 'Mere Nishaan' , artist_name:'Darshan Raval' , icon:radio , isFav : false} ,
    {song_name : 'Mere Nishaan' , artist_name:'Darshan Raval' , icon:radio , isFav : false} ,
   ]
   
   const[data , setData] = useState(raw);

   const handleFavClick = (cardIndex) => {
      setData((previousData)=>{
         return previousData.map(
          (item , index)=>{
            if(index === cardIndex)
              return {...item , isFav : !item.isFav}
            else
              return item
          }
         )
      })
   }
  
   const inTotalFav =  data.filter((item)=> item.isFav).length
  
  return (
    <div className='relative'>
      <div className='absolute -top-[32%] right-[11%]'>
        <Favourite totalFav = {inTotalFav}/>
      </div>
      <div className='absolute -top-[32%] left-[11%]'>
        <Color/>
      </div>
      <div className=' card-container px-20 mt-50 flex justify-center items-center flex-wrap gap-20'>
       {data.map((item , index) =>
        <Card key={index}  values = {item} cardIndex = {index} handleFavClick = {handleFavClick}/>
       )}
      </div>
    </div>
  )
}

export default App
