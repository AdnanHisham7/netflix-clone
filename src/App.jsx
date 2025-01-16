import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { Toaster, toast } from 'sonner';

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log('Logged in')
        navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  }, [])

  return (
    <div>
      <Toaster richColors />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
