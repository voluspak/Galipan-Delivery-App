import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ProductsList from './Components/ProductsList'

const App = () => {
  return (
    <div className='w-screen'>
      <header className=' w-4/5 flex container justify-between items-center outline mx-auto'>
        <a className='outline'>
          <img src='./assets/Logo.jpg' className='h-auto w-56' />
        </a>
        <nav className='flex w-2/4 justify-around outline font-sans font-bold text-gray-500'>
          <span className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Roles</span>
          <span className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Panaderia</span>
          <span className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Tortas y cupcakes</span>
        </nav>
        <button className='outline'><AiOutlineShoppingCart className='h-auto w-12' /></button>
      </header>
      <main className='grid place-items-center gap-5 mt-5'>
        <h1 className='text-2xl font-bold text-orange-600'>Delivery</h1>
        <ProductsList />
      </main>
    </div>
  )
}

export default App
