import React from 'react'
import LoginForm from './LoginForm'
import GeneralManagementMenu from './GeneralManagementMenu'
import useUser from '../../Hooks/useUser'

const AppManagement = () => {
  const { user } = useUser()

  return (
    <>
      {user
        ? <GeneralManagementMenu />
        : <LoginForm />}
    </>
  )
}

export default AppManagement
