import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Menu, X, Home, Package, Building2, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCatalogue } from '@/context/CatalogueContext';
import { useLanguage } from '@/context/LanguageContext';

export function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { resetCatalogue, selectedBrand, setSelectedBrand, setSelectedSystem } = useCatalogue();
  const { t } = useLanguage();

  const isHome = location.pathname === '/';
  const showNav = location.pathname !== '/';

  const handleBack = () => {
    if (location.pathname === '/product') {
      navigate('/products');
    } else if (location.pathname === '/products') {
      navigate('/system');
    } else if (location.pathname === '/system') {
      navigate('/brand');
    } else if (location.pathname === '/brand') {
      navigate('/register');
    } else {
      navigate(-1);
    }
  };

  const handleGoHome = () => {
    resetCatalogue();
    navigate('/');
    setMenuOpen(false);
  };

  const handleGoToBrands = () => {
    setSelectedBrand(null);
    setSelectedSystem(null);
    navigate('/brand');
    setMenuOpen(false);
  };

  const menuItems = [
    { icon: Home, label: t('nav.goHome'), action: handleGoHome },
    { icon: Building2, label: t('nav.selectBrand'), action: handleGoToBrands },
  ];

  if (!showNav) return null;

  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 backdrop-blur-xl border border-white/10 text-foreground transition-all hover:bg-secondary hover:scale-105"
        onClick={handleBack}
      >
        <ArrowLeft className="h-5 w-5" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 backdrop-blur-xl border border-white/10 text-foreground transition-all hover:bg-secondary hover:scale-105"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-40 h-full w-80 bg-card/95 backdrop-blur-xl border-l border-white/10 p-8 pt-24"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                {t('nav.navigation')}
              </h3>
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={item.action}
                    className="flex w-full items-center gap-4 rounded-lg p-4 text-foreground transition-all hover:bg-secondary"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              {selectedBrand && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-muted-foreground mb-2">{t('nav.currentBrand')}</p>
                  <p className="text-foreground font-medium capitalize">
                    {selectedBrand.replace('-', ' ')}
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
