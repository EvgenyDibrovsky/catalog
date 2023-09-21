import DevelopersSlider from 'components/Category/Developers/DevelopersSlider';
import { useParams } from 'react-router-dom';
import DeveloperGeneralItem from '../../../components/Category/Developers/DeveloperGeneralItem'; // Убедитесь, что путь верный

export default function DeveloperItem() {
  const { developerId } = useParams();

  return (
    <>
      <div className="mb-10">
        <DevelopersSlider />
      </div>
      <div className="my-5">
        <DeveloperGeneralItem developerId={developerId} />
      </div>
    </>
  );
}
