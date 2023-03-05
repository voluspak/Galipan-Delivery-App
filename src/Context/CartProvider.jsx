import React, { useState } from 'react'
import { CartContext } from './cartContext'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  function addToCart (item) {
    const prodID = item.id
    const existe = cart.some((prod) => prod.id === prodID)

    if (existe) {
      const carrito = cart.find(prod => prod.id === prodID ? prod.quantity++ : prod.quantity)
      setCart([carrito])
      console.log('Ya existe: ' + cart)
    } else {
      const newProd = {
        id: item.id,
        img: item.img,
        name: item.name,
        price: item.price,
        quantity: item.cant
      }
      setCart([...cart, newProd])
      console.log('Algo que no estaba antes: ' + cart)
    }
  }

  function clearCart () { setCart([]) }

  function removeItem (prod) {
    console.log('Antes de remover: ' + cart)
    const prodID = prod.id
    const carrito = cart.map(item => {
      if (item.id === prodID) {
        item.quantity--
        console.log('producto ' + item.id)
        console.log('cantidad: ' + item.quantity)
      } else {
        return item.quantity
      }
    })
    setCart([...carrito])
    console.log('Despues de remover: ' + cart)
  }
  return (
    <CartContext.Provider value={{ addToCart, clearCart, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
