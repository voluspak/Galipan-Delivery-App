import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const Counter = ({ id, cart, addToCart, removeOneFromCart }) => {
  function findItem (id) {
    const indexOfItemInCart = cart.findIndex(item => item.id === id)
    if (indexOfItemInCart >= 0) {
      return cart[indexOfItemInCart].cant
    }
  }

  const quantityOfItemInCart = findItem(id)

  if (quantityOfItemInCart > 0) {
    return (
      <div className='flex gap-1'>
        <input type='text' readOnly value={quantityOfItemInCart} className='rounded text-center w-8 h-8 self-center' />
        <div className='flex flex-col'>
          <button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={addToCart} /></button>
          <button><AiOutlineMinusCircle className='h-auto w-6 hover:text-gray-700' onClick={removeOneFromCart} /></button>
        </div>
      </div>
    )
  } else {
    return (<button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={addToCart} /></button>)
  }
}

export default Counter
