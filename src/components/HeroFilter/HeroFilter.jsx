import { useTranslation } from 'react-i18next';

export default function HeroFilter() {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative py-20 h-auto bg-hero-filter bg-cover bg-bottom bg-no-repeat bg-fixed">
        <div className="absolute top-0 left-0 w-full h-full bg-bgDark"></div>
        <div className="relative container">
          <h1 className=" text-white text-center mb-10">
            {t('pages.home.title')}
          </h1>
          <form>
            <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <select className="py-1 px-4 w-full">
                <option>Select</option>
              </select>
              <select className="py-1 px-4 w-full">
                <option>Select</option>
              </select>
              <select className="py-1 px-4 w-full">
                <option>Select</option>
              </select>
              <div>
                <button className="w-full py-1 px-4 bg-sky-600 text-white">
                  Search
                </button>
              </div>
            </div>
            <div className="grid  grid-cols-1  sm:grid-cols-2  lg:grid-cols-4  gap-4">
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 1
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 2
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 3
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 4
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 5
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 6
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 7
              </label>
              <label htmlFor="#" className="flex items-center gap-4 text-white">
                <input type="checkbox" />
                Checkbox 8
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
