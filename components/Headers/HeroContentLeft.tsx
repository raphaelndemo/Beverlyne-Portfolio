'use client';

import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 40%)"
        opacity={0.6}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Achieve Your Ideal Body With Tailored Guidance</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Unlock the path to achieving the body you've always dreamed of with a personalized
          transformation journey tailored specifically for your unique goals and lifestyle. Whether
          you're looking to build strength, shed unwanted pounds, or simply improve your overall
          fitness, we've got you covered.
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
          onClick={handleGetStarted}
        >
          Get started
        </Button>
      </Container>
    </section>
  );
}
