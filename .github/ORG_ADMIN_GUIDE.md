# Quick Start Guide for Organization Administrators

This guide provides step-by-step instructions for implementing code scanning and security features across your entire GitHub organization.

## TL;DR - Quick Setup Checklist

- [ ] Enable GitHub Advanced Security (if using private repos)
- [ ] Enable organization-level security features
- [ ] Create organization `.github` repository with default files
- [ ] Configure repository rulesets for security enforcement
- [ ] Set up Security Manager team
- [ ] Monitor via Security Overview dashboard

## Step 1: Enable GitHub Advanced Security (Private Repos Only)

**For public repositories:** GitHub Advanced Security features are free and automatically available.

**For private repositories:**

1. Navigate to your organization settings: `https://github.com/organizations/YOUR_ORG/settings/billing`
2. Go to **Plans and usage** → **GitHub Advanced Security**
3. Enable GitHub Advanced Security
4. Note: This is billed per active committer

## Step 2: Enable Organization-Level Security Features

1. Go to **Organization Settings** → **Code security and analysis**
2. Enable the following features:

```
✅ Dependency graph (auto-enabled for public repos)
✅ Dependabot alerts
✅ Dependabot security updates
✅ Code scanning (enable for all repos or new repos)
✅ Secret scanning (auto-enabled for public repos)
✅ Secret scanning push protection
```

## Step 3: Create Organization `.github` Repository

This repository provides default files for all repos in your organization.

### 3.1 Create the Repository

```bash
# Create a new repository named '.github' in your organization
# Make it public or private based on your needs
```

### 3.2 Add Default Files

Copy these files from this repository to your org's `.github` repo:

```
.github/
  ├── SECURITY.md           # Default security policy
  ├── CODE_SCANNING.md      # Documentation (optional)
  ├── dependabot.yml        # Default Dependabot config
  └── workflows/
      └── codeql.yml        # Default CodeQL workflow
```

**Important:** Repositories without these files will automatically inherit them from the org's `.github` repository.

### 3.3 Customize for Your Organization

Update the files to match your org's needs:

- **SECURITY.md**: Add your security team contact info
- **dependabot.yml**: Adjust schedules and labels
- **codeql.yml**: Modify based on languages used across your org

## Step 4: Configure Repository Rulesets

Enforce security scanning across all repositories:

1. Go to **Organization Settings** → **Repository rulesets**
2. Click **New ruleset** → **New branch ruleset**
3. Configure:
   - **Name**: "Security checks required"
   - **Enforcement status**: Active
   - **Target branches**: `main`, `master`, `production`
   - **Bypass list**: Add org admins if needed
4. Under **Require status checks to pass**:
   - Add: `CodeQL` or `analyze`
   - Add: Any other security tools you use
5. Enable **Require conversation resolution before merging**
6. Save the ruleset

## Step 5: Set Up Security Manager Team

Create a dedicated team for security management:

1. Go to **Organization** → **Teams** → **New team**
2. Create team named "Security Team" or similar
3. Add security-focused members
4. In **Organization Settings** → **Member privileges**
5. Under **Security managers**, add the team
6. This team can now:
   - Manage security alerts across all repos
   - Access Security Overview
   - Configure security settings

## Step 6: Enable Security Overview Dashboard

Monitor security across all repositories:

1. Navigate to **Organization** → **Security** → **Overview**
2. Configure the view to show:
   - Code scanning alerts
   - Dependabot alerts  
   - Secret scanning alerts
3. Set up filters for different severities
4. Review regularly (recommended: weekly)

## Step 7: Roll Out to Existing Repositories

For repositories that existed before enabling org-level settings:

### Option A: Automatic Setup (Recommended)

1. Go to **Organization Settings** → **Code security and analysis**
2. Under **Code scanning**, click **Enable all** or **Enable for eligible repositories**
3. GitHub will automatically add CodeQL workflows to eligible repos

### Option B: Manual Setup

For each repository:

1. Navigate to **Repository Settings** → **Code security and analysis**
2. Click **Set up** next to "Code scanning"
3. Choose **Default** setup for automatic configuration, or
4. Choose **Advanced** setup to use your custom `.github/workflows/codeql.yml`

## Step 8: Monitor and Maintain

### Weekly Tasks:
- Review Security Overview dashboard
- Triage new security alerts
- Merge Dependabot PRs

### Monthly Tasks:
- Review security metrics (MTTR, open alerts, etc.)
- Update security documentation
- Review and update security policies

### Quarterly Tasks:
- Security team review meeting
- Update CodeQL query suites if needed
- Review and update repository rulesets

## Metrics to Track

Monitor these KPIs across your organization:

- **Code scanning coverage**: % of repos with code scanning enabled
- **Open security alerts**: Count by severity
- **Mean Time to Remediation (MTTR)**: Time from alert to fix
- **Dependabot adoption**: % of Dependabot PRs merged
- **False positive rate**: Track to improve query configurations

## Common Issues and Solutions

### Issue: Too Many False Positives

**Solution:** 
- Adjust CodeQL query suite (use `security-extended` instead of `security-and-quality`)
- Add path exclusions in workflow config
- Dismiss false positives with justification

### Issue: Developers Ignoring Alerts

**Solution:**
- Make CodeQL checks required in branch protection
- Set up notifications for security team
- Provide training on security best practices
- Celebrate security improvements

### Issue: High Volume of Dependabot PRs

**Solution:**
- Group updates by type (development/production)
- Adjust update frequency (weekly → bi-weekly)
- Set open PR limits
- Enable auto-merge for patch updates

## Best Practices

1. **Start Small**: Enable for a few pilot repos first
2. **Communicate**: Inform teams about new security requirements
3. **Train**: Provide security training for developers
4. **Automate**: Use auto-merge for low-risk updates
5. **Review Regularly**: Don't let alerts pile up
6. **Document**: Keep security policies up-to-date
7. **Iterate**: Continuously improve based on feedback

## Support and Resources

- **GitHub Docs**: https://docs.github.com/en/code-security
- **CodeQL Docs**: https://codeql.github.com/docs/
- **Security Best Practices**: https://docs.github.com/en/code-security/getting-started
- **Community Forum**: https://github.community/c/code-security

## Getting Help

If you need assistance:

1. Check the [CODE_SCANNING.md](CODE_SCANNING.md) for detailed documentation
2. Review GitHub's official documentation
3. Post in GitHub Community Forums
4. Contact GitHub Support (for Enterprise customers)

---

**Note**: This guide is based on best practices as of 2025. GitHub's security features are continuously evolving, so check the official documentation for the latest capabilities.
