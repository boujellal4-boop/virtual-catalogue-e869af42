import { useNavigate } from 'react-router-dom';
import { CatalogueCover } from '@/components/catalogue/CatalogueCover';

const Index = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/register');
  };

  return <CatalogueCover onStart={handleStart} />;
};

export default Index;
