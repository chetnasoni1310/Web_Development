import React from 'react'

function Demo({button_text , color}) {
  return (
    <div>
      <button className={`px-4 py-3 ${color} rounded mt-10 mr-10 text-base`}>{button_text}</button>
    </div>
  )
}

export default Demo
