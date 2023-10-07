import React from 'react';
import { withTranslation } from 'react-i18next';

class RessetForm extends React.Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onInputChange(name, value);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const { email, t } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-black dark:text-white">
          {t('forms.password_recovery.email')}
          <input
            type="email"
            placeholder={t('forms.password_recovery.enter_email')}
            name="email"
            value={email}
            onChange={this.handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
          />
        </label>

        <button type="submit" className="btn-sign-up-form">
          {t('forms.password_recovery.btn_password_recovery')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(RessetForm);
