'use client';
import { useGlobalContext } from 'app/provider';
import Price from 'components/price';
import { Suspense } from 'react';

type Range = { min: string; max: string };

export const PriceFilter = ({ min, max }: Range) => {
  const { price } = useGlobalContext();
  const currencyCode = 'USD';
  return (
    <Suspense fallback={null}>
      {price.amount ? (
        <Price amount={price.amount} currencyCode={currencyCode} />
      ) : (
        <div className="flex">
          <Price amount={min} currencyCode={currencyCode} />
          <p className="pe-2 ps-2">-</p>
          <Price amount={max} currencyCode={currencyCode} />
        </div>
      )}
    </Suspense>
  );
};
