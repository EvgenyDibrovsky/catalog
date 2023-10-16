import { NavLink } from 'react-router-dom'
import { LuUser2, LuHome, LuSettings, LuPlus } from 'react-icons/lu'
export default function ProfileUserNavMenu() {
  return (
    <ul className="flex md:flex-col gap-4 mb-10">
      <li className="shadow-md">
        <NavLink
          to="/user/profile/"
          className="flex justify-start items-center gap-4  h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 group ">
          <LuUser2 className="group-[&.active]:text-sky-500 dark:group-[&.active]:text-yellow-500" />
          <span className="hidden md:block">Профиль</span>
        </NavLink>
      </li>
      <li className="shadow-md">
        <NavLink
          to="/user/profile/control-panel"
          className="flex justify-start items-center gap-4  h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 group ">
          <LuHome className="group-[&.active]:text-sky-500 dark:group-[&.active]:text-yellow-500" />
          <span className="hidden md:block">Панель управления</span>
        </NavLink>
      </li>
      <li className="shadow-md">
        <NavLink
          to="/user/profile/settings"
          className="flex justify-start items-center gap-4 h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 group ">
          <LuSettings className="group-[&.active]:text-sky-500 dark:group-[&.active]:text-yellow-500" />
          <span className="hidden md:block"> Настройки</span>
        </NavLink>
      </li>
      <li className="shadow-md">
        <NavLink
          to="/user/profile/add"
          className="flex justify-start items-center gap-4  h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 group ">
          <LuPlus className="group-[&.active]:text-sky-500 dark:group-[&.active]:text-yellow-500" />
          <span className="hidden md:block">Добавить</span>
        </NavLink>
      </li>
    </ul>
  )
}
