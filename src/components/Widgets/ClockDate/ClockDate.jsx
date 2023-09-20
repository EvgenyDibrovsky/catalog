import React, { useState, useEffect } from 'react';

export default function CurrentDateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-2 ">
        <p className="text-[1.25rem] text-black dark:text-white">{currentDate.toLocaleDateString()}</p>
        <span className="text-[1.25rem] text-black dark:text-white">/</span>
        <p className="text-[1.25rem] text-black dark:text-white ">{currentDate.toLocaleTimeString()}</p>
      </div>
    </>
  );
}
