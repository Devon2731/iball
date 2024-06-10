'use client';
import { Money } from 'lib/shopify/types';
import { createContext, useContext, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const GlobalContext = createContext<{
  price: Money;
  setPrice: React.Dispatch<React.SetStateAction<Money>>;
}>({ price: { amount: '', currencyCode: '' }, setPrice: () => {} });

export const useGlobalContext = () => useContext(GlobalContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [price, setPrice] = useState({ amount: '', currencyCode: '' });
  return (
    <GlobalContext.Provider value={{ price, setPrice }}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </GlobalContext.Provider>
  );
}
