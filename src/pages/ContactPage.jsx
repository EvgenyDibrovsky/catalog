import PageTitle from 'components/PageTitle';
import SubTitle from 'components/SubTitle';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm';
export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <PageTitle title={t('contacts')} />
      <SubTitle subTitle={t('sub-contacts')} />
      <ContactForm />
    </div>
  );
}
