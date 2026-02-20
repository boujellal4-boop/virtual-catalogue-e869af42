import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { catalogueConfig } from '@/config/catalogue.config';
import { useLanguage } from '@/context/LanguageContext';
import { Language, languageNames, languageFlags } from '@/i18n/translations';

interface CatalogueCoverProps {
  onStart: () => void;
}

export function CatalogueCover({ onStart }: CatalogueCoverProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/20" />
      
      {/* Animated particles/glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-radial from-accent/15 via-accent/5 to-transparent blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 right-6 flex items-center gap-2"
        >
          <Globe className="h-4 w-4 text-muted-foreground" />
          <div className="flex rounded-full bg-secondary/60 backdrop-blur-xl border border-white/10 p-1">
            {(Object.keys(languageNames) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === lang
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{languageFlags[lang]}</span>
                <span className="hidden sm:inline">{languageNames[lang]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={catalogueConfig.company.logo} 
            alt={catalogueConfig.company.name}
            className="h-24 sm:h-32 md:h-40 2xl:h-56 w-auto object-contain"
          />
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-tight text-foreground mb-4 2xl:mb-8 glow-text">
            {t('cover.title')}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-primary font-medium mb-4 2xl:mb-6">
            {catalogueConfig.cover.subtitle}
          </p>
          <p className="text-muted-foreground text-lg 2xl:text-2xl max-w-md 2xl:max-w-2xl mx-auto">
            {t('cover.tagline')}
          </p>
        </motion.div>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={onStart}
            className="group animate-pulse-glow"
          >
            <span>{t('cover.start')}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
