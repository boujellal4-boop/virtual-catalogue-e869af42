import React, { createContext, useContext, useState, ReactNode } from 'react';

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
