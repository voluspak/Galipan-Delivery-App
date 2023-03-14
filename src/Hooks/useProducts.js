import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../Services/getProducts'

export default function useProducts () {
  const [prods, setProds] = useState()
  const { category } = useParams()

  useMemo(() => {
    getProducts()
      .then(resp => setProds(resp))
      .catch(er => console.log(er))
  }, [])
  useEffect(() => {
    async function filterCategories () {
      const products = await getProducts()
      if (category) {
        const filteredProd = products.filter(prod => prod.category === category)
        console.log(filteredProd)
        setProds(filteredProd)
      } else {
        setProds(products)
      }
    }

    filterCategories()
  }, [category])
  return { prods }
}
