const HomeProfilePage = () => {
  return (
    <>
      <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mb-10">
        <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">
          btn 1
        </li>
        <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">
          btn 2
        </li>
        <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">
          btn 3
        </li>
        <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">
          btn 4
        </li>
        <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">
          btn 5
        </li>
        <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">
          btn 6
        </li>
      </ul>
      <div className="mb-10">
        <h2 className="font-semibold">Статистика</h2>
      </div>
      <div className="mb-10">
        <h2 className="font-semibold">Новые пользователи</h2>
      </div>
    </>
  )
}
export default HomeProfilePage
