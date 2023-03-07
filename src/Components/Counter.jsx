import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useCart } from '../Hooks/useCart'

const Counter = ({ prod }) => {
  const [contador, setContador] = useState(0)
  const { addToCart, removeOneFromCart } = useCart()

  function sumHandle () {
    setContador(contador + 1)
    addToCart(prod)
  }
  function minusHandle () {
    setContador(contador - 1)
    removeOneFromCart(prod)
  }

  if (contador === 0) {
    return (<button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => sumHandle()} /></button>)
  } else {
    return (
      <div className='flex gap-1'>
        <input type='text' readOnly value={contador} className='rounded text-center w-8 h-8 self-center' />
        <div className='flex flex-col'>
          <button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => sumHandle()} /></button>
          <button><AiOutlineMinusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => minusHandle()} /></button>
        </div>
      </div>
    )
  }
}

export default Counter
