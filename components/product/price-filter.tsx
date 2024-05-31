'use client';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
export const PriceFilter = ({ product }: { product: Product }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('style');
  const [hoodie, setHoodie] = useState(false);

  //Checks for if a hoodie is selected
  if (search === 'Hoodie' && !hoodie) {
    setHoodie(true);
  } else if (search === 'T-shirt' || ('' && hoodie)) {
    setHoodie(false);
  }

  return (
    <>
      {hoodie ? (
        <Price
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      ) : (
        <Price
          amount={product.priceRange.minVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      )}
    </>
  );
};
