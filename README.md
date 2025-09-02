# React Native USMDS

A React Native implementation of the U.S. Web Design System (USMDS), bringing federal government design patterns and components to mobile applications.

## Overview

This monorepo contains the following packages:

- `apps/docs` - Documentation website and examples
- `packages/ui` - Core UI components library
- `packages/cli` - CLI tool for easy project setup and component management

[Documentation](https://react-native-usmds.vercel.app/)

## Prerequisites

- Node.js 16 or higher
- npm, yarn, or pnpm
- React Native project (Expo or bare React Native)

## Quick Start

Install the USMDS CLI:

```sh
npx usmds init
```

Add components to your project:

```sh
npx usmds add
```

Or add specific components:

```sh
npx usmds add button alert card
```

## Features

🎨 Fully customizable theming based on USMDS guidelines
📱 Native mobile-first components
🔧 Easy setup with CLI tools
🎯 TypeScript support
🎨 NativeWind (Tailwind CSS) integration
📚 Comprehensive documentation

## Documentation

Visit our documentation for:

Getting Started Guide
Component API Reference
Customization Options
Best Practices
Troubleshooting

## Development

### Registry Sync

This project uses Storybook as the source of truth for components. To keep the CLI registry in sync with Storybook components:

```sh
# Sync all components from Storybook to registry
npx tsx scripts/sync-registry.ts

# Preview changes without modifying files (dry run)
npx tsx scripts/sync-registry.ts --dry-run

# Sync a specific component
npx tsx scripts/sync-registry.ts --component Button

# Test the sync functionality
npx tsx scripts/test-sync.ts
```

**When to sync:**
- After updating components in Storybook
- Before publishing a new version
- When adding new components

The sync script will:
- ✅ Extract components from `apps/storybook/components/`
- ✅ Update dependency metadata (only `@rn-primitives/*` packages)
- ✅ Convert import paths to `@/components/ui/[component]`
- ✅ Preserve existing ICON_PATHS
- ✅ Create automatic backups
- ✅ Generate clean, consistent component templates

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

U.S. Web Design System (USMDS)
React Native
NativeWind
Tailwind CSS
