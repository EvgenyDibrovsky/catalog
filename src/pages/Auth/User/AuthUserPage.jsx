import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { BsPersonPlus, BsPerson } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'

const AuthUserPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="mt-20">
        <div className="w-full h-full flex ">
          <div className="hidden relative lg:flex w-6/12 bg-admin-login bg-cover bg-no-repeat items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-bgDark"></div>
            <h1 className="relative w-6/12 text-[2rem] font-semibold text-center text-white">
              Логин
            </h1>
          </div>
          <div className="w-6/12 py-20 lg:w-6/12 flex flex-col items-center justify-center bg-gradient-to-r from-sky-200 via-white to-sky-100 dark:from-yellow-200  dark:via-white  dark:to-yellow-100 ">
            <div className="w-8/12 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <NavLink
                  to="register"
                  className="flex items-center justify-center gap-4 border border-sky-500 bg-white p-5 duration-200 hover:bg-sky-500 hover:text-white">
                  <BsPerson />
                  {t('forms.select_forms.registration')}
                </NavLink>
                <NavLink
                  to="login"
                  className="flex items-center justify-center gap-4 border border-sky-500 bg-white p-5 duration-200 hover:bg-sky-500 hover:text-white">
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
