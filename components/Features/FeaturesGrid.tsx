import { IconApple, IconHeartbeat, IconRun, IconUsers } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconRun,
    title: 'Personalized Training Programs',
    description:
      'Every body is different — and so is every fitness plan. I create tailored workout programs that align with your goals, schedule, and lifestyle to help you achieve sustainable results.',
  },
  {
    icon: IconUsers,
    title: 'One-on-One & Group Coaching',
    description:
      'Whether you prefer focused personal sessions or the motivation of group workouts, I offer professional guidance designed to challenge, inspire, and keep you consistent.',
  },
  {
    icon: IconHeartbeat,
    title: 'Health & Wellness Focused',
    description:
      'Fitness isn’t just about aesthetics — it’s about strength, energy, and overall wellness. I help you build a balanced routine that enhances both physical and mental health.',
  },
  {
    icon: IconApple,
    title: 'Nutrition & Lifestyle Coaching',
    description:
      'Get expert nutrition advice to complement your workouts. Learn how to fuel your body right for performance, recovery, and long-term health.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={50} radius={50}>
        <Icon size={25} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={10}>
        {title}
      </Text>
      <Text size="md" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <section id="features" className={classes.section}>
      <Container className={classes.wrapper} size="xl">
        <Title className={classes.title}>
          Transform Your Fitness Journey with Personalized Coaching That Fits Your Lifestyle
        </Title>

        <Container size={560} p={0}>
          <Text size="md" className={classes.description}>
            Whether you’re a beginner or a fitness enthusiast, I help you achieve real, lasting
            results through personalized programs, science-backed workouts, and one-on-one support —
            all tailored to your goals and schedule.
          </Text>
        </Container>

        <SimpleGrid
          mt={60}
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 'xl', md: 50 }}
          verticalSpacing={{ base: 'xl', md: 50 }}
        >
          {features}
        </SimpleGrid>
      </Container>
    </section>
  );
}
