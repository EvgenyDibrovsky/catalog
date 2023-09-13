import React from 'react';
import { withTranslation } from 'react-i18next';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

class RegisterForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const currentState = { ...this.state };

    this.props.onSubmit(currentState);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed } = this.state;
    const { t } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-black dark:text-white">
          {t('login')}
          <input
            type="text"
            placeholder={t('enter-login')}
            name="login"
            value={login}
            onChange={this.handleChange}
            required
            className="w-full h-10 bg-white border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label className="text-black dark:text-white">
          {t('email')}
          <input
            type="email"
            placeholder={t('enter-email')}
            name="email"
            value={email}
            onChange={this.handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <label className="text-black dark:text-white">
          {t('password')}
          <input
            type="password"
            placeholder={t('enter-password')}
            name="password"
            value={password}
            onChange={this.handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>
        <span className="flex items-center">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={this.handleChange}
              required
              className="mr-4 appearance-none inline-block h-4 w-4 border-4 border-white dark:border-black rounded outline outline-2 outline-checkboxColor dark:outline-yellow-500 bg-white dark:bg-black  checked:bg-checkboxColor dark:checked:bg-yellow-500  "
            />
            {t('agreed')}
          </label>
          <a
            href={process.env.PUBLIC_URL + '/terms-use-page'}
            // href="/terms-use-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary dark:text-yellow-500 my-4 mx-auto block transition-all duration-200 hover:underline"
          >
            ({t('agreed-read')})
          </a>
        </span>
        <button type="submit" disabled={!agreed} className="btn-sign-up-form">
          {t('registration')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(RegisterForm);
