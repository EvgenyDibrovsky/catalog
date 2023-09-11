import React from 'react';
import { withTranslation } from 'react-i18next';
const INITIAL_STATE = {
  email: '',
};

class RessetForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
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
    const { email } = this.state;
    const { t } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
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

        <button type="submit" className="btn-sign-up-form">
          {t('reset-password-btn')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(RessetForm); //
