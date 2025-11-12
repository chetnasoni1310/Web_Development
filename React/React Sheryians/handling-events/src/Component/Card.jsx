import React from 'react'
import "./card.css" ;

function Card() {

    const data = [
        {image : 'https://plus.unsplash.com/premium_photo-1689620817526-4963bfc2bc87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764' ,
         title : 'Pal Pal',
         description : 'Pritam and Arijit'
        },
         {image : 'https://plus.unsplash.com/premium_photo-1682125519317-43a8d20dde37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688' ,
         title : 'Mere Nishaan',
         description : 'Darshan Raval'
        },
    ]

    function handleDownloadClick(){
        alert("Are you trying to steal my song from my page !! 👁️👁️")
    }

  return (
   <>
   <div className="container">
    {data.map((elem , index) => (
           <div  key={index} className="card">
            <div className="image">
               <img src={elem.image} alt="" />
            </div>
            <div className="title">
               <h1>{index + 1}. {elem.title}</h1>
            </div>
            <div className="description">
               <p>{elem.description}</p>
            </div>
            <button onClick={handleDownloadClick}>Download</button>
               </div>
    ))}
    </div>
   </>
  )
}

export default Card
