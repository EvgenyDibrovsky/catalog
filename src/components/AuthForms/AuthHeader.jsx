import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import AuthModal from './AuthModal'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import ResetPassword from './ResetPasswordForm'
import SelectAuthForm from './SelectAuthForm'

export default function AuthHeader() {
  const [showModal, setShowModal] = useState(false)
  const [selectedForm, setSelectedForm] = useState('Login')
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    agreed: false,
  })

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedForm('Login')
    setFormData({
      login: '',
      email: '',
      password: '',
      agreed: false,
    })
  }

  const renderForm = () => {
    switch (selectedForm) {
      case 'Login':
        return (
          <LoginForm
            onInputChange={handleInputChange}
            formData={formData}
            setSelectedForm={setSelectedForm}
          />
        )
      case 'Register':
        return (
          <RegisterForm onInputChange={handleInputChange} formData={formData} />
        )
      case 'Reset':
        return (
          <ResetPassword
            onInputChange={handleInputChange}
            formData={formData}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <BsPersonCircle className="text-[1.2rem] text-black dark:text-white" />
      </button>
      {showModal && (
        <AuthModal closeModal={handleCloseModal}>
          {['Login', 'Register'].includes(selectedForm) && (
            <SelectAuthForm
              selectedForm={selectedForm}
              setSelectedForm={setSelectedForm}
            />
          )}
          {renderForm()}
        </AuthModal>
      )}
    </>
  )
}
