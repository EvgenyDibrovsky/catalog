import { useParams } from 'react-router-dom';
import DevelopersSlider from 'components/Category/Developers/DevelopersSlider';
import DeveloperGeneralItem from '../../../components/Category/Developers/DeveloperGeneralItem';

export default function DevelopersItemPage() {
  const { companyId } = useParams();
  console.log('companyId:', companyId);

  return (
    <>
      <div className="mb-10">
        <DevelopersSlider />
      </div>
      <div className="container my-5">
        {/* Передача параметра компоненту */}
        <DeveloperGeneralItem companyId={companyId} />
      </div>
    </>
  );
}
