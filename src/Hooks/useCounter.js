import { useState } from 'react'
import { useCart } from './useCart'

export default function useCounter ({ prod }) {
  const [contador, setContador] = useState(0)
  const { addToCart, removeOneFromCart } = useCart()

  function sumHandle (prod) {
    setContador(contador + 1)
    addToCart(prod)
  }
  function minusHandle (prod) {
    setContador(contador - 1)
    removeOneFromCart(prod)
  }

  return { sumHandle, minusHandle, setContador, contador }
}
