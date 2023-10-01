import React, { useEffect, useState } from 'react';
import DevelopersSliderItem from './DevelopersSliderItem';
import { useParams } from 'react-router-dom';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import 'swiper/css';
import 'swiper/css/navigation';

export default function DevelopersSlider() {
  const { developerId } = useParams();
  const currentLanguage = useCurrentLanguage();
  const [data, setData] = useState({ slider: [], logo: null });

  useEffect(() => {
    import(`../../../db/catalog/bd-developers/developer_${developerId}.json`)
      .then(({ default: developer }) => {
        const sliderData = developer.developer_page_item[currentLanguage]?.slider || [];
        const logo = developer.developer_page_item.logo;
        setData({ slider: sliderData, logo });
      })
      .catch(error => {
        console.error('Failed to load developer data', error);
      });

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
  }, [developerId, currentLanguage]);

  return (
    <div className="swiper developersSlider w-full h-full">
      <div className="swiper-wrapper">
        {data.slider.map((slide, index) => (
          <DevelopersSliderItem key={index} item={slide} logo={data.logo} />
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
