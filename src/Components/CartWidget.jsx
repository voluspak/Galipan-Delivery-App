import React, { useContext, useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from '../Context/cartContext'

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((prev, act) => prev + act.cant, 0))
  }, [cart])

  return (
    <button className='relative'>
      <AiOutlineShoppingCart className='h-auto w-12 hover:text-orange-400 text-gray-500' />
      {total > 0 &&
        <div className='absolute top-0 right-0 bg-orange-500 text-white w-6 h-6 rounded-full flex justify-center items-center'>
          <span className='text-white'>{total}</span>
        </div>}
    </button>
  )
}

export default CartWidget
