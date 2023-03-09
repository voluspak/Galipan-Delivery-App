import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppManagement from './Components/AppManagement/AppManagement'
import DeliveryApp from './Components/DeliveryApp/DeliveryApp'

const App = () => {
  return (
    <BrowserRouter className='w-screen'>
      <Routes>
        <Route path='adminlogin' element={<AppManagement />} />
        <Route path='/' element={<DeliveryApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
