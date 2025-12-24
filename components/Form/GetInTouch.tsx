'use client';

import { useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import {
  Button,
  Container,
  Group,
  Notification,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Reset form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setNotification({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact" size="xl" py="xl" className={classes.section}>
      <Paper shadow="md" radius="lg" maw={900} mx="auto">
        <div className={classes.wrapper}>
          <div className={classes.contacts} style={{ backgroundImage: "url('/contact-bg.svg')" }}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={handleSubmit}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            {notification && (
              <Notification
                icon={
                  notification.type === 'success' ? <IconCheck size={18} /> : <IconX size={18} />
                }
                color={notification.type === 'success' ? 'teal' : 'red'}
                title={notification.type === 'success' ? 'Success' : 'Error'}
                onClose={() => setNotification(null)}
                mb="md"
              >
                {notification.message}
              </Notification>
            )}

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                  disabled={loading}
                />
                <TextInput
                  label="Your email"
                  placeholder="your.email@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                  disabled={loading}
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.currentTarget.value)}
                required
                disabled={loading}
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                required
                disabled={loading}
              />

              <Group justify="flex-end" mt="md">
                <Button
                  type="submit"
                  className={classes.control}
                  loading={loading}
                  disabled={loading}
                >
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
