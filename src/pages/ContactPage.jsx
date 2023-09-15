import PageTitle from 'components/PageSettings/PageTitle';
import SubTitle from 'components/PageSettings/SubTitle';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import MetaTags from '../components/MetaTags/MetaTags';

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags
        metaTitle={t('pages.contacts.meta_title')}
        metaDescription={t('pages.contacts.meta_description')}
      />
      <div className="container mx-auto">
        <PageTitle title={t('pages.contacts.title')} />
        <SubTitle subTitle={t('pages.contacts.sub_title')} />
        <ContactForm />
      </div>
    </>
  );
}
