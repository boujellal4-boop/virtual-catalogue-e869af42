import { useNavigate } from 'react-router-dom';
import { BrandSelection } from '@/components/catalogue/BrandSelection';
import { useCatalogue } from '@/context/CatalogueContext';

const BrandPage = () => {
  const navigate = useNavigate();
  const { setSelectedBrand, pushNavigation } = useCatalogue();

  const handleSelect = (brandId: string) => {
    setSelectedBrand(brandId);
    pushNavigation('/system');
    navigate('/system');
  };

  return <BrandSelection onSelect={handleSelect} />;
};

export default BrandPage;
