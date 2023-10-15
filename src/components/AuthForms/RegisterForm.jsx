import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/auth-operations'
import { useSelector } from 'react-redux'
import { selectAuthError } from '../../redux/auth/auth-selectors'
function RegisterForm({
  login,
  email,
  password,
  agreed,
  t,
  onInputChange,
  formData,
}) {
  const dispatch = useDispatch()
  const registrationError = useSelector(selectAuthError) // Получаем ошибку из Redux
  const [success, setSuccess] = useState(false)

  const handleChange = evt => {
    const { name, value, type, checked } = evt.target
    const finalValue = type === 'checkbox' ? checked : value
    onInputChange(name, finalValue)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(register(formData))
      .unwrap()
      .then(() => {
        setSuccess(true) // Устанавливаем состояние успешной регистрации
        onInputChange('login', '') // Очищаем поля
        onInputChange('email', '')
        onInputChange('password', '')
        onInputChange('agreed', false)
      })
      .catch(() => setSuccess(false))
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label className="text-black dark:text-white">
        {t('forms.registration.login')}
        <input
          type="text"
          placeholder={t('forms.registration.enter_login')}
          name="login"
          value={login}
          onChange={handleChange}
          required
          className="w-full h-10 bg-white border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>
      <label className="text-black dark:text-white">
        {t('forms.registration.email')}
        <input
          type="email"
          placeholder={t('forms.registration.enter_email')}
          name="email"
          value={email}
          onChange={handleChange}
          required
          className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>
      <label className="text-black dark:text-white">
        {t('forms.registration.password')}
        <input
          type="password"
          placeholder={t('forms.registration.enter_password')}
          name="password"
          value={password}
          onChange={handleChange}
          required
          className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
        />
      </label>
      <span className="flex items-center justify-between">
        <label className="flex items-center text-[0.7rem]">
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={handleChange}
            required
            className="mr-4 appearance-none inline-block h-4 w-4 border-4 border-white dark:border-black rounded outline outline-2 outline-checkboxColor dark:outline-yellow-500 bg-white dark:bg-black  checked:bg-checkboxColor dark:checked:bg-yellow-500  "
          />
          {t('forms.registration.regulations_checkbox')}
        </label>
        <a
          href={process.env.PUBLIC_URL + '/regulations'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] text-textSecondary dark:text-yellow-500 my-4 block transition-all duration-200 hover:underline">
          ({t('forms.registration.regulations_page')})
        </a>
      </span>
      <div>
        {success && (
          <div className="flex justify-center items-center bg-green-700 text-white py-4 px-2 my-4">
            Регистрация успешна!
          </div>
        )}
        {registrationError && (
          <div className="flex justify-center items-center bg-red-500 text-white py-4 px-2 my-4">
            {registrationError}
          </div>
        )}
      </div>
      <button type="submit" disabled={!agreed} className="btn-sign-up-form">
        {t('forms.registration.btn_registration')}
      </button>
    </form>
  )
}

export default withTranslation()(RegisterForm)
