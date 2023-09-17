export default function PageTitle({ title, showLine = true }) {
  const lineClass = showLine ? 'linePageTitle' : '';
  return (
    <h1 className={`relative text-[1.25rem] text-center e${lineClass}`}>
      {title}
    </h1>
  );
}
