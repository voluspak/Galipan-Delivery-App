import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className=' w-4/5 flex container justify-around items-center mx-auto shadow-md'>
      <Link to='' className='cursor-pointer'>
        <img src='./assets/Logo.jpg' title='Logo' className='h-auto w-56' />
      </Link>
      <nav className='flex w-2/4 justify-around font-sans font-bold text-gray-500'>
        <Link to='/' className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Todos</Link>
        <Link to='/category/roles' className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Roles</Link>
        <Link to='/category/panaderia' className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Panaderia</Link>
        <Link to='/category/tortasYCupcakes' className='text-2xl hover:text-orange-400 hover:rotate-3 transition-all'>Tortas y cupcakes</Link>
      </nav>
      <CartWidget />
    </div>
  )
}

export default Navbar
