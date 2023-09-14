import CardsList from '../components/CardsList';
import CountryRegionSelector from '../components/CountryRegionSelector';
import { useState } from 'react';

export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <div>
      <CountryRegionSelector
        onCountryChange={setSelectedCountry}
        onRegionChange={setSelectedRegion}
      />
      <CardsList country={selectedCountry} region={selectedRegion} />
    </div>
  );
}
