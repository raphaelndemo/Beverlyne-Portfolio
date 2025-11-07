'use client';
import { MouseEvent } from 'react';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import { navLinks } from '@/lib/navLinks';
import classes from './FooterCentered.module.css';

export function FooterCentered() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const items = navLinks.map((link) => (
    <Anchor
      key={link.label}
      href={link.href}
      className={classes.link}
      lh={1}
      onClick={(event) => handleNavClick(event, link.href)}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <a href="#hero" className={classes.brand} onClick={(event) => handleNavClick(event, '#hero')}>
          Beverlyne Fitness
        </a>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}

export default FooterCentered;