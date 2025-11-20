import React, { useState } from 'react'
import Card from './Components/Card'
import Form from './Components/Form'


function App() {

   const raw = [
    {image:'https://media.istockphoto.com/id/1468908187/photo/man-relaxing-on-hiking-trip-in-the-mountains.jpg?s=612x612&w=0&k=20&c=umhe6pwL-8uSfuRkLCIGeKOnA_c6MfHtTMivdehw-9o=' , activity:'Hiking' , place:'McLeodganj' , isBooked:false},
    {image:'https://t4.ftcdn.net/jpg/01/62/35/25/360_F_162352509_lG0s6zxxcXFob6wIfwxwkdjVmAdFAfil.jpg' , activity:'Cycling' , place:'Ladakh' , isBooked:false},
    {image:'https://media.istockphoto.com/id/2178489321/photo/beautiful-red-haired-young-woman-with-rollerskates-having-fun-outdoors.jpg?s=612x612&w=0&k=20&c=UDfkxQRSZ_3VsAXYZAsoeIyt6qEyDsrmN3RokNHRjwk=' , activity:'Skating' , place:'Rajasmand' , isBooked:false},
    {image:'https://www.shutterstock.com/image-photo/focused-man-playing-golf-sand-260nw-2540317263.jpg' , activity:'Golf' , place:'Meghalaya' , isBooked:false},
   ]

   const [data , setData] = useState(raw);
   
   const handleBookClick = (cardIndex) =>{
    setData((previousData)=>{
       return previousData.map((item , index)=>{
        if(index===cardIndex)
          return {...item , isBooked: !item.isBooked};
        else
          return item;
       })
    })
   }

   const handleFormSubmit = (newCardData) => {
    setData((prevData) => [...prevData, { ...newCardData, isBooked: false }]);
   };


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="container mx-auto">
        <div className="card-container flex justify-center items-start flex-wrap gap-8 mb-16">
          {data.map((item, index) => (
            <Card
              key={index}
              values={item}
              cardIndex={index}
              onBookClick={handleBookClick}
            />
          ))}
        </div>
        <div className="form-container w-full max-w-4xl mx-auto">
          <Form handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App
