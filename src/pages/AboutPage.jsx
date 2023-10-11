import Titles from 'components/PageSettings/Titles'
import { useTranslation } from 'react-i18next'
import MetaTags from '../components/MetaTags/MetaTags'
import Section from '../components/PageSettings/Section'

const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <MetaTags
        metaTitle={t('pages.about.meta_title')}
        metaDescription={t('pages.about.meta_description')}
      />
      <Section>
        <div className="container h-[calc(100vh-20rem)]">
          <Titles
            title={t('pages.about.title')}
            subTitle={t('pages.about.sub_title')}
          />

          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            voluptate optio consequatur obcaecati, eum ipsam dolores tempore
            similique, voluptatum autem iusto quod? Dolor, necessitatibus
            corrupti. Nisi error numquam soluta sequi.
          </p>
          <p className="text-xl text-center text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quo maiores? Eveniet, fugit non ab corporis laudantium a nobis
            aspernatur qui, illum, cum officiis sunt debitis nihil fuga minima
            expedita.
          </p>
        </div>
      </Section>
    </>
  )
}
export default AboutPage
