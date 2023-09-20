import React, { useEffect } from 'react';
import DevelopersSliderItem from './DevelopersSliderItem';
import dbDevelopersSlider from '../../../db/developers_slider.json';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function DevelopersSlider() {
  const currentLanguage = useCurrentLanguage();

  const data = dbDevelopersSlider.map(item => {
    const languageSpecificData = item.developers_slider[currentLanguage];

    return {
      ...languageSpecificData,
      id: item.developers_slider.id,
      banner: item.developers_slider.banner,
      logo: item.developers_slider.logo,
      offer: item.developers_slider.offer,
      link_site: item.developers_slider.link_site,
    };
  });

  useEffect(() => {
    new Swiper('.developersSlider', {
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next-ph',
        prevEl: '.swiper-button-prev-ph',
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <div className="swiper developersSlider w-full h-full">
      <div className="swiper-wrapper">
        {data.map(item => (
          <DevelopersSliderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="z-20 absolute bottom-0 right-0 lg:flex items-center justify-center bg-white dark:bg-black">
        <button type="button" className="swiper-button-prev-ph p-4 group">
          <BsChevronLeft className="w-6 h-6 fill-black dark:fill-white duration-200 transform translate-x-0 group-hover:-translate-x-1" />
        </button>
        <button type="button" className="swiper-button-next-ph p-4 group">
          <BsChevronRight className="w-6 h-6 fill-black dark:fill-white duration-200 transform translate-x-0 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
