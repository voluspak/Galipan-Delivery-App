import React, { useState } from 'react'
import { CartContext } from './cartContext'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  function addToCart (item, quantity) {
    const prodID = item.id
    const existe = cart.some((prod) => prod.id === prodID)

    if (existe) {
      const carrito = cart.find(prod => prod.id === prodID ? prod.quantity + quantity : prod.quantity)
      setCart([carrito])
    } else {
      const newProd = {
        id: item.id,
        img: item.img,
        name: item.name,
        price: item.price,
        quantity: item.cant
      }
      setCart([...cart, newProd])
    }
  }

  function clearCart () { setCart([]) }

  function removeItem (id, quantity) {
    const prodID = id
    const carrito = cart.find(prod => prod.id === prodID ? prod.quantity - quantity : prod.quantity)
    setCart([carrito])
  }
  return (
    <CartContext.Provider value={{ addToCart, clearCart, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
