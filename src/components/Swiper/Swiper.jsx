import React, { useEffect } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css'; // Import Swiper styles

function MySwiperComponent() {
  useEffect(() => {
    new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next-ph',
        prevEl: '.swiper-button-prev-ph',
      },
    });
  }, []);

  return (
    <div className="swiper mySwiper w-full h-full">
      {/* ... rest of your swiper slides and content ... */}
    </div>
  );
}

export default MySwiperComponent;
