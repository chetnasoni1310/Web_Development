import React from 'react'
import './card.css';

function Card() {
  return (
    <>
    <div className='container'>
       <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/736x/cc/58/ac/cc58ac3fed5b801a175fae9f2990bebf.jpg" alt="Advertisement" />
        </div>
        <div className="heading">
            <h1>Advertisement</h1>
        </div>
        <div className="secondarytext">
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa vel et rerum eos illo porro voluptatem debitis perferendis, earum consectetur.</h3>
        </div>
       </div>
    </div>
    </>
  )
}

export default Card
