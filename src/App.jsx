import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddingForm from './Components/AppManagement/AddingForm'
import AppManagement from './Components/AppManagement/AppManagement'
import DeliveryApp from './Components/DeliveryApp/DeliveryApp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='adminlogin' element={<AppManagement />} />
        <Route path='agregarProducto' element={<AddingForm />} />
        <Route path='/' element={<DeliveryApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
