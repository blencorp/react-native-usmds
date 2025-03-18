# Contributing to USMDS

Thank you for your interest in contributing to USMDS (US Mobile Design System for React Native). We're excited to welcome you to our community.

## About this Repository

This is a monorepo managed with npm workspaces and Turborepo as the build system. The project uses semantic-release for versioning and publishing.

### Repository Structure

```text
.
├── apps/
│   └── docs/          # Documentation site
├── packages/
│   ├── cli/          # USMDS CLI tool
│   └── ui/           # Core UI components
```
```

## Development Setup

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/react-native-usmds.git
   cd react-native-usmds
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Run Storybook**

   ```bash
   cd apps/storybook
   npm storybook --reset-cache
   ```

## Working with the Monorepo

We use Turborepo for managing our monorepo. Here are some common commands:

- Build all packages: `npm build`
- Build documentation: `npm build:docs`
- Build examples: `npm build:examples`
- Run development server: `npm dev`
- Lint code: `npm lint`
- Format code: `npm format`

## Commit Convention

We follow the Conventional Commits specification. Your commit messages should be structured as follows:

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Changes that don't affect code functionality (formatting, etc.)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: Performance improvements
- **test**: Adding or modifying tests
- **build**: Changes to build system or dependencies
- **ci**: Changes to CI configuration
- **chore**: Other changes that don't modify src or test files

Example:

```
feat(button): add loading state to Button component
```

## Pull Request Process

1. Create a new branch for your feature/fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them using the conventional commit format

3. Push to your fork and submit a pull request

4. Ensure your PR includes:
   - A clear description of the changes
   - Any updates to documentation
   - Tests for new features
   - Successful CI checks

## Release Process

We use semantic-release for automated versioning and publishing. The release process is handled automatically through our CI/CD pipeline when changes are merged to the main branch.

The process includes:

- Automatic version bumping based on commit messages
- Generating CHANGELOG.md
- Publishing to npm
- Creating GitHub releases

## Testing

Before submitting your PR, please ensure:

- All tests pass
- New features include appropriate tests
- Documentation is updated
- The code follows our style guide (enforced by ESLint and Prettier)


## Need Help?

If you need help or have questions:

1. Check existing issues and pull requests
2. Create a new issue for discussion
3. Reach out to the maintainers

## License

By contributing to USMDS, you agree that your contributions will be licensed under its license.

