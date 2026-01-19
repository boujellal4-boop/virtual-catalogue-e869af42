import { motion } from 'framer-motion';
import { ArrowRight, CircuitBoard, Layers, Wifi, Shield, Volume2, Wind, Radio, Cpu } from 'lucide-react';
import { catalogueConfig } from '@/config/catalogue.config';
import { useCatalogue } from '@/context/CatalogueContext';

interface SystemSelectionProps {
  onSelect: (systemId: string) => void;
}

const systemIcons: Record<string, React.ElementType> = {
  'addressable': CircuitBoard,
  'conventional': Layers,
  'wireless': Wifi,
  'specialty': Shield,
  'pava': Volume2,
  'asd': Wind,
  'hybrid-wireless': Radio,
  'full-wireless': Wifi,
  'high-end-addressable': Cpu,
};

export function SystemSelection({ onSelect }: SystemSelectionProps) {
  const { selectedBrand } = useCatalogue();
  
  const brand = catalogueConfig.brands.find(b => b.id === selectedBrand);
  
  if (!brand) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl"
      />

      <div className="relative min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-6"
            >
              <span className="text-sm font-medium text-primary">{brand.name}</span>
            </motion.div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Select Detection System
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Choose the type of fire detection system that best suits your requirements.
            </p>
          </motion.div>

          {/* Systems grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brand.systems.map((system, index) => {
              const Icon = systemIcons[system.id] || CircuitBoard;

              return (
                <motion.button
                  key={system.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelect(system.id)}
                  className="group relative overflow-hidden rounded-xl bg-secondary/50 border border-white/10 p-6 text-left transition-all duration-300 hover:bg-secondary hover:border-primary/30 hover:shadow-xl"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  </div>

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {system.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Browse available products
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 self-center text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
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
