// import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <hr></hr>
      <p className="kode-mono-lab bg-slate-900 text-center text-xl md:text-[30px] lg:text-3xl  xl:text-6xl dark:text-white">
        FEATURED
      </p>
      <hr className="mb-3"></hr>
      <ThreeItemGrid />
      <Footer />
    </>
  );
}
