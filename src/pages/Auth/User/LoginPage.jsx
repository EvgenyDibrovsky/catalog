import LoginForm from '../../../components/AuthForms/LoginForm'
import Section from '../../../components/PageSettings/Section'
import React, { useState } from 'react'

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
      <Section noPadding>
        <div className="flex flex-col lg:flex-row lg:min-h-[30rem]">
          <div className="w-full py-20 lg:w-6/12 flex flex-col items-center justify-center bg-gradient-to-r from-sky-200 via-white to-sky-100 dark:from-yellow-200  dark:via-white  dark:to-yellow-100 ">
            <LoginForm
              email={formData.email}
              password={formData.password}
              onInputChange={onInputChange}
              formData={formData}
            />
          </div>
        </div>
      </Section>
    </>
  )
}
export default LoginPage
