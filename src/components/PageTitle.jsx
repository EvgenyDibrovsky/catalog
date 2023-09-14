export default function PageTitle({ title }) {
  return (
    <h1 className="relative text-4xl text-center mb-6 text-black dark:text-white after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-40 after:h-1 after:bg-titleLine dark:after:bg-yellow-500">
      {title}
    </h1>
  );
}
