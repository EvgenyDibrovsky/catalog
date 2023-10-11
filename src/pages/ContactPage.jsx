import Titles from 'components/PageSettings/Titles'
import { useTranslation } from 'react-i18next'
import ContactForm from 'components/ContactForm/ContactForm'
import MetaTags from '../components/MetaTags/MetaTags'
import Section from '../components/PageSettings/Section'

const ContactPage = ({ title, subTitle }) => {
  const { t } = useTranslation()
  return (
    <>
      <MetaTags
        metaTitle={t('pages.contacts.meta_title')}
        metaDescription={t('pages.contacts.meta_description')}
      />
      <Section>
        <div className="container">
          <Titles
            title={t('pages.contacts.title')}
            subTitle={t('pages.contacts.sub_title')}
          />
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
export default ContactPage
