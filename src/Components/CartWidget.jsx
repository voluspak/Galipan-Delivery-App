import React, { useState, useEffect, useId } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCart } from '../Hooks/useCart'
import { useModal } from '../Hooks/useModal'

const CartWidget = () => {
  const { cart } = useCart()
  const { setShow, show } = useModal()
  const [total, setTotal] = useState(0)
  const modalCheckbox = useId()

  useEffect(() => {
    setTotal(cart.reduce((prev, act) => prev + act.cant, 0))
  }, [cart])

  return (
    <div>
      <label className='relative cursor-pointer' htmlFor={modalCheckbox}>
        <AiOutlineShoppingCart className='h-auto w-12 hover:text-orange-400 text-gray-500' />
        {total > 0 &&
          <div className='absolute top-0 right-0 bg-orange-500 text-white w-6 h-6 rounded-full flex justify-center items-center'>
            <span className='text-white'>{total}</span>
          </div>}
      </label>
      <input type='checkbox' id={modalCheckbox} hidden onChange={() => setShow(!show)} />
    </div>
  )
}

export default CartWidget
