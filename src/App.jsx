import React from 'react'
import Navbar from './Components/Navbar'
import ListContainer from './Components/ProductsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './Context/CartProvider'

const App = () => {
  return (
    <BrowserRouter className='w-screen'>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <main className='grid place-items-center gap-5 mt-5'>
          <h1 className='text-2xl font-bold text-orange-600'>Delivery</h1>
          <Routes>
            <Route path='/' element={<ListContainer />} />
            <Route path='category/:category' element={<ListContainer />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
