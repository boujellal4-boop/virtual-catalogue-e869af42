import { motion } from 'framer-motion';
import { Package, Play, QrCode, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCatalogue } from '@/context/CatalogueContext';

interface ProductDetailProps {
  onSelectProduct: (productId: string) => void;
}

export function ProductDetail({ onSelectProduct }: ProductDetailProps) {
  const { selectedProduct } = useCatalogue();
  const [showVideo, setShowVideo] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const product = selectedProduct ? getProductById(selectedProduct) : null;
  const relatedProducts = selectedProduct ? getRelatedProducts(selectedProduct) : [];

  if (!product) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      <div className="relative min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Product header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Product image/video area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-square rounded-2xl bg-secondary/50 border border-white/10 overflow-hidden"
              >
                {showVideo && product.videoUrl ? (
                  <iframe
                    src={product.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="h-32 w-32 text-muted-foreground/30" />
                  </div>
                )}

                {/* Video toggle */}
                {product.videoUrl && !showVideo && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-background/50 hover:bg-background/30 transition-colors group"
                  >
                    <div className="h-20 w-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </button>
                )}
              </motion.div>

              {/* Product info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.sku}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {product.videoUrl && (
                    <Button
                      variant="secondary"
                      onClick={() => setShowVideo(!showVideo)}
                      className="gap-2"
                    >
                      <Play className="h-4 w-4" />
                      {showVideo ? 'Hide Video' : 'Watch Video'}
                    </Button>
                  )}
                  {product.vrQrCode && (
                    <Button
                      variant="outline"
                      onClick={() => setShowQR(!showQR)}
                      className="gap-2"
                    >
                      <QrCode className="h-4 w-4" />
                      VR Experience
                    </Button>
                  )}
                </div>

                {/* QR Code modal */}
                {showQR && product.vrQrCode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 rounded-xl bg-foreground text-center"
                  >
                    <p className="text-background text-sm mb-4">
                      Scan this QR code for a virtual reality experience
                    </p>
                    <div className="w-40 h-40 mx-auto bg-muted rounded-lg flex items-center justify-center">
                      <QrCode className="h-24 w-24 text-muted-foreground" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Features and Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl bg-secondary/30 border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Main Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl bg-secondary/30 border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Specifications
              </h2>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-muted-foreground">{key}</span>
                    <span className="text-foreground font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Similar Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.button
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    onClick={() => onSelectProduct(relatedProduct.id)}
                    className="group rounded-xl bg-secondary/30 border border-white/10 p-4 text-left transition-all hover:bg-secondary/50 hover:border-primary/30"
                  >
                    <div className="h-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center">
                      <Package className="h-10 w-10 text-muted-foreground/30" />
                    </div>
                    <span className="text-xs font-mono text-primary">{relatedProduct.sku}</span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                      {relatedProduct.name}
                    </h3>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
