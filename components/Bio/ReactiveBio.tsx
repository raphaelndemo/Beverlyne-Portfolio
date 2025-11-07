'use client';
import { Button, Container, Grid, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './ReactiveBio.module.css';

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <Paper className={classes.statCard} p="md" radius="md">
      <Text className={classes.statNumber}>{number}</Text>
      <Text className={classes.statLabel}>{label}</Text>
    </Paper>
  );
}

export function ReactiveBio() {
  return (
    <section id="about" className={classes.section}>
      <Container size="xl" py="xl">
        <Paper className={classes.bioContainer} p={{ base: 'md', sm: 'xl' }} radius="lg">
          <Grid gutter="lg" align="stretch">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mb="lg">
              <StatCard number="15" label="Years Experience" />
              <StatCard number="70+" label="Satisfied Clients" />
              <StatCard number="170+" label="Trained Athletes" />
            </SimpleGrid>

            <Paper className={classes.whoIAmCard} p="xl" radius="md">
              <Text className={classes.whoIAmLabel} size="sm" mb="xs">
                Who I am
              </Text>
              <Title order={1} className={classes.nameTitle}>
                Meet Beverlyne Ndemo
              </Title>
              <Title order={3} className={classes.subtitle} mt="xs">
                Your Personal Fitness Trainer
              </Title>
              <Text className={classes.description} mt="md" size="md">
                Meet Beverlyne Ndemo, a passionate fitness trainer dedicated to helping everyone achieve
                their goals with personalized plans and one-on-one guidance.
              </Text>
              <Button
                className={classes.bookButton}
                variant="filled"
                color="dark"
                rightSection={<IconArrowRight size={16} />}
                mt="xl"
                size="md"
              >
                Book a Schedule
              </Button>
            </Paper>
          </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} className={classes.videoColumn}>
              <div className={classes.videoContainer}>
                <video
                  className={classes.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/videos/instructor.mp4"
                />
              </div>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
}

