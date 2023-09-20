export default function MainAdminPage() {
  return (
    <>
      <div className="container py-10">
        <div className="flex justify-center ">
          <h1 className="text-[1.5rem] mb-10 font-semibold  text-black dark:text-white ">Админ панель</h1>
        </div>
        <div className="w-full flex">
          <div className="w-3/12 mb-10">
            <ul className="flex flex-col gap-4">
              <li className="border border-sky-500 p-2">btn 1</li>
              <li className="border border-sky-500 p-2">btn 2</li>
              <li className="border border-sky-500 p-2">btn 3</li>
              <li className="border border-sky-500 p-2">btn 4</li>
              <li className="border border-sky-500 p-2">btn 5</li>
            </ul>
          </div>
          <div className="w-9/12 px-10">
            <ul className=" grid grid-cols-3 gap-4  mb-10">
              <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">btn 1</li>
              <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">btn 2</li>
              <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">btn 3</li>
              <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">btn 4</li>
              <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">btn 5</li>
              <li className="h-20 flex justify-center items-center border border-sky-500 dark:shadow-yellow-500">btn 6</li>
            </ul>
            <div className="mb-10">
              <h2 className="font-semibold">Статистика</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
