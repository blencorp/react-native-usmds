# Contributing to USMDS

### Repository Structure

This is a pnpm + Turborepo monorepo with the following structure:

```text
.
├── apps/
│   ├── docs/          # Documentation site (Next.js)
│   └── showcase/      # Showcase app (Expo)
├── packages/
│   ├── cli/           # USMDS CLI tool (@blen/usmds)
│   └── registry/      # Core UI components and tests
```

## Development Setup

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/react-native-usmds.git
   cd react-native-usmds
   ```

2. **Install Dependencies**

   This project uses pnpm as its package manager. Make sure you have Node.js 22+ and pnpm 10+ installed.

   ```bash
   pnpm install
   ```

3. **Start Development**

   ```bash
   # Run all dev scripts (docs, showcase, etc.)
   pnpm dev

   # Or run specific apps
   pnpm dev:docs      # Documentation site
   pnpm dev:showcase  # Showcase app
   ```

## Working with the Monorepo

We use pnpm workspaces and Turborepo for managing our monorepo. Here are some common commands:

### Root-level Commands

These commands run across all workspaces:

- **Build all packages**: `pnpm build`
- **Run development mode**: `pnpm dev`
- **Lint code**: `pnpm lint`
- **Format code**: `pnpm format`

### App-specific Commands

- **Build documentation**: `pnpm build:docs`
- **Build examples**: `pnpm build:examples`
- **Dev documentation**: `pnpm dev:docs`
- **Dev showcase**: `pnpm dev:showcase`

### Workspace-specific Commands

To run commands in a specific workspace, use the `--filter` flag:

```bash
# Run tests in the registry package
pnpm --filter @blen/react-native-usmds-registry test

# Build the CLI package
pnpm --filter @blen/usmds build

# Add a dependency to a specific workspace
pnpm --filter @blen/usmds add <package-name>
```

### Global Flag

To run a script at the workspace root, use the `-w` flag:

```bash
pnpm -w run <script-name>
```

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
