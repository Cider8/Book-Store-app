import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvide>
      <Navbar/>
        <main className= 'min-h-screen max-w-screen-2xl mx-auto px-8 py-6 font-primary'>
          <Outlet/>
        </main>  
      <Footer/>
      </AuthProvide>
      
    </>
  )
}

export default App
