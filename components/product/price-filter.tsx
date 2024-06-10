'use client';
import { useGlobalContext } from 'app/provider';
import Price from 'components/price';
// import { Product } from 'lib/shopify/types';

export const PriceFilter = () => {
  // const [price, setPrice] = useState(product.priceRange.minVariantPrice);
  const { price } = useGlobalContext();
  //Checks for if a hoodie is selected
  // if (search === 'Hoodie' && !hoodie) {
  //   setHoodie(true);
  // } else if (search === 'T-shirt' || ('' && hoodie)) {
  //   setHoodie(false);
  // }
  // const variantSelector = product.variants.filter((variant) => search === variant);

  // console.log(variantSelector);
  // if (variantSelector) {

  // }
  // console.log(variantSelector);
  //return price of variant selected

  return (
    <>
      <Price amount={price.amount} currencyCode={price.currencyCode} />
    </>
  );
};

// return (
//   <>
//     {hoodie ? (
//       <Price
//         amount={product.priceRange.maxVariantPrice.amount}
//         currencyCode={product.priceRange.maxVariantPrice.currencyCode}
//       />
//     ) : (
//       <Price
//         amount={product.priceRange.minVariantPrice.amount}
//         currencyCode={product.priceRange.maxVariantPrice.currencyCode}
//       />
//     )}
//   </>
// );
