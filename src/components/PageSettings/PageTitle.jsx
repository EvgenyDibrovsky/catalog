export default function PageTitle({ title }) {
  return (
    <h1 className="relative text-[1.25rem] text-center after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-titleLine dark:after:bg-yellow-500">
      {title}
    </h1>
  );
}
