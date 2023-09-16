import { BsTelegram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function SocialBtn() {
  const { t } = useTranslation();

  return (
    <>
      <ul className="list-none flex flex-wrap justify-end gap-2 mb-4 ">
        <li className="cursor-pointer inline-flex justify-center items-center w-10 h-10 text-sky-600 focus:outline-none duration-200 text-[1.5rem] hover:scale-95 ">
          <a
            href="https://#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('social-links.telegram')}
          >
            <BsTelegram />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-10 h-10 text-blue-900 focus:outline-none duration-200 text-[1.5rem] hover:scale-95 ">
          <a
            href="https://#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('social-links.facebook')}
          >
            <BsFacebook />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-10 h-10 text-sky-700 focus:outline-none duration-200 text-[1.5rem] hover:scale-95 ">
          <a
            href="https://#"
            target="blank"
            aria-label={t('social-links.linkedin')}
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </>
  );
}
