import { useNavigate } from 'react-router-dom';
import { UserInfoForm } from '@/components/catalogue/UserInfoForm';
import { useCatalogue } from '@/context/CatalogueContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { pushNavigation } = useCatalogue();

  const handleSubmit = () => {
    pushNavigation('/brand');
    navigate('/brand');
  };

  return <UserInfoForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
