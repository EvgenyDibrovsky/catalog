import { useTranslation } from 'react-i18next';
import LoginAdmin from '../../components/Admin/LoginAdmin';

export default function AuthAdminPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:min-h-[30rem]">
        <div className="hidden relative lg:flex w-6/12 bg-admin-login bg-cover bg-no-repeat items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-bgDark"></div>
          <h1 className="relative w-6/12 text-[2rem] font-semibold text-center text-white">{t('admin.page.title')}</h1>
        </div>
        <div className="w-full py-20 lg:w-6/12 flex flex-col items-center justify-center bg-gradient-to-r from-sky-200 via-white to-sky-100 dark:from-yellow-200  dark:via-white  dark:to-yellow-100 ">
          <LoginAdmin />
        </div>
      </div>
    </>
  );
}
