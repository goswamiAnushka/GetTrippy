import { useState } from 'react'
import './App.css'
import Hero from './components/custom/Hero'
import Header from './components/custom/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <Header/>
     <div className="bg-indigo-600 w-full h-screen"></div>
    </>
  )
}

export default App
