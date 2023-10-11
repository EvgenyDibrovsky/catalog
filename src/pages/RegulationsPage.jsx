import Titles from 'components/PageSettings/Titles'
import { useTranslation } from 'react-i18next'
import MetaTags from '../components/MetaTags/MetaTags'
import Section from '../components/PageSettings/Section'

const TermsUsePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <MetaTags
        metaTitle={t('pages.regulations.meta_title')}
        metaDescription={t('pages.regulations.meta_description')}
      />
      <Section>
        <div className="container content-text">
          <Titles
            title={t('pages.regulations.title')}
            subTitle={t('pages.regulations.sub_title')}
          />
          <p className="text-xl text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quo maiores? Eveniet, fugit non ab corporis laudantium a nobis
            aspernatur qui, illum, cum officiis sunt debitis nihil fuga minima
            expedita.
          </p>
          <p className="text-xl text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quo maiores? Eveniet, fugit non ab corporis laudantium a nobis
            aspernatur qui, illum, cum officiis sunt debitis nihil fuga minima
            expedita.
          </p>
          <p className="text-xl text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quo maiores? Eveniet, fugit non ab corporis laudantium a nobis
            aspernatur qui, illum, cum officiis sunt debitis nihil fuga minima
            expedita.
          </p>
          <p className="text-xl text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quo maiores? Eveniet, fugit non ab corporis laudantium a nobis
            aspernatur qui, illum, cum officiis sunt debitis nihil fuga minima
            expedita.
          </p>
          <p className="text-xl text-black dark:text-white">
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

export default TermsUsePage
