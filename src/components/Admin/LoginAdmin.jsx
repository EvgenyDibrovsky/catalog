import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { BsFillShieldLockFill } from 'react-icons/bs';

const AdminLoginForm = ({ t }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      navigate('/admin/main');
      setPassword('');
    } else {
      alert('Неверный пароль!');
    }
  };

  return (
    <>
      <div className="flex justify-center mb-10">
        <BsFillShieldLockFill className="w-12 h-12 text-sky-500 dark:text-yellow-500" />
      </div>
      <form onSubmit={handleSubmit} className="w-8/12">
        <label className="text-black dark:text-white">
          <input
            type="password"
            placeholder={t('admin.forms.authorization.password_enter')}
            name="password"
            value={password}
            onChange={handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <div className="px-4 py-2 my-5 bg-red-500 text-white text-center ">Неверный пароль</div>
        <button type="submit" className="btn-sign-up-form">
          {t('admin.forms.authorization.btn_auth')}
        </button>
      </form>
    </>
  );
};

export default withTranslation()(AdminLoginForm);
