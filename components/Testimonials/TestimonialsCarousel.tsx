'use client';
import { Carousel } from '@mantine/carousel';
import { Container, Paper, Text, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconQuote } from '@tabler/icons-react';
import { useRef, useEffect } from 'react';
import classes from './TestimonialsCarousel.module.css';

interface TestimonialProps {
  title: string;
  text: string;
  name: string;
  avatar: string;
}

function TestimonialCard({ title, text, name, avatar }: TestimonialProps) {
  return (
    <Paper className={classes.card} p="xl" radius="md">
      <IconQuote className={classes.quoteIcon} size={32} />
      <Title order={4} className={classes.title}>
        {title}
      </Title>
      <Text className={classes.text} mt="md">
        {text}
      </Text>
      <div className={classes.rating} mt="md">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={classes.star}>
            ★
          </span>
        ))}
      </div>
      <div className={classes.author} mt="lg">
        <div className={classes.avatar}>
          <img src={avatar} alt={name} />
        </div>
        <Text className={classes.authorName} size="sm" fw={500}>
          {name}
        </Text>
      </div>
    </Paper>
  );
}

const testimonials = [
  {
    title: 'I achieved results I never thought possible.',
    text: 'After just three months of personalized training, I lost 8kg and gained confidence in my body. Beverlyne’s approach is holistic, combining strength training, nutrition, and mindset. She’s hands-down the best personal trainer in Nairobi!',
    name: ' Faith M',
    avatar: 'https://images.pexels.com/photos/3746300/pexels-photo-3746300.jpeg',
  },
  {
    title: 'Professional, patient, and incredibly motivating.',
    text: 'I’ve worked with several coaches before, but none as dedicated as Beverlyne. She listens, adjusts every session to my needs, and pushes me to perform my best. If you want real progress, this is the trainer for you.',
    name: ' Angela K',
    avatar: 'https://images.pexels.com/photos/32617646/pexels-photo-32617646.jpeg',
  },
  {
    title: 'More energy, better posture, and total lifestyle change.',
    text: 'Before joining, I felt tired all the time. After consistent coaching, my energy levels skyrocketed, and I now enjoy working out. Beverlyne’s fitness programs are practical, effective, and truly life-changing.',
    name: ' Caroline N',
    avatar: 'https://images.pexels.com/photos/32421200/pexels-photo-32421200.jpeg',
  },
  {
    title: 'From zero confidence to lifting heavy',
    text: 'As a beginner, I was scared of the gym. Beverlyne guided me through every movement with patience. Today, I lift weights with confidence and even help others start their fitness journey.',
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/19373013/pexels-photo-19373013.jpeg',
  },
];

export function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const startAutoplay = () => {
      stopAutoplay(); // Clear any existing interval
      autoplayRef.current = setInterval(() => {
        // Find all carousel control buttons (Mantine Carousel buttons)
        const buttons = Array.from(carouselElement.querySelectorAll('button')).filter(
          (btn) => !btn.hasAttribute('data-inactive') && !btn.disabled
        );
        
        // The next button is typically the rightmost/second button
        // Try to find it by position or just use the last enabled button
        if (buttons.length > 0) {
          // If there are 2 buttons, the second one is next. Otherwise use the last one
          const nextButton = buttons.length >= 2 ? buttons[1] : buttons[buttons.length - 1];
          if (nextButton) {
            nextButton.click();
          }
        }
      }, 4000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    // Wait for carousel to initialize
    const timeoutId = setTimeout(() => {
      startAutoplay();
    }, 1000);

    // Pause on hover
    carouselElement.addEventListener('mouseenter', stopAutoplay);
    carouselElement.addEventListener('mouseleave', startAutoplay);

    return () => {
      clearTimeout(timeoutId);
      stopAutoplay();
      carouselElement.removeEventListener('mouseenter', stopAutoplay);
      carouselElement.removeEventListener('mouseleave', startAutoplay);
    };
  }, []);

  const slides = testimonials.map((testimonial, index) => (
    <Carousel.Slide key={index}>
      <TestimonialCard {...testimonial} />
    </Carousel.Slide>
  ));

  return (
    <Container id="testimonials" size="xl" py="xl" className={classes.section}>
      <Text className={classes.subheading} size="sm" c="dimmed" ta="center" mb="xs">
        Client Voices
      </Text>
      <Title order={1} className={classes.heading} ta="center" mb="xl">
        Client Success & Testimonials
      </Title>
      <div ref={carouselRef}>
        <Carousel
          slideSize={{ base: '100%', sm: '33.333333%' }}
          slideGap="md"
          align="start"
          withControls
          nextControlIcon={<IconChevronRight size={16} />}
          previousControlIcon={<IconChevronLeft size={16} />}
          classNames={{
            control: classes.control,
            root: classes.carouselRoot,
          }}
          emblaOptions={{
            align: 'start',
            loop: true,
          }}
        >
          {slides}
        </Carousel>
      </div>
    </Container>
  );
}

