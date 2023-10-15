import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth/auth-operations'
import { selectAuthError } from '../../redux/auth/auth-selectors'
import { Link } from 'react-router-dom'

function LoginForm({ email, password, t, onInputChange, formData }) {
  const dispatch = useDispatch()
  const loginError = useSelector(selectAuthError) // Получаем ошибку из Redux
  const [success, setSuccess] = useState(false)

  const handleChange = evt => {
    const { name, value } = evt.target
    onInputChange(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(login(formData))
      .unwrap()
      .then(() => {
        setSuccess(true) // Устанавливаем состояние успешного входа
        onInputChange('email', '') // Очищаем поля
        onInputChange('password', '')
      })
      .catch(() => setSuccess(false))
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label className="text-black dark:text-white">
        {t('forms.authorization.email')}
        <input
          type="email"
          placeholder={t('forms.authorization.enter_email')}
          name="email"
          value={email}
          onChange={handleChange}
          required
          className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>
      <label className="text-black dark:text-white">
        {t('forms.authorization.password')}
        <input
          type="password"
          placeholder={t('forms.authorization.password')}
          name="password"
          value={password}
          onChange={handleChange}
          required
          className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>
      <div>
        {success && (
          <div className="flex justify-center items-center bg-green-700 text-white py-4 px-2 my-4">
            Вход успешно выполнен!
          </div>
        )}
        {loginError && (
          <div className="flex justify-center items-center bg-red-500 text-white py-4 px-2 my-4">
            {loginError}
          </div>
        )}
      </div>
      <button type="submit" className="btn-sign-up-form">
        {t('forms.authorization.btn_authorization')}
      </button>
      <Link to="reset-password">
        <button
          type="button"
          className="text-textSecondary dark:text-white my-4 mx-auto block transition-all duration-200 hover:underline">
          {t('forms.authorization.btn_password_recovery')}
        </button>
      </Link>
    </form>
  )
}

export default withTranslation()(LoginForm)
