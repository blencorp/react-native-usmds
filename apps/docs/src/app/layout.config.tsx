import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const siteNavConfig = {
  title: 'USMDS',
  url: '/',
  links: [
    { href: '/docs', label: 'Docs' },
    {
      href: 'https://github.com/blencorp/react-native-usmds',
      label: 'GitHub',
      external: true,
    },
  ],
} as const;

export const baseOptions: BaseLayoutProps = {
  nav: {
    enabled: true,
    transparentMode: 'top',
    title: siteNavConfig.title,
    url: siteNavConfig.url,
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url'
    }
  ],
  githubUrl: 'https://github.com/blencorp/react-native-usmds',
};
