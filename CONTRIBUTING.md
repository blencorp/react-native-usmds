# Contributing to React Native USMDS

Thank you for your interest in contributing to React Native USMDS! This document provides comprehensive guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Repository Structure](#repository-structure)
- [Coding Standards](#coding-standards)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Development Workflow](#development-workflow)
- [Testing Guidelines](#testing-guidelines)
- [Reporting Issues](#reporting-issues)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code Review Process](#code-review-process)
- [Release Process](#release-process)
- [Getting Help](#getting-help)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please be considerate of others and follow professional communication standards.

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js 22 or higher** - Required for running the project
- **pnpm 10+** - Package manager (install via `corepack enable`)
- **Git** - Version control
- **A code editor** - VS Code recommended with TypeScript and Prettier extensions

### First-Time Contributors

1. Read through this entire guide
2. Browse existing issues to find something to work on
3. Check out the [documentation](https://usmds.blencorp.com) to understand the project
4. Start with issues labeled `good first issue` or `help wanted`

## Development Setup

1. **Fork the Repository**

   Fork the repository on GitHub and clone your fork locally:

   ```bash
   git clone https://github.com/your-username/react-native-usmds.git
   cd react-native-usmds
   ```

2. **Enable pnpm**

   ```bash
   corepack enable
   corepack prepare pnpm@10.18.1 --activate
   ```

3. **Install Dependencies**

   ```bash
   pnpm install --frozen-lockfile
   ```

4. **Build the Project**

   ```bash
   pnpm build
   ```

5. **Run Tests**

   ```bash
   pnpm --filter @blen/react-native-usmds-registry test
   ```

6. **Start Development Environment**

   For Storybook (interactive component development):

   ```bash
   cd apps/storybook
   pnpm storybook
   ```

   For documentation site:

   ```bash
   pnpm dev:docs
   ```

## Repository Structure

```text
.
├── apps/
│   ├── storybook/         # Expo Storybook for interactive UI review
│   ├── docs/              # Next.js documentation site and API reference
│   └── cli/               # Internal CLI tool (built with tsup)
├── packages/
│   └── registry/          # React Native UI components (USMDS) and tests
├── .github/
│   └── workflows/         # CI/CD workflow definitions
├── CONTRIBUTING.md        # This file
├── README.md              # Project overview
└── package.json           # Root package configuration
```

### Key Entry Points

- Components: `packages/registry/src/usa/components/ui/*.tsx`
- Tests: `packages/registry/src/usa/tests/*.test.tsx`
- Registry index: `packages/registry/src/index.ts`

## Coding Standards

### Language and Frameworks

- **TypeScript** is used across all packages
- **React Native** for mobile components
- **NativeWind** (Tailwind CSS) for styling
- **class-variance-authority (cva)** for variant management

### Code Style

#### Naming Conventions

- **Files**: Use lowercase with hyphens (e.g., `button.tsx`, `alert-dialog.tsx`)
- **Components**: Export PascalCase names (e.g., `Button`, `AlertDialog`)
- **Functions**: Use camelCase (e.g., `handlePress`, `formatDate`)
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `DEFAULT_TIMEOUT`)
- **Types/Interfaces**: Use PascalCase (e.g., `ButtonProps`, `AlertVariant`)

#### Formatting Rules

- **Indentation**: 2 spaces (no tabs)
- **Semicolons**: Avoid semicolons in TSX files where existing code omits them
- **Quotes**: Use double quotes for strings in TSX
- **Line Length**: Maximum 100 characters (soft limit)
- **Exports**: Prefer named exports over default exports

#### React Native Specifics

```typescript
// ✅ Good - lowercase file, PascalCase export
// File: button.tsx
import { Pressable, Text } from 'react-native'
import { cva } from 'class-variance-authority'

const buttonVariants = cva('rounded-md', {
  variants: {
    variant: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600'
    }
  }
})

export function Button({ variant = 'primary', ...props }) {
  return (
    <Pressable className={buttonVariants({ variant })}>
      <Text>{props.children}</Text>
    </Pressable>
  )
}

// ❌ Bad - default export, inconsistent naming
export default function button() {
  // ...
}
```

### Formatting Tools

Run Prettier before committing:

```bash
pnpm format
```

This formats all `.ts`, `.tsx`, and `.md` files according to project standards.

## Branch Naming Conventions

Use descriptive branch names that follow this pattern:

```
<type>/<short-description>
```

### Branch Types

- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Maintenance tasks

### Examples

```bash
feature/add-dropdown-component
fix/button-loading-state
docs/update-contributing-guide
refactor/simplify-alert-logic
test/add-banner-tests
chore/update-dependencies
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages and automated changelog generation.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code changes that neither fix a bug nor add a feature
- `perf` - Performance improvements
- `test` - Adding or modifying tests
- `build` - Changes to build system or dependencies
- `ci` - Changes to CI configuration files and scripts
- `chore` - Other changes that don't modify src or test files
- `revert` - Reverts a previous commit

### Scope

The scope should be the name of the affected component or package (e.g., `button`, `alert`, `cli`, `docs`).

### Subject

- Use imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end
- Limit to 50 characters

### Examples

```bash
# Feature
feat(button): add loading state with spinner icon

# Bug fix
fix(alert): correct color contrast for accessibility

# Documentation
docs(readme): update installation instructions

# Breaking change
feat(card)!: redesign card API to use compound components

BREAKING CHANGE: Card now uses CardHeader, CardContent, and CardFooter
as separate components instead of props.
```

### Commit Message Template

Create a commit template file:

```bash
# ~/.gitmessage
<type>(<scope>): <subject>
# |<----  Preferably using up to 50 chars  --->|

# Explain why this change is being made
# |<----   Try To Limit Each Line to a Maximum Of 72 Characters   ---->|

# Provide links or keys to any relevant tickets, articles or other resources
# Example: Fixes #23

# --- COMMIT END ---
# Type can be:
#    feat     (new feature)
#    fix      (bug fix)
#    docs     (documentation)
#    style    (formatting, missing semicolons, etc)
#    refactor (refactoring code)
#    test     (adding missing tests)
#    chore    (maintain)
# --------------------
# Remember to:
#   - Use the imperative mood in the subject line
#   - Do not end the subject line with a period
#   - Separate subject from body with a blank line
#   - Wrap the body at 72 characters
#   - Use the body to explain what and why vs. how
```

Configure Git to use the template:

```bash
git config commit.template ~/.gitmessage
```

## Development Workflow

### Working with the Monorepo

We use Turborepo for efficient monorepo management. Common commands:

```bash
# Build all packages
pnpm build

# Build specific package
pnpm build:docs

# Run development servers
pnpm dev

# Run tests
pnpm --filter @blen/react-native-usmds-registry test

# Run tests in watch mode
pnpm --filter @blen/react-native-usmds-registry test:watch

# Run tests with coverage
pnpm --filter @blen/react-native-usmds-registry test:coverage

# Format all files
pnpm format

# Generate registry artifacts
pnpm registry:generate

# Validate registry artifacts
pnpm registry:validate
```

### Making Changes

1. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Write clean, documented code
   - Follow the coding standards
   - Add tests for new functionality

3. **Test Your Changes**

   ```bash
   pnpm build
   pnpm --filter @blen/react-native-usmds-registry test
   ```

4. **Format Your Code**

   ```bash
   pnpm format
   ```

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat(component): add new feature"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

## Testing Guidelines

### Testing Framework

- **Jest** - Test runner
- **@testing-library/react-native** - Testing utilities
- **jest-expo** - Expo-specific Jest configuration

### Test Location

Place tests in `packages/registry/src/usa/tests/` with the naming convention `component.test.tsx`.

### Writing Tests

```typescript
// packages/registry/src/usa/tests/button.test.tsx
import { render, fireEvent } from '@testing-library/react-native'
import { Button } from '../components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeTruthy()
  })

  it('handles press events', () => {
    const onPress = jest.fn()
    const { getByText } = render(
      <Button onPress={onPress}>Click me</Button>
    )
    fireEvent.press(getByText('Click me'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it('renders with different variants', () => {
    const { getByText } = render(
      <Button variant="secondary">Secondary</Button>
    )
    expect(getByText('Secondary')).toBeTruthy()
  })
})
```

### Test Coverage Requirements

- **New Components**: Must include tests covering:
  - Basic rendering
  - Props and variants
  - User interactions (press, change, etc.)
  - Accessibility roles and labels
- **Bug Fixes**: Must include a test that would have caught the bug

- **Minimum Coverage**: Aim for >80% coverage on new code

### Running Tests

```bash
# Run all tests
pnpm --filter @blen/react-native-usmds-registry test

# Run tests in watch mode (useful during development)
pnpm --filter @blen/react-native-usmds-registry test:watch

# Run tests with coverage report
pnpm --filter @blen/react-native-usmds-registry test:coverage

# Run specific test file
pnpm --filter @blen/react-native-usmds-registry test button.test.tsx
```

## Reporting Issues

### Before Creating an Issue

1. **Search Existing Issues**: Check if the issue already exists
2. **Check Documentation**: Verify it's not a usage issue
3. **Test with Latest Version**: Ensure the issue persists in the latest release

### Creating a Good Issue

Use descriptive titles and provide:

#### For Bug Reports

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the behavior
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**:
  - OS and version (e.g., iOS 17, Android 14)
  - React Native version
  - Package version
  - Expo version (if applicable)
- **Code Sample**: Minimal reproducible example
- **Screenshots**: If applicable, add screenshots or videos

**Template:**

````markdown
## Description

A clear and concise description of the bug.

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

What you expected to happen.

## Actual Behavior

What actually happened.

## Environment

- OS: [e.g. iOS 17.1]
- React Native Version: [e.g. 0.73.0]
- Package Version: [e.g. 1.25.0]
- Expo Version: [e.g. 50.0.0]

## Code Sample

```typescript
// Minimal code to reproduce the issue
```
````

## Screenshots

Add screenshots or videos if applicable.

## Additional Context

Any other context about the problem.

````

#### For Feature Requests

- **Is your feature request related to a problem?**: Describe the problem
- **Proposed Solution**: Describe the solution you'd like
- **Alternatives Considered**: Other solutions you've considered
- **Use Cases**: Real-world scenarios where this would be helpful
- **Implementation Ideas**: If you have thoughts on implementation

**Template:**

```markdown
## Problem Statement
A clear description of the problem or limitation.

## Proposed Solution
A clear description of what you want to happen.

## Alternatives Considered
Other solutions you've thought about.

## Use Cases
Describe real-world scenarios where this feature would be useful.

## Implementation Ideas (optional)
If you have ideas on how to implement this, share them here.

## Additional Context
Any other context, mockups, or examples.
````

## Submitting Pull Requests

### Before Submitting

- [ ] Code follows the project's coding standards
- [ ] All tests pass locally
- [ ] New tests added for new features
- [ ] Documentation updated (if applicable)
- [ ] Commit messages follow the conventional commits format
- [ ] Branch is up to date with `main`

### Pull Request Process

1. **Create the Pull Request**
   - Use a clear, descriptive title following the commit convention
   - Fill out the PR template completely
   - Link related issues using keywords (e.g., "Fixes #123", "Closes #456")

2. **PR Title Format**

   Follow the same format as commit messages:

   ```
   feat(button): add loading state with spinner icon
   ```

3. **PR Description Should Include**
   - **Summary**: Brief overview of changes
   - **Motivation**: Why this change is needed
   - **Changes Made**: Detailed list of changes
   - **Testing**: How you tested the changes
   - **Screenshots**: For UI changes, include before/after screenshots
   - **Breaking Changes**: If any, clearly documented
   - **Related Issues**: Links to related issues

4. **PR Checklist**

   ```markdown
   ## Changes

   - [ ] Feature/Fix description
   - [ ] Tests added/updated
   - [ ] Documentation updated
   - [ ] Storybook stories added/updated (for UI changes)

   ## Testing

   - [ ] All tests pass locally
   - [ ] Tested on iOS (if applicable)
   - [ ] Tested on Android (if applicable)
   - [ ] Tested with Expo (if applicable)

   ## Documentation

   - [ ] Code comments added where necessary
   - [ ] README updated (if needed)
   - [ ] API documentation updated (if needed)

   ## Screenshots (for UI changes)

   ### Before

   [Add screenshot]

   ### After

   [Add screenshot]
   ```

### PR Size Guidelines

- **Keep PRs Small**: Aim for <500 lines of code changed
- **Single Concern**: Each PR should address one feature or fix
- **Split Large Changes**: Break large features into multiple PRs

### Draft Pull Requests

Use draft PRs when:

- You want early feedback
- The work is not complete
- You're exploring an approach

## Code Review Process

### What to Expect

- **Timeline**: Initial review within 2-3 business days
- **Reviewers**: At least one maintainer must approve
- **Iterations**: Be prepared for multiple rounds of feedback

### Review Criteria

Reviewers will check for:

1. **Code Quality**
   - Follows coding standards
   - Clean, readable code
   - Appropriate comments where needed
   - No unnecessary complexity

2. **Functionality**
   - Solves the stated problem
   - No unintended side effects
   - Edge cases handled

3. **Tests**
   - Adequate test coverage
   - Tests are meaningful and clear
   - All tests pass

4. **Documentation**
   - Code is self-documenting or well-commented
   - API documentation updated
   - User-facing changes documented

5. **Performance**
   - No obvious performance issues
   - Efficient algorithms and data structures

6. **Accessibility**
   - Components are accessible
   - Proper ARIA labels and roles
   - Keyboard navigation (where applicable)

7. **Security**
   - No security vulnerabilities introduced
   - No hardcoded secrets or credentials
   - Input validation present

### Responding to Feedback

- **Be Open**: View feedback as learning opportunities
- **Ask Questions**: If feedback is unclear, ask for clarification
- **Explain Decisions**: If you disagree, explain your reasoning professionally
- **Make Changes Promptly**: Address feedback in a timely manner
- **Resolve Conversations**: Mark conversations as resolved after addressing them

### Approval Process

1. **Automated Checks**: All CI checks must pass
   - Build succeeds
   - Tests pass
   - Linting passes
   - Registry generation succeeds
   - Registry validation passes

2. **Code Review**: At least one maintainer approval required

3. **Final Review**: Maintainer performs final check before merge

4. **Merge**: Maintainer merges using "Squash and Merge" strategy

## Release Process

We use [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and publishing.

### How It Works

1. **Commit Analysis**: When changes are merged to `main`, semantic-release analyzes commit messages
2. **Version Bump**: Version is automatically bumped based on commit types:
   - `fix:` → Patch release (1.0.x)
   - `feat:` → Minor release (1.x.0)
   - `BREAKING CHANGE:` → Major release (x.0.0)
3. **Changelog**: CHANGELOG.md is automatically updated
4. **Publishing**: Package is published to npm
5. **GitHub Release**: Release notes are created on GitHub

### Release Artifacts

Each release includes:

- Updated package versions
- Generated CHANGELOG.md
- npm package publication
- GitHub release with notes
- Tagged commit

### Manual Releases

Manual releases are not typically needed. If you believe one is necessary, contact a maintainer.

## Getting Help

### Resources

- **Documentation**: https://usmds.blencorp.com
- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and community discussions

### Communication Channels

1. **GitHub Issues**: Best for bugs and feature requests
2. **Pull Request Comments**: For code-specific discussions
3. **GitHub Discussions**: For general questions and ideas

### Maintainers

When reaching out:

- Be respectful and patient
- Provide context and details
- Check existing resources first

## Security

If you discover a security vulnerability:

1. **Do not** open a public issue
2. Email the maintainers directly (check package.json for contact info)
3. Include detailed information about the vulnerability
4. Allow time for a fix before public disclosure

## License

By contributing to React Native USMDS, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to React Native USMDS! 🎉
