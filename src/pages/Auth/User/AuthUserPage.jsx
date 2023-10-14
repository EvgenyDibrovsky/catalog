import { useTranslation } from 'react-i18next'
import { BsPersonPlus, BsPerson } from 'react-icons/bs'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const AuthUserPage = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const getTitle = () => {
    if (location.pathname.includes('register')) {
      return t('forms.select_forms.registration')
    } else if (location.pathname.includes('login')) {
      return t('forms.select_forms.authorization')
    } else if (location.pathname.includes('password-recovery')) {
      return t('forms.password_recovery.btn_password_recovery')
    } else {
      return 'Логин'
    }
  }
  return (
    <>
      <div className="mt-20 h-[calc(100vh-17.99rem)]">
        <div className="w-full h-full flex ">
          <div className="hidden relative lg:flex w-6/12 bg-admin-login bg-cover bg-no-repeat items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-bgDark"></div>
            <h1 className="relative w-6/12 text-[2rem] font-semibold text-center text-white">
              {getTitle()}
            </h1>
          </div>
          <div className="w-6/12 py-20 lg:w-6/12 flex flex-col items-center justify-center">
            <div className="w-8/12 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <NavLink
                  to="register"
                  className="flex items-center justify-center gap-4 border border-sky-500 dark:border-yellow-500 bg-white dark:bg-black p-5 duration-200 hover:bg-sky-500 dark:hover:bg-yellow-500 hover:text-white dark:hover:text-black [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black">
                  <BsPerson />
                  {t('forms.select_forms.registration')}
                </NavLink>
                <NavLink
                  to="login"
                  className="flex items-center justify-center gap-4 border border-sky-500 dark:border-yellow-500 bg-white dark:bg-black p-5 duration-200 hover:bg-sky-500 dark:hover:bg-yellow-500 hover:text-white dark:hover:text-black [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black">
                  <BsPersonPlus />
                  {t('forms.select_forms.authorization')}
                </NavLink>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AuthUserPage
