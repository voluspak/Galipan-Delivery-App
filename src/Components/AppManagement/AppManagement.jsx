import React from 'react'
import LoginForm from './LoginForm'
import GeneralManagementMenu from './GeneralManagementMenu'
import useUser from '../../Hooks/useUser'

const AppManagement = () => {
  const { user } = useUser()

  if (!user) {
    return (<LoginForm />)
  } else {
    return (<GeneralManagementMenu />)
  }
}

export default AppManagement
