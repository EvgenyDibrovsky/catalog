import { LuCheck, LuX } from 'react-icons/lu'
const PayPage = () => {
  return (
    <>
      <div className="mb-5">
        <h1>Страница оплаты и счетов</h1>
      </div>

      <ul className="grid grid-cols-3 gap-4">
        <li className="p-5 bg-white dark:bg-neutral-900 shadow-md dark:shadow-white duration-200 hover:scale-110">
          <h3 className="text-center text-[1.25rem] mb-5 text-sky-500 dark:text-yellow-500">
            Пакет "Base"
          </h3>
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
          <button className="w-full justify-center items-center border border-green-600 dark:border-yellow-500 bg-white dark:bg-transparent duration-200 hover:bg-green-600 dark:hover:bg-yellow-500 text-green-600 dark:text-white hover:text-white py-2 px-4 mt-5">
            Оформить
          </button>
        </li>

        <li className="p-5 bg-white dark:bg-neutral-900 shadow-md dark:shadow-white duration-200 hover:scale-110">
          <h3 className="text-center text-[1.25rem] mb-5 text-sky-500 dark:text-yellow-500">
            Пакет "Advanced"
          </h3>
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
          <button className="w-full justify-center items-center border border-green-600 dark:border-yellow-500 bg-white dark:bg-transparent duration-200 hover:bg-green-600 dark:hover:bg-yellow-500 text-green-600 dark:text-white hover:text-white py-2 px-4 mt-5">
            Оформить
          </button>
        </li>

        <li className="p-5 bg-white dark:bg-neutral-900 shadow-md dark:shadow-white duration-200 hover:scale-110">
          <h3 className="text-center text-[1.25rem] mb-5 text-sky-500 dark:text-yellow-500">
            Пакет "Pro"
          </h3>
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
          <button className="w-full justify-center items-center border border-green-600 dark:border-yellow-500 bg-white dark:bg-transparent duration-200 hover:bg-green-600 dark:hover:bg-yellow-500 text-green-600 dark:text-white hover:text-white py-2 px-4 mt-5">
            Оформить
          </button>
        </li>
      </ul>
    </>
  )
}
export default PayPage
