import { LuCheck, LuX } from 'react-icons/lu'
const PayPage = () => {
  return (
    <>
      <div className="mb-5">
        <h1>Страница оплаты и счетов</h1>
      </div>

      <ul className="grid grid-cols-3 gap-4">
        <li className="p-5 bg-white dark:bg-neutral-800 shadow-md">
          <h3 className="text-center text-[1.25rem] mb-5">Пакет "Base"</h3>
          <ul className="list-none ">
            <li className="flex justify-start items-center gap-4 border-b border-neutral-200 dark:border-neutral-500 py-2">
              <LuCheck className="text-green-600" />
              <p className="text-[1rem] text-black dark:text-white">Опция 1</p>
            </li>
            <li className="flex justify-start items-center gap-4 border-b border-neutral-200 dark:border-neutral-500 py-2">
              <LuCheck className="text-green-600" />
              <p className="text-[1rem] text-black dark:text-white">Опция 1</p>
            </li>
            <li className="flex justify-start items-center gap-4 border-b border-neutral-200 dark:border-neutral-500 py-2">
              <LuCheck className="text-green-600" />
              <p className="text-[1rem] text-black dark:text-white">Опция 1</p>
            </li>
            <li className="flex justify-start items-center gap-4 border-b border-neutral-200 dark:border-neutral-500 py-2">
              <LuX className="text-red-500" />
              <p className="text-[1rem] text-black dark:text-white">Опция 1</p>
            </li>
            <li className="flex justify-start items-center gap-4 py-2">
              <LuX className="text-red-500" />
              <p className="text-[1rem] text-black dark:text-white">Опция 1</p>
            </li>
          </ul>
          <button className="w-full justify-center items-center border border-green-600 bg-white duration-200 hover:bg-green-600 text-green-600 hover:text-white py-2 px-4 mt-5">
            Оформить
          </button>
        </li>
      </ul>
    </>
  )
}
export default PayPage
