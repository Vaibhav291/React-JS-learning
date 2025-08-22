import { useState } from 'react'
import './App.css'
import Hello from './Components/Hello'
import Counter from './Components/Counter'

function App() {
  return (
    <div>
      <Hello name="Vaibhav"/>
      <Counter/>
    </div>
  )
}

export default App
