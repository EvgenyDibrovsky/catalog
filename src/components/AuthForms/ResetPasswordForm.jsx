import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { resetPassword } from '../../redux/auth/auth-operations'

function ResetPasswordForm({ email, onInputChange, formData }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleChange = evt => {
    const { name, value } = evt.target
    onInputChange(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(resetPassword(formData))
  }

  return (
    <form onSubmit={handleSubmit}>
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
