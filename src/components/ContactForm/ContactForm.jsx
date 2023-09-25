import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
function ContactForm() {
  const { t } = useTranslation();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Обработка формы здесь (например, отправка данных формы)
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="w-10/12 mx-auto my-10">
      <div className=" flex gap-6">
        <div className="w-6/12">
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
              className="w-full h-12 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
            />
          </label>
        </div>
        <div className="w-6/12">
          <label className="text-black dark:text-white">
            {t('forms.contact_form.message')}

            <textarea
              name="message"
              value={formState.message}
              placeholder={t('forms.contact_form.enter_message')}
              onChange={handleChange}
              required
              className="w-full h-32  bg-white dark:bg-black border border-borderLabelForm dark:border-white p-2 rounded-md focus:outline-none mt-2 mb-5"
            />
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
