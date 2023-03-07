import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { useCart } from '../Hooks/useCart'
import { useModal } from '../Hooks/useModal'

const ModalCart = () => {
  const { cart, addToCart, deleteFromCart, removeOneFromCart, clearCart } = useCart()
  const { show, setShow } = useModal()
  return (
    <div className='bg-white w-2/4 min-h-2/4 h-auto rounded'>
      <header>
        <button onClick={() => setShow(!show)}><GrClose /></button>
        <h1>Carrito de compra</h1>
      </header>
      <hr />
      <ul>
        {cart.map(prod => (
          <li key={prod.id}>
            <img src={prod.img} />
            <div>
              <strong>{prod.name}</strong> - COP{prod.price}K
            </div>
            <footer>
              <small> Qty: {prod.cant}</small>
              <button onClick={deleteFromCart}><RiDeleteBin5Line /></button>
              <button onClick={removeOneFromCart}>-</button>
              <button onClick={addToCart}>+</button>
            </footer>
          </li>

        ))}
      </ul>
      <hr />
      <footer>
        <button clearCart={() => clearCart()}>Vaciar</button>
      </footer>
    </div>
  )
}

export default ModalCart
