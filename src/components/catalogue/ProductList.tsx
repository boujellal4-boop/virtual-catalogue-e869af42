import { motion } from 'framer-motion';
import { Package, ArrowRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCatalogue } from '@/context/CatalogueContext';
import { catalogueConfig } from '@/config/catalogue.config';
import { getProductsByBrandAndSystem, getSubcategories, Product } from '@/data/products';
import { Input } from '@/components/ui/input';

interface ProductListProps {
  onSelectProduct: (productId: string) => void;
}

export function ProductList({ onSelectProduct }: ProductListProps) {
  const { selectedBrand, selectedSystem } = useCatalogue();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const brand = selectedBrand ? catalogueConfig.brands.find(b => b.id === selectedBrand) : undefined;
  const system = brand?.systems.find(s => s.id === selectedSystem);
  const products = selectedBrand && selectedSystem ? getProductsByBrandAndSystem(selectedBrand, selectedSystem) : [];
  const subcategories = selectedBrand && selectedSystem ? getSubcategories(selectedBrand, selectedSystem) : [];

  // Preload all product thumbnails for instant display
  useEffect(() => {
    products.forEach(p => {
      if (p.image) {
        const img = new window.Image();
        img.src = p.image;
      }
    });
  }, [selectedBrand, selectedSystem]);

  if (!selectedBrand || !selectedSystem) {
    return null;
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.subcategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.subcategory]) {
      acc[product.subcategory] = [];
    }
    acc[product.subcategory].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/20" />

      <div className="relative min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {brand?.name}
              </span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium text-muted-foreground">
                {system?.name}
              </span>
            </div>
            <h1 className="text-4xl 2xl:text-5xl font-bold text-foreground mb-4">
              Productos
            </h1>
            <p className="text-muted-foreground 2xl:text-lg">
              tenemos muchos más a tu disposición para cubrir todas tus necesidades. Puedes consultarlos en nuestra web www.firesecurityproducts.com
            </p>
          </motion.div>

          {/* Search and filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-secondary/50 border-white/10 text-foreground"
              />
            </div>

            {/* Category filters */}
            {subcategories.length > 1 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !selectedCategory
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  Todos
                </button>
                {subcategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Products list */}
          <div className="space-y-2">
            {Object.entries(groupedProducts).map(([category, categoryProducts], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="mb-6"
              >
                <h2 className="text-xl 2xl:text-2xl font-semibold text-foreground mb-3 pl-3 border-l-2 border-primary">
                  {category}
                </h2>
                <div className="space-y-2">
                  {categoryProducts.map((product, index) => (
                    <motion.button
                      key={product.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.03 }}
                      whileHover={{ x: 4 }}
                      onClick={() => onSelectProduct(product.id)}
                      className="group w-full rounded-xl bg-secondary/30 border border-white/5 px-4 py-3 2xl:px-6 2xl:py-4 text-left transition-all duration-300 hover:bg-secondary/50 hover:border-primary/20 hover:shadow-lg active:scale-[0.99] flex items-center gap-4"
                    >
                      {/* Product image */}
                      <div className="w-14 h-14 2xl:w-20 2xl:h-20 flex-shrink-0 rounded-lg bg-secondary border border-white/10 flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain p-1.5"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <Package className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>

                      {/* Product info */}
                      <div className="flex-grow min-w-0 flex flex-col gap-0.5">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded self-start">
                          {product.sku}
                        </span>
                        <h3 className="font-semibold text-base 2xl:text-lg text-foreground group-hover:text-primary transition-colors truncate">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {product.description.split('. ')[0]}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No se encontraron productos que coincidan con tu búsqueda</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
