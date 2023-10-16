import ClockDate from '../../../../components/Widgets/ClockDate/ClockDate'
import QuoteGenerator from '../../../../components/Widgets/QuoteGenerator/QuoteGenerator'
import { NavLink, Outlet } from 'react-router-dom'
import Section from '../../../../components/PageSettings/Section'
import Logout from '../../../../components/AuthForms/Logout'
const ProfilePage = props => {
  return (
    <>
      <Section noPadding>
        <div className="container py-10">
          <div className="flex justify-between">
            <h1 className="text-[1.5rem] mb-10 font-semibold text-black dark:text-white ">
              Пользовтельская панель
            </h1>
            <div className="group">
              <Logout />
            </div>
          </div>
          <div className="w-full sm:flex sm:gap-10">
            <div className="w-full sm:w-5/12 md:w-4/12 lg:w-3/12 mb-10">
              <div className="mb-10">
                <ClockDate />
              </div>
              <ul className="flex flex-col gap-4 mb-10">
                <li className="shadow-md">
                  <NavLink
                    to="/user/profile/control-panel"
                    className="flex justify-center items-center h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 ">
                    Панель управления
                  </NavLink>
                </li>
                <li className="shadow-md">
                  <NavLink
                    to="/user/profile/settings"
                    className="flex justify-center items-center h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 ">
                    Настройки
                  </NavLink>
                </li>
              </ul>
              <div>
                <QuoteGenerator />
              </div>
            </div>
            <div className="w-full sm:w-7/12 md:w-8/12 lg:w-9/12 ">
              <Outlet />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
export default ProfilePage
