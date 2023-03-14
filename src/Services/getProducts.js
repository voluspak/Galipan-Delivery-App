import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/products'

export async function getProducts () {
  try {
    const response = await axios.get(baseUrl)
    const { data } = response

    return data
  } catch (error) {
    console.error('Problemas al hacer la peticion')
    throw new Error('Request failed')
  }
}
