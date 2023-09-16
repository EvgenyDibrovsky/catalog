import Titles from 'components/PageSettings/Titles';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import MetaTags from '../components/MetaTags/MetaTags';

export default function ContactPage({ title, subTitle }) {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags
        metaTitle={t('pages.contacts.meta_title')}
        metaDescription={t('pages.contacts.meta_description')}
      />
      <div className="container mx-auto">
        <Titles
          title={t('pages.contacts.title')}
          subTitle={t('pages.contacts.sub_title')}
        />
        <ContactForm />
      </div>
    </>
  );
}
