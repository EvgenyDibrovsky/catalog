import React from 'react';
import { withTranslation } from 'react-i18next';
import { BsFillShieldLockFill } from 'react-icons/bs';
const INITIAL_STATE = {
  password: '',
};

class AdminLoginForm extends React.Component {
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
    const { password } = this.state;
    const { t } = this.props;
    return (
      <>
        <div className="flex justify-center mb-10">
          <BsFillShieldLockFill className="w-12 h-12 text-sky-500 dark:text-yellow-500" />
        </div>

        <form onSubmit={this.handleSubmit} className="w-8/12">
          <label className="text-black dark:text-white">
            <input
              type="password"
              placeholder={t('admin.forms.authorization.password_enter')}
              name="password"
              value={password}
              onChange={this.handleChange}
              required
              className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2 mb-5"
            />
          </label>

          <button type="submit" className="btn-sign-up-form">
            {t('admin.forms.authorization.btn_auth')}
          </button>
        </form>
      </>
    );
  }
}

export default withTranslation()(AdminLoginForm);
