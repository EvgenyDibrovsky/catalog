const Footer = () => {
  return (
    <footer className="h-40 w-full py-10 fixed bottom-0 left-0 right-0 border-t border-black bg-white dark:bg-black">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-center text-black dark:text-white">Block 1 </p>
          </div>
          <div>
            <p className="text-center text-black dark:text-white">Block 2 </p>
          </div>
          <div>
            <p className="text-center text-black dark:text-white">Block 3 </p>
          </div>
          <div>
            <p className="text-center text-black dark:text-white">Block 4 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
