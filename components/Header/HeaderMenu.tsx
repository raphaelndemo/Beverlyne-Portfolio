'use client';

import { MouseEvent } from 'react';
import { Burger, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { navLinks } from '@/lib/navLinks';
import classes from './HeaderMenu.module.css';

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    close();
  };

  const items = navLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className={classes.link}
      onClick={(event) => handleNavClick(event, link.href)}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <a
            href="#hero"
            className={classes.brand}
            onClick={(event) => handleNavClick(event, '#hero')}
          >
            TheFitFlowExperience
          </a>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Menu opened={opened} onClose={close} position="bottom-end" withinPortal>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </Menu.Target>
            <Menu.Dropdown>
              {navLinks.map((link) => (
                <Menu.Item
                  key={link.label}
                  component="a"
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </header>
  );
}
