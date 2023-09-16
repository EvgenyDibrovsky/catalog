import MetaTags from '../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';
// import Swiper from '../components/Swiper/Swiper';
import HeroSlider from '../components/HeroSlider/HeroSlider';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <MetaTags
        metaTitle={t('pages.home.meta_title')}
        metaDescription={t('pages.home.meta_description')}
      />
      <HeroSlider />
      <div className="container mt-10">
        <Titles
          title={t('pages.home.title')}
          subTitle={t('pages.home.sub_title')}
        />
      </div>
    </div>
  );
}
