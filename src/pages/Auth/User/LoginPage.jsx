import LoginForm from '../../../components/AuthForms/LoginForm'
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

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

  // Перенаправление после успешной аутентификации
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated, navigate])

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
