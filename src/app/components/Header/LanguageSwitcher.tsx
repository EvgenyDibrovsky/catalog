import { useRouter } from 'next/router';

function LanguageSwitcher() {
  const router = useRouter();
  
  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('uk')}>Українська</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
      <button onClick={() => changeLanguage('pl')}>Polski</button>
    </>
  );
}
