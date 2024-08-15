import Footer from 'components/layout/footer';
import Hero from 'components/layout/hero';
import { PushPressCal } from 'components/pushpress-cal';
import UnseenHours from 'components/ui/UnseenHours';

export const metadata = {
  description:
    "iBall247 is a premier basketball training company dedicated to elevating players' skills and performance. Offering personalized coaching and advanced training programs, iBall247 focuses on developing technical proficiency, physical fitness, and mental toughness to help athletes reach their full potential.",
  openGraph: { type: 'website' }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <hr></hr>
      <UnseenHours />
      <hr className="mb-3"></hr>
      <PushPressCal />
      <Footer />
    </>
  );
}
