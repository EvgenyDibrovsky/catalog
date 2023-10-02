import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const { t } = useTranslation();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreement: false, // новое состояние для чекбокса
  });

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Обработка формы здесь (например, отправка данных формы)
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="w-10/12 mx-auto my-10">
      <div className=" flex flex-col lg:flex-row gap-6">
        <div className="w-full sm:w-8/12 lg:w-6/12 mx-auto flex flex-col justify-between">
          <label className="text-black dark:text-white">
            {t('forms.contact_form.name')}

            <input
              type="text"
              name="name"
              placeholder={t('forms.contact_form.enter_name')}
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full h-12 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
            />
          </label>

          <label className="text-black dark:text-white">
            {t('forms.contact_form.email')}
            <input
              type="email"
              name="email"
              placeholder={t('forms.contact_form.enter_email')}
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full h-12 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
            />
          </label>

          <label className="text-black dark:text-white">
            {t('forms.contact_form.message_subject')}
            <input
              type="text"
              name="subject"
              placeholder={t('forms.contact_form.enter_message_subject')}
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full h-12 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
            />
          </label>
        </div>
        <div className="w-full sm:w-8/12 lg:w-6/12 mx-auto flex flex-col justify-between">
          <label className="text-black dark:text-white">
            {t('forms.contact_form.message')}

            <textarea
              name="message"
              value={formState.message}
              placeholder={t('forms.contact_form.enter_message')}
              onChange={handleChange}
              required
              className="w-full h-32  bg-white dark:bg-black border border-borderLabelForm dark:border-white p-2 rounded-md focus:outline-none mt-2 mb-5 resize-none"
            />
          </label>

          <label className="flex items-center gap-2 text-black dark:text-white mb-4">
            <input type="checkbox" name="agreement" checked={formState.agreement} onChange={handleChange} className="h-4 w-4" />
            <div>
              {t('forms.contact_form.accept-form')}
              <a
                href="/regulations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold underline duration-200 hover:text-sky-600"
                aria-label={t('pages.regulations.title')}
              >
                {t('pages.regulations.title')}
              </a>
            </div>
          </label>

          <button type="submit" className="btn-contact-form">
            {t('forms.contact_form.send')}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
