import React from 'react'
import { AiOutlineShoppingCart, AiOutlinePlusCircle } from 'react-icons/ai'
import products from '../Mocks/productsData.json'
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
        <section className=' w-4/5 grid grid-cols-autoFit gap-5'>
          {
            products.map(prod => (
              <div key={prod.id} className='rounded w-64 h-96 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform'>
                <figure>
                  <img src={prod.img} className='h-60 w-64 object-cover rounded' />
                </figure>
                <figcaption className='flex flex-col justify-around items-center'>
                  <h3 className=' text-orange-500 text-xl'>{prod.name}</h3>
                  <span className='italic'>COP{prod.price}k
                    <span> {prod.unid}</span>
                  </span>
                  <span className='font-bold'>+ Delivery</span>
                  <button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' /></button>
                </figcaption>
              </div>
            ))
          }
        </section>
      </main>
    </div>
  )
}

export default App
