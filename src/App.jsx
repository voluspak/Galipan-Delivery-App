import React from 'react'
import Navbar from './Components/Navbar'
import ListContainer from './Components/ProductsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './Context/CartProvider'
import ModalCart from './Components/ModalCart'
import { useModal } from './Hooks/useModal'

const App = () => {
  const { show } = useModal()
  return (
    <BrowserRouter className='w-screen'>
      <CartProvider>
        <header className=' mb-40'>
          <Navbar />
        </header>
        {
            show &&
              <aside className='fixed bg-opacity-50 backdrop-blur-sm bg-black w-screen h-screen top-0 left-0 z-20 flex items-center justify-center'>
                <ModalCart />
              </aside>
          }
        <main className='grid place-items-center gap-5 mt-5 mb-5'>
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
