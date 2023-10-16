import ClockDate from '../../../../components/Widgets/ClockDate/ClockDate'
import QuoteGenerator from '../../../../components/Widgets/QuoteGenerator/QuoteGenerator'
import { Outlet } from 'react-router-dom'
import Section from '../../../../components/PageSettings/Section'
import Logout from '../../../../components/AuthForms/Logout'
import ProfileUserNavMenu from '../../../../components/Profile/User/NavMenu'
const ProfilePage = props => {
  return (
    <>
      <Section noPadding>
        <div className="container py-10">
          <div className="flex justify-between">
            <h1 className="text-[1.2rem] mb-5 font-semibold text-black dark:text-white ">
              Пользовтельская панель
            </h1>
            <div className="group">
              <Logout />
            </div>
          </div>
          <div className="mb-5">
            <ClockDate />
          </div>
          <div className="w-full sm:flex sm:gap-10">
            <div className="w-full sm:w-5/12 md:w-4/12 lg:w-3/12 mb-10">
              <ProfileUserNavMenu />
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
