import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-bgSection dark:bg-bgSectionDark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-inherit text-inherit opacity-100 transition-opacity duration-200 transform">
        <div className="preloader-spinner relative text-black dark:text-white text-4xl font-bold leading-none tracking-wider box-border animate-animloader after:absolute  after:content-['edweb.site'] after:top-0 after:left-0 after:text-orange-400 after:overflow-hidden after:animate-animloader after:duration-200">
          edweb.site
        </div>
      </div>
    </div>
  );
}
