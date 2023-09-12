"use client";
import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import AuthModal from '../Auth/AuthModal';
// import RegisterForm from '../Auth/RegisterForm';
// import LoginForm from '../Auth/LoginForm';
// import RessetForm from '../Auth/RessetForm';
import SelectAuthForm from '../Auth/SelectAuthForm';

export default function AuthHeader() {
  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState('Login');

  const handleSubmit = (state) => {
    console.log(state);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedForm('Login');
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
