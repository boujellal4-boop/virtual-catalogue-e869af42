import { motion, AnimatePresence } from 'framer-motion';
import { Package, Play, QrCode, Image, Check, ChevronLeft, ChevronRight, Zap, Shield, Wifi, Settings, Bell, Radio, Thermometer, Cable, Lock, Gauge, Volume2, Eye, Battery, Server, MapPin, Timer, Wrench, Award, AlertTriangle, Layers, Signal, MonitorSpeaker, type LucideIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCatalogue } from '@/context/CatalogueContext';
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';

// Highlight certifications and wrap SKU-like codes so they never break across lines
function formatText(text: string): React.ReactNode[] {
  const certPattern = /\b(UL|ULC|FM|CE|EN\s?54[-\d]*|EN|LPCB|CPD|SIL|NFPA|ISO\s?\d+|CSFM|MEA|ATEX|IECEx|AS\s?\d+|NF|VdS|BSI|CNPP|CCC|GOST)\b/i;
  const skuPattern = /(\b\d+[A-Z]+-[A-Z0-9-]+\b|\b[A-Z]{2,}-[A-Z0-9-]+\b|\b[A-Z]+\d+[A-Z]*\b)/;
  const combined = new RegExp(`${certPattern.source}|${skuPattern.source}`, 'gi');

  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = combined.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      result.push(<span key={`t${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
    }
    const matched = match[0];
    const isCert = certPattern.test(matched);
    certPattern.lastIndex = 0;
    if (isCert) {
      const displayText = /^EN$/i.test(matched) ? 'EN54' : matched;
      result.push(<span key={`m${match.index}`} className="whitespace-nowrap font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">{displayText}</span>);
    } else {
      result.push(<span key={`m${match.index}`} className="whitespace-nowrap">{matched}</span>);
    }
    lastIndex = combined.lastIndex;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    result.push(<span key={`t${lastIndex}`}>{text.slice(lastIndex)}</span>);
  }
  return result;
}

// Extract a concise label from a detailed feature string
function extractQuickLabel(feature: string): string {
  // Remove parenthetical details
  let label = feature.replace(/\s*\(.*?\)/g, '');
  // Take text before "for", "ensures", "offers", "takes", "means", "when", "where"
  const cutWords = /\s+(for |ensures |offers |takes |means |when |where |that )/i;
  const cutMatch = label.match(cutWords);
  if (cutMatch && cutMatch.index && cutMatch.index > 10) {
    label = label.substring(0, cutMatch.index);
  }
  // Trim to max ~60 chars at word boundary
  if (label.length > 60) {
    label = label.substring(0, 57).replace(/\s+\S*$/, '') + '…';
  }
  return label.trim();
}

// Maps keywords in feature text to meaningful icons
function getFeatureIcon(feature: string): LucideIcon {
  return Check;
}

interface ProductDetailProps {
  onSelectProduct: (productId: string) => void;
}

export function ProductDetail({ onSelectProduct }: ProductDetailProps) {
  const { selectedProduct } = useCatalogue();
  const { t } = useLanguage();
  const [mediaMode, setMediaMode] = useState<'picture' | 'video' | 'qr'>('picture');
  const [pictureIndex, setPictureIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => { setPictureIndex(0); }, [selectedProduct]);

  // Preload product images for faster display
  useEffect(() => {
    if (!selectedProduct) return;
    const prod = getProductById(selectedProduct);
    if (!prod) return;
    const images = prod.pictures?.length ? prod.pictures : (prod.image ? [prod.image] : []);
    images.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, [selectedProduct]);

  const product = selectedProduct ? getProductById(selectedProduct) : null;
  const relatedProducts = selectedProduct ? getRelatedProducts(selectedProduct) : [];

  if (!product) {
    return null;
  }

  const hasVideo = !!product.videoUrl;
  const hasQR = !!product.vrQrCode;
  const hasMedia = hasVideo || hasQR;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/20" />

      <div className="relative min-h-screen px-6 py-20">
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl">
          {/* Product header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Product image + Video/VR side by side */}
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl bg-secondary/50 border border-white/10 overflow-hidden"
                >
                  {/* Toggle buttons */}
                  <div className="flex border-b border-white/10">
                    <button
                      onClick={() => setMediaMode('picture')}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium transition-colors ${
                        mediaMode === 'picture'
                          ? 'bg-primary/10 text-primary border-b-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Image className="h-4 w-4" />
                      {t('product.image')}
                    </button>
                    <button
                      onClick={() => setMediaMode('video')}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium transition-colors ${
                        mediaMode === 'video'
                          ? 'bg-primary/10 text-primary border-b-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Play className="h-4 w-4" />
                      {t('product.video')}
                    </button>
                    <button
                      onClick={() => setMediaMode('qr')}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium transition-colors ${
                        mediaMode === 'qr'
                          ? 'bg-primary/10 text-primary border-b-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <QrCode className="h-4 w-4" />
                      {t('product.vrQr')}
                    </button>
                  </div>

                  {/* Content area */}
                  <div className="relative aspect-square flex items-center justify-center">
                    {mediaMode === 'picture' && (
                      (() => {
                        const pictures = product.pictures?.length
                          ? [...new Set(product.pictures)]
                          : (product.image ? [product.image] : []);
                        if (pictures.length === 0) {
                          return <Package className="h-32 w-32 text-muted-foreground/30" />;
                        }
                        const safeIndex = pictureIndex % pictures.length;
                        return (
                          <div
                            className="relative w-full h-full touch-pan-y"
                            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                            onTouchEnd={(e) => {
                              if (touchStart === null) return;
                              const diff = e.changedTouches[0].clientX - touchStart;
                              if (Math.abs(diff) > 50) {
                                if (diff < 0) setPictureIndex((safeIndex + 1) % pictures.length);
                                else setPictureIndex((safeIndex - 1 + pictures.length) % pictures.length);
                              }
                              setTouchStart(null);
                            }}
                          >
                            <img
                              key={safeIndex}
                              src={pictures[safeIndex]}
                              alt={product.name}
                              width={400}
                              height={400}
                              fetchPriority="high"
                              decoding="async"
                              className="absolute inset-0 w-full h-full object-contain p-6 animate-fade-in select-none"
                              draggable={false}
                            />
                            {pictures.length > 1 && (
                              <>
                                <button
                                  onClick={() => setPictureIndex((safeIndex - 1 + pictures.length) % pictures.length)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 border border-white/10 flex items-center justify-center hover:bg-background active:scale-95 transition-all"
                                >
                                  <ChevronLeft className="h-5 w-5 text-foreground" />
                                </button>
                                <button
                                  onClick={() => setPictureIndex((safeIndex + 1) % pictures.length)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 border border-white/10 flex items-center justify-center hover:bg-background active:scale-95 transition-all"
                                >
                                  <ChevronRight className="h-4 w-4 text-foreground" />
                                </button>
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                  {pictures.map((_, i) => (
                                    <button
                                      key={i}
                                      onClick={() => setPictureIndex(i)}
                                      className={`h-2 w-2 rounded-full transition-colors ${i === safeIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })()
                    )}
                    {mediaMode === 'video' && (
                      hasVideo ? (
                        <div className="absolute inset-4">
                          <div className="relative w-full h-full rounded-lg overflow-hidden bg-background/50">
                            <iframe
                              src={product.videoUrl}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-center">
                          <Play className="h-16 w-16 text-muted-foreground/30 mb-2" />
                          <p className="text-muted-foreground text-sm">{t('product.videoSoon')}</p>
                        </div>
                      )
                    )}
                    {mediaMode === 'qr' && (
                      hasQR ? (
                        <div className="flex flex-col items-center justify-center gap-2 p-4 w-full h-full">
                          <p className="text-muted-foreground text-sm text-center">
                            {t('product.scanVr')}
                          </p>
                          <img
                            src={product.vrQrCode}
                            alt="VR QR Code"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-center">
                          <QrCode className="h-16 w-16 text-muted-foreground/30 mb-2" />
                          <p className="text-muted-foreground text-sm">{t('product.qrSoon')}</p>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Product info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="font-mono text-base text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.sku}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-xl 2xl:text-2xl leading-relaxed">
                  {formatText(product.description.split(/\.\s+/).slice(0, 2).join('. ').replace(/\.?$/, '.'))}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Features & Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Quick Features with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl bg-secondary/30 border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4 uppercase">
                {t('product.mainFeatures')}
              </h2>
              <ul className="space-y-3">
                {(() => {
                  const allSentences = product.description
                    .split(/\.\s+/)
                    .map(s => s.replace(/\.$/, '').trim())
                    .filter(s => s.length > 10);
                  return allSentences.slice(2)
                  .map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-base">{formatText(point)}</span>
                    </li>
                  ));
                })()}
              </ul>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl bg-secondary/30 border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 uppercase">
                {t('product.specifications')}
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.03 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground text-base">{formatText(feature)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 uppercase">
                {t('product.relatedProducts')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 2xl:gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.button
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    onClick={() => onSelectProduct(relatedProduct.id)}
                    className="group rounded-xl bg-secondary/30 border border-white/10 p-4 text-left transition-all hover:bg-secondary/50 hover:border-primary/30 active:scale-[0.97]"
                  >
                    <div className="h-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden">
                      {relatedProduct.image ? (
                        <img src={relatedProduct.image} alt={relatedProduct.name} className="h-full w-full object-contain p-2" loading="lazy" decoding="async" width={96} height={96} />
                      ) : (
                        <Package className="h-10 w-10 text-muted-foreground/30" />
                      )}
                    </div>
                    <span className="text-sm font-mono text-primary">{relatedProduct.sku}</span>
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
