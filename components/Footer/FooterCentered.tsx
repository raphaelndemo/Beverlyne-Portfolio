'use client';

import { MouseEvent } from 'react';
import { IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import { navLinks } from '@/lib/navLinks';
import classes from './FooterCentered.module.css';

export function FooterCentered() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) {
      return;
    }

    event.preventDefault();
    const id = href.slice(hashIndex + 1);
    const element = document.getElementById(id) || document.querySelector(`#${id}`);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try {
        history.replaceState(null, '', `#${id}`);
      } catch {
        // ignore
      }
    } else {
      window.location.href = href;
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
        <a
          href="#hero"
          className={classes.brand}
          onClick={(event) => handleNavClick(event, '#hero')}
        >
          TheFitFlowExperience
        </a>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="https://www.instagram.com/thefitflowexperience?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="default"
            radius="xl"
            aria-label="Instagram"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            component="a"
            href="https://www.tiktok.com/@fitflowexperience?_r=1&_t=ZM-91JcAmBwdCe"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="default"
            radius="xl"
            aria-label="TikTok"
          >
            <IconBrandTiktok size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}

export default FooterCentered;
