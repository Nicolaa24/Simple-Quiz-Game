import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Quize } from './pages/Quize'

export const App = () => {

  const [user, setUser] = React.useState('')

  const getUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    setUser(e.target.value)
  }

  React.useEffect(() => {
    if (user === '') setUser('Guest')
  }, [user])

  return (
    <BrowserRouter>
      <div className='flex w-screen h-screen bg-cyan-400'>
        <Routes>
          <Route path='/' element={<Home getUserName={getUserName}/>} />
          <Route path='/game' element={<Quize userName={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
