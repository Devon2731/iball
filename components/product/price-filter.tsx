'use client';
import { useGlobalContext } from 'app/provider';
import Price from 'components/price';

export const PriceFilter = () => {
  const { price } = useGlobalContext();

  return (
    <>
      <Price amount={price.amount} currencyCode={price.currencyCode} />
    </>
  );
};
