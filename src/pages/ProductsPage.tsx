import { useNavigate } from 'react-router-dom';
import { ProductList } from '@/components/catalogue/ProductList';
import { useCatalogue } from '@/context/CatalogueContext';
import { useEffect } from 'react';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { selectedBrand, selectedSystem, setSelectedProduct, pushNavigation } = useCatalogue();

  // Redirect if no brand/system selected
  useEffect(() => {
    if (!selectedBrand) {
      navigate('/brand');
    } else if (!selectedSystem) {
      navigate('/system');
    }
  }, [selectedBrand, selectedSystem, navigate]);

  const handleSelectProduct = (productId: string) => {
    setSelectedProduct(productId);
    pushNavigation('/product');
    navigate('/product');
  };

  return <ProductList onSelectProduct={handleSelectProduct} />;
};

export default ProductsPage;
