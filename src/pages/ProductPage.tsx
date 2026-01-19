import { useNavigate } from 'react-router-dom';
import { ProductDetail } from '@/components/catalogue/ProductDetail';
import { useCatalogue } from '@/context/CatalogueContext';
import { useEffect } from 'react';

const ProductPage = () => {
  const navigate = useNavigate();
  const { selectedBrand, selectedSystem, selectedProduct, setSelectedProduct } = useCatalogue();

  // Redirect if no product selected
  useEffect(() => {
    if (!selectedBrand) {
      navigate('/brand');
    } else if (!selectedSystem) {
      navigate('/system');
    } else if (!selectedProduct) {
      navigate('/products');
    }
  }, [selectedBrand, selectedSystem, selectedProduct, navigate]);

  const handleSelectProduct = (productId: string) => {
    setSelectedProduct(productId);
    // Stay on same page with new product
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <ProductDetail onSelectProduct={handleSelectProduct} />;
};

export default ProductPage;
