import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import AuthModal from './AuthModal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import RessetForm from './RessetForm';
import SelectAuthForm from './SelectAuthForm';

export default function AuthHeader() {
  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState('Login'); // добавляем состояние для выбранной формы
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    agreed: false,
  });

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // Обрабатываем введенные данные
    console.log(formData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedForm('Login');
    setFormData({
      login: '',
      email: '',
      password: '',
      agreed: false,
    }); // Сброс формы при закрытии модального окна
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <BsPersonCircle className="text-[1.2rem] text-black dark:text-white" />
      </button>
      {showModal && (
        <AuthModal closeModal={handleCloseModal}>
          {selectedForm !== 'Reset' && <SelectAuthForm selectedForm={selectedForm} setSelectedForm={setSelectedForm} />}
          {selectedForm === 'Login' ? (
            <LoginForm onSubmit={handleSubmit} onInputChange={handleInputChange} formData={formData} setSelectedForm={setSelectedForm} />
          ) : selectedForm === 'Register' ? (
            <RegisterForm onSubmit={handleSubmit} onInputChange={handleInputChange} formData={formData} />
          ) : (
            <RessetForm onSubmit={handleSubmit} onInputChange={handleInputChange} formData={formData} />
          )}
        </AuthModal>
      )}
    </>
  );
}
