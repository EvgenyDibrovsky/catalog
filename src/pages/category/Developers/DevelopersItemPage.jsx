import DevelopersSlider from 'components/Category/Developers/DevelopersSlider';
import DeveloperGeneralItem from '../../../components/Category/Developers/DeveloperGeneralItem';

export default function DevelopersItemPage() {
  return (
    <>
      <div className="mb-10">
        <DevelopersSlider />
      </div>
      <div className="container my-5">
        <DeveloperGeneralItem />
      </div>
    </>
  );
}
