import RegisterForm from '../../../components/AuthForms/RegisterForm'
import React, { useState } from 'react'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    agreed: false,
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
        <RegisterForm
          login={formData.login}
          email={formData.email}
          password={formData.password}
          agreed={formData.agreed}
          onInputChange={onInputChange}
          formData={formData}
        />
      </div>
    </>
  )
}
export default RegistrationPage
