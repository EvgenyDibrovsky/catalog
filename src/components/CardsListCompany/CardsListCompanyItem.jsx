export default function CardsListCompanyItem({ image, title, text, link }) {
  return (
    <li className="group h-auto relative flex flex-col justify-between shadow-md dark:shadow-white rounded-md overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center">
          <div className="w-3/12 flex flex-col gap-2">
            <img
              src={process.env.PUBLIC_URL + image}
              alt={title}
              className="h-40 p-4 "
            />
          </div>
          <div className="w-9/12 flex flex-col gap-2">
            <h3 className="font-bold">{title}</h3>
            <p className=" text-black  dark:text-white  ">{text}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
