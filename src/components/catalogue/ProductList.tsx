import { motion } from 'framer-motion';
import { Package, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
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

  if (!selectedBrand || !selectedSystem) {
    return null;
  }

  const brand = catalogueConfig.brands.find(b => b.id === selectedBrand);
  const system = brand?.systems.find(s => s.id === selectedSystem);
  const products = getProductsByBrandAndSystem(selectedBrand, selectedSystem);
  const subcategories = getSubcategories(selectedBrand, selectedSystem);

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
        <div className="mx-auto max-w-5xl">
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
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Productos
            </h1>
            <p className="text-muted-foreground">
              Estos son solo una parte de nuestros productos — muchos más están disponibles para tus necesidades.
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
          <div className="space-y-8">
            {Object.entries(groupedProducts).map(([category, categoryProducts], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4 pl-2 border-l-2 border-primary">
                  {category}
                </h2>
                <div className="space-y-3">
                  {categoryProducts.map((product, index) => (
                    <motion.button
                      key={product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                      onClick={() => onSelectProduct(product.id)}
                      className="group w-full flex items-center gap-4 rounded-xl bg-secondary/30 border border-white/5 p-4 text-left transition-all duration-300 hover:bg-secondary/50 hover:border-primary/20 hover:shadow-lg active:scale-[0.98]"
                    >
                      {/* Product image */}
                      <div className="flex-shrink-0 h-16 w-16 rounded-lg bg-secondary border border-white/10 flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="h-full w-full object-contain p-1" loading="lazy" decoding="async" width={64} height={64} />
                        ) : (
                          <Package className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>

                      {/* Product info */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {product.sku}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {product.description.slice(0, 80)}...
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-all">
                        <ArrowRight className="h-5 w-5" />
                      </div>
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
