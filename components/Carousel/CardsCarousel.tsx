'use client';

import { Carousel } from '@mantine/carousel';
import { Container, Paper, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
}

function Card({ image, title }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div className={classes.content}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: 'https://images.pexels.com/photos/8033083/pexels-photo-8033083.jpeg',
    title: 'Performance Assessment',
    category: 'nature',
  },
  {
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg',
    title: 'Nutritional Guidance',
    category: 'beach',
  },
  {
    image: 'https://images.pexels.com/photos/25602467/pexels-photo-25602467.jpeg',
    title: 'Personalized Fitness Plan',
    category: 'nature',
  },
  {
    image: 'https://images.pexels.com/photos/6455805/pexels-photo-6455805.jpeg',
    title: 'One-on-One Coaching Sessions',
    category: 'nature',
  },
  {
    image: 'https://images.pexels.com/photos/14085135/pexels-photo-14085135.jpeg',
    title: 'Body Building & Strength Training',
    category: 'tourism',
  },
  {
    image: 'https://images.pexels.com/photos/5384536/pexels-photo-5384536.jpeg',
    title: 'Recovery & Mindfullness Techniques',
    category: 'nature',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container id="programs" size="xl" py="xl" className={classes.section}>
      <Carousel
        slideSize={{ base: '100%', sm: '33.333333%' }}
        slideGap="md"
        emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 3 }}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
