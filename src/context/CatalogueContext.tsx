import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserInfo {
  fullName: string;
  company: string;
  email: string;
}

interface CatalogueState {
  userInfo: UserInfo | null;
  selectedBrand: string | null;
  selectedSystem: string | null;
  selectedProduct: string | null;
  navigationHistory: string[];
}

interface CatalogueContextType extends CatalogueState {
  setUserInfo: (info: UserInfo) => void;
  setSelectedBrand: (brandId: string | null) => void;
  setSelectedSystem: (systemId: string | null) => void;
  setSelectedProduct: (productId: string | null) => void;
  pushNavigation: (path: string) => void;
  goBack: () => string | null;
  resetCatalogue: () => void;
}

const CatalogueContext = createContext<CatalogueContextType | undefined>(undefined);

const initialState: CatalogueState = {
  userInfo: null,
  selectedBrand: null,
  selectedSystem: null,
  selectedProduct: null,
  navigationHistory: [],
};

export function CatalogueProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CatalogueState>(initialState);

  // Brand color mapping (HSL values matching index.css brand variables)
  const brandColors: Record<string, string> = {
    'kidde-commercial': '356 66% 42%',
    'airsense': '210 98% 33%',
    'ems': '357 70% 48%',
    'edwards': '205 18% 45%',
  };

  // Dynamically override --primary when brand is selected
  useEffect(() => {
    const root = document.documentElement;
    if (state.selectedBrand && brandColors[state.selectedBrand]) {
      const color = brandColors[state.selectedBrand];
      root.style.setProperty('--primary', color);
      root.style.setProperty('--ring', color);
    } else {
      // Reset to default KGS red
      root.style.setProperty('--primary', '356 66% 42%');
      root.style.setProperty('--ring', '356 66% 42%');
    }
  }, [state.selectedBrand]);

  const setUserInfo = (info: UserInfo) => {
    setState(prev => ({ ...prev, userInfo: info }));
  };

  const setSelectedBrand = (brandId: string | null) => {
    setState(prev => ({ 
      ...prev, 
      selectedBrand: brandId,
      selectedSystem: null,
      selectedProduct: null,
    }));
  };

  const setSelectedSystem = (systemId: string | null) => {
    setState(prev => ({ 
      ...prev, 
      selectedSystem: systemId,
      selectedProduct: null,
    }));
  };

  const setSelectedProduct = (productId: string | null) => {
    setState(prev => ({ ...prev, selectedProduct: productId }));
  };

  const pushNavigation = (path: string) => {
    setState(prev => ({
      ...prev,
      navigationHistory: [...prev.navigationHistory, path],
    }));
  };

  const goBack = (): string | null => {
    if (state.navigationHistory.length === 0) return null;
    const newHistory = [...state.navigationHistory];
    newHistory.pop();
    const previousPath = newHistory[newHistory.length - 1] || '/';
    setState(prev => ({ ...prev, navigationHistory: newHistory }));
    return previousPath;
  };

  const resetCatalogue = () => {
    setState(initialState);
  };

  return (
    <CatalogueContext.Provider
      value={{
        ...state,
        setUserInfo,
        setSelectedBrand,
        setSelectedSystem,
        setSelectedProduct,
        pushNavigation,
        goBack,
        resetCatalogue,
      }}
    >
      {children}
    </CatalogueContext.Provider>
  );
}

export function useCatalogue() {
  const context = useContext(CatalogueContext);
  if (!context) {
    throw new Error('useCatalogue must be used within a CatalogueProvider');
  }
  return context;
}
