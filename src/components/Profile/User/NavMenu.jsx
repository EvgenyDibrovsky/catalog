import { NavLink } from 'react-router-dom'
import { LuHome, LuSettings } from 'react-icons/lu'
export default function ProfileUserNavMenu() {
  return (
    <ul className="flex flex-col gap-4 mb-10">
      <li className="shadow-md">
        <NavLink
          to="/user/profile/control-panel"
          className="flex justify-start items-center gap-4  h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 ">
          <LuHome />
          Панель управления
        </NavLink>
      </li>
      <li className="shadow-md">
        <NavLink
          to="/user/profile/settings"
          className="flex justify-start items-center gap-4 h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 ">
          <LuSettings />
          Настройки
        </NavLink>
      </li>
    </ul>
  )
}
