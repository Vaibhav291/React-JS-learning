import { useState } from 'react'
import './App.css'
import Hello from './Components/Hello'
import Counter from './Components/Counter'
import UserInput from './Components/UserInput'
import UserForm from './Components/UserForm'
import ProductList from './Components/ProductList'
import Timer from './Components/Timer'
import ThemeContext from './Components/ThemedButton'
import FocusInput from './Components/FocusInput'

function App() {
  return (
    <div>
      <Hello name="Vaibhav"/>
      <Counter/>
      <UserInput/>
      <UserForm/>
      <ProductList/>
      <Timer />
      <ThemeContext />
      <FocusInput />
    </div>
  )
}

export default App
