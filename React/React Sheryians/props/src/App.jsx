import React from 'react'
import Demo from './Components/Demo'
import Task from './Components/Task'


function App() {
  return (
    // <div className='flex justify-center'>
    //   <Demo button_text = "Know more"  color="bg-blue-400"  />
    //   <Demo button_text = "Start over"  color="bg-red-400"  />
    // </div>

    <div className='flex justify-center'>
       <Task img_src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"/>

       <Task img_src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"/>

       <Task img_src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"/>
    </div>
  )
}

export default App
