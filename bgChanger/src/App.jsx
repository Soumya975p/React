import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className='w-full h-screen duration-200 '
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button
            onClick={() => setColor("Red")}
            className='outline-none'
            style={{backgroundColor:"Red"}}
            >Red</button>
            <button
            onClick={() => setColor("Green")}
            className='outline-none'
            style={{backgroundColor:"Green"}}
            >Green</button>
            <button
            onClick={() => setColor("aqua")}
            className='outline-none'
            style={{backgroundColor:"aqua"}}
            >Aqua</button>
          </div>

        </div>
       </div>

    </>
  )
}

export default App
