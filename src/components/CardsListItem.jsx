export default function CardsListItem({ image, title, text, link }) {
  return (
    <li className="group h-40 relative flex flex-col justify-between shadow-md transition-all duration-500 dark:shadow-white rounded-md overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative flex items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + image}
            alt={title}
            className="h-40 p-4 transition-transform duration-200 ease-in-out group-hover:scale-90"
          />
          <p className="flex items-center justify-center text-white transition-transform duration-200 ease-in-out absolute inset-0 p-4 bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-30 transform translate-y-full group-hover:translate-y-0">
            {text}
          </p>
        </div>
      </a>
    </li>
  );
}
