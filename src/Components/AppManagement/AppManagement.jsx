import React, { useState } from 'react'
import LoginForm from './LoginForm'
import GeneralManagementMenu from './GeneralManagementMenu'

const AppManagement = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      {user
        ? <GeneralManagementMenu />
        : <LoginForm setUser={setUser} />}
    </>
  )
}

export default AppManagement
