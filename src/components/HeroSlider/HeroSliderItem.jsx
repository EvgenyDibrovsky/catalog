import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function HeroSliderItem({ item }) {
  const { t } = useTranslation();

  return (
    <div className="swiper-slide bg-white dark:bg-black flex">
      <div className="relative flex w-full h-[30rem]">
        <div className=" container flex flex-col lg:flex-row">
          <div className="w-full lg:w-5/12 flex flex-col justify-between items-center py-16">
            <div className=" w-full lg:w-11/12">
              <h1 className="mb-10 text-left text-[2rem] leading-1 font-semibold">
                {item['title']}
              </h1>
              <p className="mb-10">{item['description']}</p>
            </div>
            <div className="flex items-center gap-4">
              {item.offer && (
                <Link
                  to={`/offer/${item.id}`}
                  className="border px-4 py-1 border-sky-600 dark:border-yellow-500 bg-sky-600 dark:bg-yellow-500 text-white dark:text-black"
                >
                  {t('hero_slider.btn_offer')}
                </Link>
              )}
              <a
                href={item['link_site']}
                target="_blank"
                className="border  px-4 py-1 border-sky-600 dark:border-yellow-500 text-black dark:text-white"
                rel="noreferrer"
              >
                {t('hero_slider.btn_site')}
              </a>
            </div>
          </div>
          <div className=" w-full h-full lg:w-6/12 absolute right-0 top-0 bottom-0 overflow-hidden">
            {item.logo && (
              <img
                src={process.env.PUBLIC_URL + item.logo}
                alt={item['title']}
                className="absolute w-28 h-auto top-5  left-0 z-10 shadow-xl"
              />
            )}
            <img
              src={process.env.PUBLIC_URL + item.banner}
              alt={item['title']}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
