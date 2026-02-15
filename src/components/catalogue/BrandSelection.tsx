import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { catalogueConfig } from '@/config/catalogue.config';
import { useCatalogue } from '@/context/CatalogueContext';

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

export function BrandSelection({ onSelect }: BrandSelectionProps) {
  const { userInfo } = useCatalogue();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/20" />
      
      <div className="relative min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl">
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
                Welcome, {userInfo.fullName.split(' ')[0]}
              </motion.p>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Select Your Brand
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Choose the brand you'd like to explore. Each offers unique solutions for your fire detection needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogueConfig.brands.map((brand, index) => {
              const colorClass = brandColors[brand.id] || 'from-primary/20 to-accent/10 border-primary/30';
              const textColor = brandTextColors[brand.id] || 'text-primary';

              return (
                <motion.button
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelect(brand.id)}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClass} border p-8 text-left transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    {/* Brand Logo */}
                    <div className="mb-6 h-16 flex items-center">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="h-full w-auto max-w-[180px] object-contain"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {brand.description}
                    </p>

                    {/* Systems count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {brand.systems.length} system{brand.systems.length > 1 ? 's' : ''} available
                      </span>
                      <div className={`flex items-center gap-2 ${textColor} transition-transform group-hover:translate-x-1`}>
                        <span className="text-sm font-medium">Explore</span>
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
