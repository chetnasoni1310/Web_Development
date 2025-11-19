import React from 'react'

function Favourite({totalFav}) {
  return (
    <div onClick={()=>{}} className='totalFav cursor-pointer'>
      <button className='cursor-pointer'>
        Favourites {totalFav}
      </button>
    </div>
  )
}

export default Favourite
