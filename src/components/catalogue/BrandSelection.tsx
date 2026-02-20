import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { catalogueConfig } from '@/config/catalogue.config';
import { useCatalogue } from '@/context/CatalogueContext';
import { useLanguage } from '@/context/LanguageContext';

interface BrandSelectionProps {
  onSelect: (brandId: string) => void;
}

const brandColors: Record<string, string> = {
  'kidde-commercial': 'from-brand-kidde/20 to-brand-kidde/10 border-brand-kidde/30 hover:border-brand-kidde/50',
  'airsense': 'from-brand-airsense/20 to-brand-airsense/10 border-brand-airsense/30 hover:border-brand-airsense/50',
  'ems': 'from-brand-ems/20 to-brand-ems/10 border-brand-ems/30 hover:border-brand-ems/50',
  'edwards': 'from-brand-edwards/20 to-brand-edwards/10 border-brand-edwards/30 hover:border-brand-edwards/50',
};

const brandTextColors: Record<string, string> = {
  'kidde-commercial': 'text-brand-kidde',
  'airsense': 'text-brand-airsense',
  'ems': 'text-brand-ems',
  'edwards': 'text-brand-edwards',
};

const brandWhiteLogos: Record<string, string> = {
  'kidde-commercial': '/brands/kidde-white.png',
  'airsense': '/brands/airsense-white.png',
  'ems': '/brands/ems-white.png',
  'edwards': '/brands/edwards-white.png',
};

export function BrandSelection({ onSelect }: BrandSelectionProps) {
  const { userInfo } = useCatalogue();
  const { t, tBrandDesc } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {userInfo && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary text-sm font-medium uppercase tracking-wider mb-4"
              >
                {t('brand.welcomeUser')}, {userInfo.fullName.split(' ')[0]}
              </motion.p>
            )}
            <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold text-foreground mb-4 2xl:mb-6">
              {t('brand.title')}
            </h1>
            <p className="text-muted-foreground text-lg 2xl:text-xl max-w-xl 2xl:max-w-2xl mx-auto">
              {t('brand.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8">
            {catalogueConfig.brands.map((brand, index) => {
              const colorClass = brandColors[brand.id] || 'from-primary/20 to-accent/10 border-primary/30';
              const textColor = brandTextColors[brand.id] || 'text-primary';
              const description = tBrandDesc(brand.id);

              return (
                <motion.button
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelect(brand.id)}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClass} border p-8 2xl:p-12 text-left transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <div className="mb-6 h-16 2xl:h-24 flex items-center">
                      <img 
                        src={brandWhiteLogos[brand.id] || brand.logo} 
                        alt={brand.name}
                        className="h-full w-auto max-w-[180px] 2xl:max-w-[260px] object-contain"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        width={180}
                        height={64}
                      />
                    </div>

                    <h3 className="text-2xl 2xl:text-3xl font-bold text-foreground mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-muted-foreground 2xl:text-lg mb-6">
                      {description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {brand.systems.length} {brand.systems.length > 1 ? t('brand.systemsAvailable') : t('brand.systemAvailable')}
                      </span>
                      <div className={`flex items-center gap-2 ${textColor} transition-transform group-hover:translate-x-1`}>
                        <span className="text-sm font-medium">{t('brand.explore')}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
