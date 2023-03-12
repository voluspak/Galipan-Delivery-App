import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/products'

export function createNewProduct (productToAdd) {
  axios.post(baseUrl, productToAdd)
    .then(resp => {
      const { data } = resp
      return data
    })
}
