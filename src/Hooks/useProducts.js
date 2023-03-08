import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import products from '../Mocks/productsData.json'

export default function useProducts () {
  const [prods, setProds] = useState([])
  const { category } = useParams()

  function getProducts () {
    if (category) {
      const filteredProd = products.filter(prod => prod.category === category)
      setProds(filteredProd)
    } else {
      setProds(products)
    }
  }

  useMemo(() => getProducts(), [])
  useEffect(() => getProducts(), [category])
  return { prods }
}
