import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setcounter] =useState(15)

 const addvalue = () =>{
  // console.log("clicked",counter);
  // counter =counter+1
  setcounter(counter+1)
 }

  const removeValue = () =>{
  console.log("clicked",counter);
  // counter =counter+1
  setcounter(counter-1)
 }

  return (
    <> 
     <h1>Tailwind Learning</h1>
    </>
  )
}

export default App
