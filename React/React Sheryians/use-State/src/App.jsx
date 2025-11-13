import React from 'react'
// import "index.css" ;
import BasicUsestate from './Component/Basic-usestate'
import ToggleuseState from './Component/toggleuseState'
import ValueIncrementor from './Component/ValueIncrementor'
import ObjectUsestate from './Component/InObjectIntermediateUsestate'

function App() {
  return (
    <div>
     <BasicUsestate/>
     <ToggleuseState/>
     <ValueIncrementor/>
     <ObjectUsestate/>
    </div>
  )
}

export default App
