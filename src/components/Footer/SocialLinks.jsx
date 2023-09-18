import { BsTelegram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function SocialBtn() {
  const { t } = useTranslation();

  return (
    <>
      <ul className="list-none flex flex-wrap  justify-center lg:justify-end gap-2 mb-4 ">
        <li className="cursor-pointer inline-flex justify-center items-center p-1 rounded-sm bg-iconBg dark:bg-iconBgDark text-sky-600 focus:outline-none  text-[1.5rem] group">
          <a href="https://#" target="_blank" rel="noopener noreferrer" aria-label={t('social-links.telegram')}>
            <BsTelegram className="w-4 h-4 duration-200 group-hover:scale-95" />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center p-1 rounded-sm bg-iconBg dark:bg-iconBgDark text-blue-900 focus:outline-none text-[1.5rem] group">
          <a href="https://#" target="_blank" rel="noopener noreferrer" aria-label={t('social-links.facebook')}>
            <BsFacebook className="w-4 h-4 duration-200 group-hover:scale-95" />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center p-1 rounded-sm bg-iconBg dark:bg-iconBgDark text-sky-700 focus:outline-none text-[1.5rem] group">
          <a href="https://#" target="blank" aria-label={t('social-links.linkedin')}>
            <BsLinkedin className="w-4 h-4 duration-200 group-hover:scale-95" />
          </a>
        </li>
      </ul>
    </>
  );
}
