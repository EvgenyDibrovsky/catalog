import React from 'react';
import { withTranslation } from 'react-i18next';

class LoginForm extends React.Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onInputChange(name, value);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const { email, password, t, setSelectedForm } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-black dark:text-white">
          {t('forms.authorization.email')}
          <input
            type="email"
            placeholder={t('forms.authorization.enter_email')}
            name="email"
            value={email}
            onChange={this.handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label className="text-black dark:text-white">
          {t('forms.authorization.password')}
          <input
            type="password"
            placeholder={t('forms.authorization.password')}
            name="password"
            value={password}
            onChange={this.handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <button type="submit" className="btn-sign-up-form">
          {t('forms.authorization.btn_authorization')}
        </button>
        <button type="button" onClick={() => setSelectedForm('Reset')} className="text-textSecondary dark:text-white my-4 mx-auto block transition-all duration-200 hover:underline">
          {t('forms.authorization.btn_password_recovery')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(LoginForm);
