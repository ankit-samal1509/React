import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  function changeColor() {
    setColor()
  }

  return (
    <>     
     <div className = "w-full h-screen duration-150 " style ={ {backgroundColor : color }}>
      
      <div className = " fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2" >
        <div className = "flex flex-wrap items-center rounded -xl gap-3 bg-amber-100 p-2">
          <button onClick ={() => setColor("red")} className="outline-0 px-3 py-1 rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "red", color : "white"}} >Red</button> 
          <button onClick ={() => setColor("green")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "green", color : "white"}} >Green</button>
          <button onClick ={() => setColor("blue")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "blue", color : "white"}} >Blue</button> 
          <button onClick ={() => setColor("lavender")}className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "lavender"}} >Lavender</button>
          <button onClick ={() => setColor("olive")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "olive"}} >Olive</button>
          <button onClick ={() => setColor("purple")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "purple", color : "white"}} >Purple</button>
          <button onClick ={() => setColor("pink")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "pink"}} >Pink</button>
          <button onClick ={() => setColor("gray")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "gray"}} >Gray</button>
          <button onClick ={() => setColor("yellow")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "yellow"}} >Yellow</button>
          <button onClick ={() => setColor("white")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl" style = {{ backgroundColor : "white"}} >White</button>
          <button onClick ={() => setColor("black")} className="outline-0 px-3 py-1  rounded-2xl  cursor-pointer text- xl col" style = {{ backgroundColor : "black", color : "white"}} >Black</button>

        </div>
        
      </div>
     </div>


    </>
  )
}

export default App
