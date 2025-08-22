import { useState } from 'react'
import './App.css'
import Hello from './Components/Hello'
import Counter from './Components/Counter'
import UserInput from './Components/UserInput'
import UserForm from './Components/UserForm'
import ProductList from './Components/ProductList'

function App() {
  return (
    <div>
      <Hello name="Vaibhav"/>
      <Counter/>
      <UserInput/>
      <UserForm/>
      <ProductList/>
    </div>
  )
}

export default App
