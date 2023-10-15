import LoginForm from '../../../components/AuthForms/LoginForm'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const onInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center mt-10">
        <LoginForm
          email={formData.email}
          password={formData.password}
          onInputChange={onInputChange}
          formData={formData}
        />
      </div>
      <Outlet />
    </>
  )
}
export default LoginPage
