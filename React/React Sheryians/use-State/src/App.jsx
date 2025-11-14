import React from 'react'
// import "index.css" ;
import BasicUsestate from './Component/Basic-usestate'
import ToggleuseState from './Component/toggleuseState'
import ValueIncrementor from './Component/ValueIncrementor'
import ObjectUsestate from './Component/InObjectIntermediateUsestate'
import AdvanceButtonColorChanging from './Component/AdvanceButtonColorChanging'
import AdvanceObjectPropertyAdder from './Component/AdvanceObjectPropertyAdder'
import AdvanceArrayValueAdder from './Component/AdvanceArrayValueAdder'

function App() {
  return (
    <div>
     <BasicUsestate/>
     <ToggleuseState/>
     <ValueIncrementor/>
     <ObjectUsestate/>
     <AdvanceButtonColorChanging/>
     <AdvanceObjectPropertyAdder/>
     <AdvanceArrayValueAdder/>
    </div>
  )
}

export default App
