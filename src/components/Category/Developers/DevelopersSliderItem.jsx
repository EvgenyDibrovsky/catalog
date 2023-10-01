import React from 'react';

export default function DevelopersSliderItem({ item, logo }) {
  return (
    <div className="swiper-slide bg-white dark:bg-black flex">
      <div className="relative flex w-full h-[30rem]">
        <div className=" container flex flex-col lg:flex-row">
          <div className="w-full lg:w-5/12 flex flex-col justify-between items-center py-16">
            <div className=" w-full lg:w-11/12">
              <h1 className="mb-10 text-left text-[2rem] leading-1 font-semibold">{item['title']}</h1>
              <p className="mb-10">{item['description']}</p>
            </div>
          </div>
          <div className=" w-full h-full lg:w-6/12 absolute right-0 top-0 bottom-0 overflow-hidden">
            {logo && <img src={process.env.PUBLIC_URL + logo} alt={item['title']} className="absolute w-28 h-auto top-5  left-0 z-10 shadow-xl" />}
            <img src={process.env.PUBLIC_URL + item.banner} alt={item['title']} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
