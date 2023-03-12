import login from '../Services/login'
import { useState } from 'react'

function useUser ({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleLogin (event) {
    event.preventDefault()

    try {
      const user = await login({ username, password })
      console.log(user)
      setUser(user)
      setPassword('')
      setUsername('')
    } catch (error) {
      setErrorMessage('Wrong Credentials')
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }
  return { handleLogin, errorMessage, username, password, setUsername, setPassword }
}

export default useUser
