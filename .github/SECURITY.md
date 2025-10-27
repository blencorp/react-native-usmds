# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The security of this project is taken seriously. If you discover a security vulnerability, please follow these steps:

### Private Disclosure Process

1. **Do not** create a public GitHub issue for the vulnerability
2. Report the vulnerability privately using one of these methods:
   - Use GitHub's [private security advisory feature](https://github.com/blencorp/react-native-usmds/security/advisories/new)
   - Email the security team (if available)
3. Include the following information in your report:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if available)

### What to Expect

- **Acknowledgment**: You'll receive an acknowledgment within 48 hours
- **Assessment**: We'll assess the vulnerability and determine its severity
- **Timeline**: We aim to release a fix within 90 days for critical issues
- **Credit**: Security researchers who responsibly disclose vulnerabilities will be credited (unless they prefer to remain anonymous)

## Security Features

This repository uses GitHub's native security features:

### Automated Scanning

- **CodeQL Analysis**: Automated code scanning for vulnerabilities in JavaScript/TypeScript
- **Dependabot**: Automatic dependency vulnerability detection and updates
- **Secret Scanning**: Detects accidentally committed secrets (public repos)

### Security Alerts

Security alerts are automatically created for:

- Known vulnerabilities in dependencies
- Code scanning findings from CodeQL
- Exposed secrets or tokens

### Security Updates

- Dependabot automatically creates pull requests for security updates
- CodeQL runs on every pull request and push to main
- Weekly scheduled scans ensure ongoing security

## Security Best Practices for Contributors

When contributing to this project:

1. **Never commit secrets** - Use environment variables for sensitive data
2. **Keep dependencies updated** - Review and merge Dependabot PRs promptly
3. **Review CodeQL alerts** - Address security findings in your pull requests
4. **Use secure defaults** - Follow the principle of least privilege
5. **Validate input** - Always sanitize and validate user input
6. **Follow secure coding guidelines** - Review our [CONTRIBUTING.md](../CONTRIBUTING.md)

## Dependency Security

We use Dependabot to monitor and update dependencies:

- Security updates are applied automatically via pull requests
- Dependencies are reviewed weekly
- Known vulnerable packages are flagged immediately

## Code Scanning Results

View current security status:

- Go to the [Security tab](https://github.com/blencorp/react-native-usmds/security)
- Check [Code scanning alerts](https://github.com/blencorp/react-native-usmds/security/code-scanning)
- Review [Dependabot alerts](https://github.com/blencorp/react-native-usmds/security/dependabot)

## Security Contacts

For urgent security issues, contact:

- GitHub Security Advisory: [Create Advisory](https://github.com/blencorp/react-native-usmds/security/advisories/new)
- Maintainers: Review the [CODEOWNERS](CODEOWNERS) file

## Disclosure Policy

We follow coordinated disclosure:

1. Security researchers report vulnerabilities privately
2. We work with researchers to validate and fix the issue
3. A fix is prepared and tested
4. An advisory is published with credit to the reporter
5. The fix is released to users

## Additional Resources

- [GitHub Security Features](https://github.com/features/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)
