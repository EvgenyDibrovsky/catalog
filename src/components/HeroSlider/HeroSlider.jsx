import React, { useEffect } from 'react';
import HeroSliderItem from './HeroSliderItem';
import dbHeroSlider from '../../db/hero_slider.json';
import useCurrentLanguage from '../../Hooks/useCurrentLanguage';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function HeroSlider() {
  const currentLanguage = useCurrentLanguage();

  const data = dbHeroSlider.map(item => {
    const languageSpecificData = item.hero_slider[currentLanguage];

    return {
      ...languageSpecificData,
      id: item.hero_slider.id,
      banner: item.hero_slider.banner,
      logo: item.hero_slider.logo,
      offer: item.hero_slider.offer,
      link_site: item.hero_slider.link_site,
    };
  });

  useEffect(() => {
    new Swiper('.heroSlider', {
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
    <div className="swiper heroSlider w-full h-full">
      <div className="swiper-wrapper">
        {data.map(item => (
          <HeroSliderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="z-20 absolute bottom-0 right-0 lg:flex items-center justify-center bg-white">
        <button type="button" className="swiper-button-prev-ph p-4 group">
          <BsChevronLeft className="w-6 h-6 duration-200 transform translate-x-0 group-hover:-translate-x-1" />
        </button>
        <button type="button" className="swiper-button-next-ph p-4 group">
          <BsChevronRight className="w-6 h-6 fill-black duration-200 transform translate-x-0 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
