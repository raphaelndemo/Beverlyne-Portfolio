import { ReactiveBio } from '@/components/Bio/ReactiveBio';
import { CardsCarousel } from '@/components/Carousel/CardsCarousel';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import FooterCentered from '@/components/Footer/FooterCentered';
import { GetInTouch } from '@/components/Form/GetInTouch';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroContentLeft } from '@/components/Headers/HeroContentLeft';
import { MyServices } from '@/components/Services/MyServices';
import { TestimonialsCarousel } from '@/components/Testimonials/TestimonialsCarousel';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroContentLeft />

      <MyServices />
      <ReactiveBio />
      <CardsCarousel />
      <TestimonialsCarousel />
      <FeaturesGrid />
      <GetInTouch />
      <FooterCentered />
    </>
  );
}
