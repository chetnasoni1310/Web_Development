import React from 'react'
import "./card.css";

function Card({values ,cardIndex, handleFavClick}) {
    const {song_name , artist_name , icon , isFav} = values;

  return (
    <div className='card'>
      <div className="grp1">
          <div className="icon">
           <img src={icon} alt="" />
          </div>
          <div className="content">
            <h1>{song_name}</h1>
            <h3>{artist_name}</h3>
          </div>
      </div>
      <div className="favButton">
        <button onClick={()=> handleFavClick(cardIndex)} className={`${isFav ? "bg-blue-300" : "bg-orange-300"}`}>
            {isFav ? "Added" : "Add to favourites"}
            </button>
      </div>
    </div>
  )
}

export default Card
