"use client";

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';
import Head from 'next/head'; // Добавляем Head из Next.js

export default function AuthModal({ closeModal, children }) {

  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    // Возвращаем прокрутку при размонтировании компонента
    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center bg-bgModal z-50 backdrop-blur-sm"
      onClick={closeModal}
    >
      {/* Изменения тут */}
      <Head>
        <style>{`body { overflow-y: hidden; }`}</style>
      </Head>
      {/* Изменения заканчиваются */}
      <div
        className="relative w-11/12 max-w-[28rem] h-auto rounded-md transition-all duration-200 bg-white text-black shadow-md-up dark:bg-black dark:text-white dark:shadow-white px-5 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <BsX
          className="absolute cursor-pointer right-2 top-2 text-[2rem] text-black dark:text-white hover:text-red-500 hover:dark:text-yellow-500  transition-all duration-200"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')
  );
}



