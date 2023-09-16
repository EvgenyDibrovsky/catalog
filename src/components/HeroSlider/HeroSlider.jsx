import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import slide1 from '../../images/hero_slider/slide-1.jpg';

export default function HeroSlider() {
  return (
    <div class="swiper mySwiper w-full h-full">
      <div class="swiper-wrapper">
        <div class="swiper-slide bg-white dark:bg-black flex">
          <div class="relative flex w-full h-[30rem]">
            <div class="container flex flex-col lg:flex-row">
              <div class="w-full lg:w-5/12 flex items-center">
                <div class="w-full lg:w-11/12">
                  <h1 class="mb-11 text-left text-[2rem] leading-2 font-semibold">
                    Nowoczesna aranżacja Twojego ogrodu
                  </h1>
                  <p>
                    Marka GiardDesign to wieloletnie doświadczenie i wysoka
                    estetyka realizacji. Oferujemy kompleksowy zakres usług z
                    indywidualnym podejściem do każdego projektu.
                  </p>
                </div>
              </div>
              <div class="w-full h-full lg:w-6/12 absolute right-0 top-0 bottom-0 overflow-hidden">
                <img
                  src={slide1}
                  alt="slide-1"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
            <div class="hidden z-20 absolute bottom-0 right-0 lg:flex items-center justify-center bg-white">
              <button type="button" class="swiper-button-prev-ph p-4 group  ">
                <BsChevronLeft className="w-6 h-6  duration-200 transform translate-x-0 group-hover:-translate-x-1" />
              </button>
              <button type="button" class="swiper-button-next-ph p-4 group  ">
                <BsChevronRight className="w-6 h-6 fill-black duration-200 transform translate-x-0 group-hover:translate-x-1 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
