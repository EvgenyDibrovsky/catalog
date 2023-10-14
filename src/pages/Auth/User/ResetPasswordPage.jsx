import ResetPasswordForm from '../../../components/AuthForms/ResetPasswordForm'
import React, { useState } from 'react'

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: '',
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
        <ResetPasswordForm
          email={formData.email}
          onInputChange={onInputChange}
          formData={formData}
        />
      </div>
    </>
  )
}

export default ResetPasswordPage
