# React Native USMDS

A React Native implementation of the U.S. Web Design System (USMDS), bringing federal government design patterns and components to mobile applications.

## Overview

This monorepo contains the following packages:

- `apps/docs` - Documentation website and examples
- `packages/ui` - Core UI components library
- `packages/cli` - CLI tool for easy project setup and component management

[Documentation](https://usmds.blencorp.com)

## Prerequisites

- Node.js 22 or higher
- npm, yarn, or pnpm
- React Native project (Expo or bare React Native)

## Quick Start

Install the USMDS CLI:

```sh
npx @blen/usmds init
```

Add components to your project:

```sh
npx @blen/usmds add
```

Or add specific components:

```sh
npx @blen/usmds add button alert card
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

## Security

Security is a top priority for this project. We use automated code scanning and security analysis to protect against vulnerabilities.

- **Code Scanning**: Automated CodeQL analysis runs on every PR and push
- **Dependency Security**: Dependabot monitors and updates vulnerable dependencies
- **Security Policy**: See [SECURITY.md](.github/SECURITY.md) for vulnerability reporting

For details on our security setup and organization-level recommendations, see [CODE_SCANNING.md](.github/CODE_SCANNING.md).

## Contributing

We welcome contributions! Whether you want to report a bug, request a feature, or submit a pull request, we'd love to have your help.

- 🐛 [Report a bug](https://github.com/blencorp/react-native-usmds/issues/new?template=bug_report.yml)
- ✨ [Request a feature](https://github.com/blencorp/react-native-usmds/issues/new?template=feature_request.yml)
- 📖 Read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information on the development process

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

U.S. Web Design System (USMDS)
React Native
NativeWind
React Native Reusables
Tailwind CSS
