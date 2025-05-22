import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/cards'
import './App.css'
// import Card from './components/cards'

function App() {

//  let [counter, setcounter] =useState(15)

//  const addvalue = () =>{
//   // console.log("clicked",counter);
//   // counter =counter+1
//   setcounter(counter+1)
//  }

//   const removeValue = () =>{
//   console.log("clicked",counter);
//   // counter =counter+1
//   setcounter(counter-1)
//  }

  return (
    <> 
     <h1 className='bg-green-400 text-zinc-800 p-4 m-2.5 border-2 border-amber-300'>Tailwind Learning</h1>
     <card />
    </>
  )
}

export default App
