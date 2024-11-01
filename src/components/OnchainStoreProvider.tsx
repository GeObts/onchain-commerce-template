import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { OnchainStoreContextType } from '../types';
import airpodsImage from '../images/airpods.png';
import mugImage from '../images/mug.png';
import bottleImage from '../images/bottle.png';
import type { Product } from 'src/types';

const emptyContext = {} as OnchainStoreContextType;

const OnchainStoreContext = createContext<OnchainStoreContextType>(emptyContext);

type OnchainStoreProviderReact = {
  children: ReactNode;
};

const products: Product[] = [
  { 
    id: 'fb56e47f-d7da-4b74-a0b3-d0e197d47f80', 
    name: `'BASED' SUPERFOOD`, 
    price: 29.99, 
    image: 'https://res.cloudinary.com/commerce/image/upload/v1719508080/pcgpypu8zmp6wirxsybz.jpg'
  },
  {
    id: 'product2',
    name: `'DND, I'M BUILDING' AIRPODS`,
    price: 0.01,
    image: airpodsImage
  },
  {
    id: 'product3',
    name: `'CAFFEINATED TO BUILD' MUG`,
    price: 0.02,
    image: mugImage
  },
  {
    id: 'product4',
    name: `'HYDRATED TO BUILD' BOTTLE`,
    price: 0.01,
    image: bottleImage
  }
];

export function OnchainStoreProvider({ children }: OnchainStoreProviderReact) {
  const [quantities, setQuantities] = useState({});
  const value = useMemo(() => {
    return {
      quantities,
      setQuantities,
      products,
    };
  }, [quantities]);

  return (
    <OnchainStoreContext.Provider value={value}>
      {children}
    </OnchainStoreContext.Provider>
  );
}

export function useOnchainStoreContext() {
  return useContext(OnchainStoreContext);
}
