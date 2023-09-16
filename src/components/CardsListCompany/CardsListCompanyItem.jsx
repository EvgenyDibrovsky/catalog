export default function CardsListCompanyItem({ image, title, text, link }) {
  return (
    <li className="flex shadow-md dark:shadow-white rounded-md overflow-hidden duration-200 hover:shadow-sky-400 dark:hover:shadow-yellow-500 group">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="p-4">
          <div className="flex item-center justify-between gap-2 mb-4">
            <img
              src={process.env.PUBLIC_URL + image}
              alt={title}
              className="w-auto h-12 duration-200 group-hover:scale-110"
            />
            <h3 className="flex items-center font-bold">{title}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-black  dark:text-white  ">{text}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
