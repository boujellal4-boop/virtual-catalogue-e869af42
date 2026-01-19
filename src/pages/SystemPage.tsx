import { useNavigate } from 'react-router-dom';
import { SystemSelection } from '@/components/catalogue/SystemSelection';
import { useCatalogue } from '@/context/CatalogueContext';
import { useEffect } from 'react';

const SystemPage = () => {
  const navigate = useNavigate();
  const { selectedBrand, setSelectedSystem, pushNavigation } = useCatalogue();

  // Redirect if no brand selected
  useEffect(() => {
    if (!selectedBrand) {
      navigate('/brand');
    }
  }, [selectedBrand, navigate]);

  const handleSelect = (systemId: string) => {
    setSelectedSystem(systemId);
    pushNavigation('/products');
    navigate('/products');
  };

  return <SystemSelection onSelect={handleSelect} />;
};

export default SystemPage;
