'use client';
import { Button, Container, Group, Paper, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './MyServices.module.css';

export function MyServices() {
  const handlePrimaryCta = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className={classes.section}>
      <Container size="xl" py="xl" className={classes.wrapper}>
        <Text className={classes.subtitle} size="sm" c="dimmed" ta="center" mb="xs">
          My Service
        </Text>
        <Title order={1} className={classes.title} ta="center" mb="md">
          Explore the complete range of services my coaching provides.
        </Title>
        <Text className={classes.description} ta="center" size="md" c="dimmed" maw={600} mx="auto" mb="xl">
          My Coaching offers personalized fitness plans and expert guidance to help you reach your goals
          and boost your performance.
        </Text>

        <Paper withBorder className={classes.cta} shadow="lg" radius="md" p={{ base: 'xl', md: 'xl' }}>
          <Title order={2} className={classes.ctaTitle} ta="center">
            Ready to transform your fitness journey?
          </Title>
          <Text className={classes.ctaDescription} ta="center" size="md" mb="lg">
            Book a complimentary strategy session and we’ll map out the exact plan to help you reach your
            goals faster—with accountability, expert guidance, and a program tailored just for you.
          </Text>
          <Group justify="center" className={classes.ctaActions}>
            <Button
              size="lg"
              radius="xl"
              className={classes.primaryCta}
              rightSection={<IconArrowRight size={18} />}
              onClick={handlePrimaryCta}
            >
              Book a free consultation
            </Button>
            <Button
              size="lg"
              radius="xl"
              variant="outline"
              className={classes.secondaryCta}
              component="a"
              href="#programs"
            >
              Explore programs
            </Button>
          </Group>
        </Paper>
      </Container>
    </section>
  );
}

