import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';

function ThreeItemGridItem({
  item,
  // size,
  priority
}: {
  item: Product;
  // size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div className="max-h-72 md:col-span-2 md:row-span-1">
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          priority={priority}
          alt={item.title}
          label={{
            position: 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'frontpage'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-1 md:pb-24 md:pt-8">
      <Suspense>
        <ThreeItemGridItem item={firstProduct} priority={true} />
      </Suspense>
      <ThreeItemGridItem item={secondProduct} priority={true} />
      <ThreeItemGridItem item={thirdProduct} />
    </section>
  );
}
