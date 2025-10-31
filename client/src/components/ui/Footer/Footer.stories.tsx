// components/Footer/Footer.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import Footer, { type FooterProps } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

const defaultArgs: FooterProps = {
  text: '© 2024 My Website. All rights reserved.',
  links: [
    { url: '/privacy', label: 'Privacy Policy' },
    { url: '/terms', label: 'Terms of Service' },
    { url: '/contact', label: 'Contact Us' },
    { url: '/about', label: 'About' }
  ]
};

export const Default: Story = {
  args: defaultArgs
};

