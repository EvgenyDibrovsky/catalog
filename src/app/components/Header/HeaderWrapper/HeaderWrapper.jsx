const HeaderWrapper = ({ children }) => {
  return (
    <header className="flex items-center justify-between fixed h-20 w-full top-0 left-0 right-0 bg-white dark:bg-black shadow-md  ">
      <div className="container flex items-center justify-between">{children}</div>
    </header>
  );
};
export { HeaderWrapper };
