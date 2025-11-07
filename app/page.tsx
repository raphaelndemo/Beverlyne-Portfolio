import { HeroContentLeft } from '@/components/Headers/HeroContentLeft';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import FooterCentered from '@/components/Footer/FooterCentered';
import { MyServices } from '@/components/Services/MyServices';
import {FeaturesGrid }  from '@/components/Features/FeaturesGrid';
import { GetInTouch } from '@/components/Form/GetInTouch';
import { CardsCarousel } from '@/components/Carousel/CardsCarousel';
import { ReactiveBio } from '@/components/Bio/ReactiveBio';
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
