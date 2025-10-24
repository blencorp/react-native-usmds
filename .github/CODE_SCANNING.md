# Code Scanning and Security Setup

This document describes the code scanning and security measures implemented in this repository and provides recommendations for organization-wide adoption.

## Overview

This repository uses GitHub's native security features to automatically detect vulnerabilities and security issues:

1. **CodeQL Analysis** - Static code analysis for JavaScript/TypeScript
2. **Dependabot** - Automated dependency vulnerability scanning and updates
3. **GitHub Security Advisories** - Automatic alerts for known vulnerabilities

## CodeQL Workflow

### What is CodeQL?

CodeQL is GitHub's semantic code analysis engine that treats code as data, allowing it to find potential security vulnerabilities and coding errors. It's free for public repositories and supports multiple languages.

### Configuration

The CodeQL workflow (`.github/workflows/codeql.yml`) is configured to:

- **Run on:**
  - Every push to the `main` branch
  - Every pull request to the `main` branch
  - Weekly schedule (Mondays at 2:00 AM UTC)
  - Manual trigger via workflow_dispatch

- **Language:** JavaScript/TypeScript (covers all React Native and Node.js code)

- **Query Suite:** `security-and-quality` - Runs both security-focused and code quality checks

- **Exclusions:** Test files, build artifacts, and dependencies are excluded from scanning to reduce noise

### Query Suites Available

- `default` - Standard security queries
- `security-extended` - Extended security queries with more thorough checks
- `security-and-quality` - Security + code quality and maintainability checks (current)

### Viewing Results

1. Go to the repository's **Security** tab
2. Click **Code scanning alerts**
3. Review and triage any findings

## Dependabot Configuration

### What is Dependabot?

Dependabot automatically checks for outdated dependencies and known security vulnerabilities, creating pull requests to update them.

### Configuration

The Dependabot configuration (`.github/dependabot.yml`) monitors:

- **Root package.json** - Monorepo dependencies
- **apps/docs** - Documentation site dependencies
- **apps/showcase** - Showcase app dependencies
- **packages/registry** - UI component registry dependencies
- **packages/cli** - CLI tool dependencies
- **GitHub Actions** - Workflow action versions

Updates are checked weekly on Mondays with automatic PR creation.

## Organization-Level Recommendations

To roll out code scanning across the entire organization, administrators should:

### 1. Enable GitHub Advanced Security (if private repos)

For private repositories, GitHub Advanced Security must be enabled at the organization level:

1. Go to **Organization Settings** → **Code security and analysis**
2. Enable **GitHub Advanced Security**
3. Enable **Dependency graph**, **Dependabot alerts**, and **Dependabot security updates**

### 2. Create Organization-Level Security Policies

Create a `.github` repository in your organization with:

- **SECURITY.md** - Security policy template for all repos
- **dependabot.yml** - Default Dependabot configuration
- **workflows/codeql.yml** - Starter CodeQL workflow

Any repository without these files will inherit them from the organization's `.github` repository.

### 3. Enable Organization Security Features

Navigate to **Organization Settings** → **Code security and analysis** and enable:

- ✅ **Dependency graph** - Automatically enabled for public repos
- ✅ **Dependabot alerts** - Alerts for vulnerable dependencies
- ✅ **Dependabot security updates** - Automatic PRs for security updates
- ✅ **Code scanning** - Enable default setup or push-protection for CodeQL
- ✅ **Secret scanning** - Detect committed secrets (automatic for public repos)
- ✅ **Secret scanning push protection** - Prevent secret commits

### 4. Configure Organization Rulesets

Create repository rulesets to enforce security standards:

1. **Branch Protection Rules:**
   - Require status checks to pass (including CodeQL)
   - Require pull request reviews
   - Require conversation resolution before merging

2. **Push Rulesets:**
   - Block secrets from being pushed
   - Require CodeQL checks to pass

### 5. Set Up Organization Security Manager Team

Create a team with "Security Manager" role:

1. Go to **Organization Settings** → **Teams**
2. Create "Security Team" with security manager privileges
3. Assign security-focused members
4. Configure Dependabot to tag this team for review

### 6. Enable Security Overview Dashboard

Use the organization-level Security Overview:

1. Navigate to **Organization** → **Security** → **Overview**
2. View security posture across all repositories
3. Monitor CodeQL alerts, secret scanning, and Dependabot alerts
4. Track remediation progress

## Repository-Specific Setup

To add code scanning to a specific repository:

### Quick Setup (Recommended)

1. Go to repository **Settings** → **Code security and analysis**
2. Click **Set up** next to "Code scanning"
3. Choose **Default** setup for automatic configuration
4. GitHub will automatically create and manage the CodeQL workflow

### Advanced Setup (Current Approach)

1. Copy `.github/workflows/codeql.yml` to the repository
2. Customize the workflow for specific language/build requirements
3. Copy `.github/dependabot.yml` if needed
4. Commit and push to trigger the first scan

## Interpreting CodeQL Results

### Alert Severity Levels

- **Critical** - Exploitable vulnerabilities requiring immediate attention
- **High** - Serious security issues that should be addressed quickly
- **Medium** - Potential security concerns worth reviewing
- **Low** - Minor issues or best practice violations

### Triaging Alerts

1. **Review the alert** - Understand the vulnerability and potential impact
2. **Check the code path** - Verify if the vulnerability is exploitable in your context
3. **Fix or dismiss:**
   - Fix the issue and commit the patch
   - Dismiss as false positive with justification if not applicable
   - Create an issue to track the fix if immediate resolution isn't possible

## Best Practices

1. **Don't disable CodeQL** unless absolutely necessary
2. **Review all alerts** before dismissing them
3. **Keep dependencies updated** - Regularly merge Dependabot PRs
4. **Use security-and-quality queries** for comprehensive coverage
5. **Schedule regular scans** - Weekly is recommended for active projects
6. **Monitor the Security tab** regularly
7. **Educate developers** on secure coding practices
8. **Set up notifications** for security alerts

## Monitoring and Metrics

Track these metrics across the organization:

- Number of open security alerts per repository
- Mean time to remediation (MTTR) for security issues
- Percentage of repositories with code scanning enabled
- Dependabot PR merge rate
- False positive rate for CodeQL alerts

## Additional Resources

- [GitHub Code Scanning Documentation](https://docs.github.com/en/code-security/code-scanning)
- [CodeQL Documentation](https://codeql.github.com/docs/)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/securing-your-organization)
- [CodeQL Query Suites](https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#using-query-suites)

## Support

For questions or issues with code scanning:

1. Check the [GitHub Community Forums](https://github.community/c/code-security)
2. Contact your organization's security team
3. Review GitHub's security documentation
4. Open an issue in this repository for repo-specific concerns
