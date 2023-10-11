import MetaTags from '../components/MetaTags/MetaTags'
import Titles from 'components/PageSettings/Titles'
import { useTranslation } from 'react-i18next'
import Section from '../components/PageSettings/Section'

const OfferPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <MetaTags
        metaTitle={t('pages.offer.meta_title')}
        metaDescription={t('pages.offer.meta_description')}
      />
      <Section>
        <div className="container mt-10">
          <Titles
            title={t('pages.offer.title')}
            subTitle={t('pages.offer.sub_title')}
          />
        </div>
      </Section>
    </>
  )
}
export default OfferPage
