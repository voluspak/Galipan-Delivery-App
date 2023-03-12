import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/products'

export function createNewProduct (productToAdd, token) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }
  axios.post(baseUrl, productToAdd, config)
    .then(resp => {
      const { data } = resp
      console.log(data)
      return data
    }).catch(e => console.log(e))
}
