import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { resetPassword } from '../../redux/auth/auth-operations'
import { selectAuthError } from '../../redux/auth/auth-selectors'

function ResetPasswordForm({ email, onInputChange, formData }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const resetError = useSelector(selectAuthError) // Получаем ошибку из Redux
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = evt => {
    const { name, value } = evt.target
    onInputChange(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(resetPassword(email))
      .unwrap()
      .then(() => {
        setSuccess(true)
        setMessage(
          'Мы отправили автоматически сгенерированный пароль на указанный email. Проверьте свою почту.'
        )
      })
      .catch(error => {
        setMessage(
          'Указанного email нет в нашей базе. Вам необходимо зарегистрироваться.'
        )
      })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {success && (
        <div className="bg-green-500 text-white p-4 mb-4">{message}</div>
      )}
      {!success && resetError && (
        <div className="bg-red-500 text-white p-4 mb-4">{message}</div>
      )}
      <label className="text-black dark:text-white">
        {t('forms.password_recovery.email')}
        <input
          type="email"
          placeholder={t('forms.password_recovery.enter_email')}
          name="email"
          value={email}
          onChange={handleChange}
          required
          className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>
      <button type="submit" className="btn-sign-up-form">
        {t('forms.password_recovery.btn_password_recovery')}
      </button>
    </form>
  )
}

export default ResetPasswordForm
