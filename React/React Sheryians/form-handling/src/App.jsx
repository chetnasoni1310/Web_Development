import React from 'react'
import Form_usingUseRef from './Components/Form_usingUseRef'
import Form_usingControlledComponents from './Components/Form_usingControlledComponents'
import Form_usingReactHookForm from './Components/Form_usingReactHookForm'

function App() {
  return (
    <div className='p-10'>
      <Form_usingUseRef />
      <br />
      <br />
      <br />
      <br />
      <Form_usingControlledComponents />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Form_usingReactHookForm />
    </div>
  )
}

export default App
