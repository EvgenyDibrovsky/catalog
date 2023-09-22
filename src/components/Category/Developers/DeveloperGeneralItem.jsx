// DeveloperGeneralItem.js

export default function DeveloperGeneralItem() {
  return (
    <>
      <div className="my-20">
        <h1 className="text-black text-[1.5rem] font-bold">Название компании</h1>
        <p className="text-black">
          Описание компании: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, rem minus earum aspernatur eius dolor! Dolorem a laudantium optio, dolor animi velit cumque nam quis
          quidem, sequi totam eaque! Amet!
        </p>
      </div>
      <ul className="w-6/12 grid grid-cols-3 gap-4">
        <li className="cursor-pointer border-b border-sky-500 dark:border-yellow-500 py-2 text-center duration-200 hover:bg-sky-500 dark:hover:bg-yellow-500">Проекты</li>
        <li className="cursor-pointer border-b border-sky-500 dark:border-yellow-500 py-2 text-center duration-200 hover:bg-sky-500 dark:hover:bg-yellow-500">Галерея</li>
        <li className="cursor-pointer border-b border-sky-500 dark:border-yellow-500 py-2 text-center duration-200 hover:bg-sky-500 dark:hover:bg-yellow-500">Отзывы</li>
      </ul>
    </>
  );
}
