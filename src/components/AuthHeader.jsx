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

  const handleSubmit = state => {
    // Обрабатываем введенные данные
    console.log(state);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedForm('Login'); // добавить сброс формы при закрытии модального окна
  };
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <BsPersonCircle className="text-[1.2rem] text-black dark:text-white" />
      </button>
      {showModal && (
        <AuthModal closeModal={handleCloseModal}>
          {selectedForm !== 'Reset' && (
            <SelectAuthForm
              selectedForm={selectedForm}
              setSelectedForm={setSelectedForm}
            />
          )}
          {selectedForm === 'Login' ? (
            <LoginForm
              onSubmit={handleSubmit}
              setSelectedForm={setSelectedForm}
            />
          ) : selectedForm === 'Register' ? (
            <RegisterForm onSubmit={handleSubmit} />
          ) : (
            <RessetForm onSubmit={handleSubmit} />
          )}
        </AuthModal>
      )}
    </>
  );
}
