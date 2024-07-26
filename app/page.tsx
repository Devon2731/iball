import Footer from 'components/layout/footer';
import Hero from 'components/layout/hero';
import { PushPressCal } from 'components/pushpress-cal';
import UnseenHours from 'components/ui/UnseenHours';

export const metadata = {
  description:
    'iBall24/7 is the ultimate basketball training platform that revolutionizes how players improve their skills. Our advanced training programs are designed to elevate performance, offering personalized coaching and innovative drills to help you reach your full potential.',
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
