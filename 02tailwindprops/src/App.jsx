import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-300 text-black p-4 rounded-2xl'>Tailwind test</h1>  
      <Card userName="Gamer" btnText = "Click -me" image = "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" />
      <Card userName="Developer" btnText = "View -me" image = "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg" />     
      
    </>
  )
}

export default App
