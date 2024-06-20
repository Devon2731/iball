import Footer from 'components/layout/footer';
import Hero from 'components/layout/hero';
import { PushPressCal } from 'components/pushpress';
import UnseenHours from 'components/ui/UnseenHours';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: { type: 'website' }
};
export default async function HomePage() {
  return (
    <>
      <Hero />
      <hr></hr>
      <UnseenHours />
      <hr className="mb-3"></hr>
      {/* <PushPressCal /> */}
      <Footer />
    </>
  );
}
