# Release Process

This document describes the release process for the USMDS project.

## Overview

We use semantic-release for automated versioning and publishing. To respect GitHub branch protections on the `main` branch, our release process uses a release branch workflow.

## Creating a Release (For Maintainers)

### Step 1: Create a Release Branch

Start from the latest `main` branch:

```bash
git checkout main
git pull origin main
git checkout -b release/v<version>
```

Replace `<version>` with the expected version (e.g., `1.22.0`). Don't worry if you're not sure of the exact version - semantic-release will determine it based on conventional commits.

### Step 2: Push the Release Branch

Push the release branch to GitHub to trigger the automated release workflow:

```bash
git push origin release/v<version>
```

### Step 3: Automated Processing

The GitHub Actions workflow (`.github/workflows/release.yml`) will automatically:

1. Run tests and build packages
2. Analyze all commits since the last release
3. Determine the new version based on conventional commit messages:
   - `feat:` commits → minor version bump
   - `fix:` commits → patch version bump
   - `BREAKING CHANGE:` in commit footer → major version bump
4. Generate/update `CHANGELOG.md` with release notes
5. Update version in `package.json` and `packages/cli/package.json`
6. Build the CLI package
7. Commit these changes back to the release branch
8. Upload the registry to Google Cloud Storage

### Step 4: Review and Create Pull Request

Once the workflow completes:

1. Go to the [repository on GitHub](https://github.com/blencorp/react-native-usmds)
2. Review the automated changes on the release branch
3. Create a Pull Request from `release/v<version>` to `main`
4. Add a description summarizing the release
5. Request review from maintainers

### Step 5: Merge to Main

Once the PR is approved:

1. Merge the PR to `main`
2. The release is now officially recorded in the repository

### Step 6: Publish to npm

After merging to main, manually publish the package to npm:

```bash
# From the repository root
cd packages/cli/dist
npm publish --access public
```

### Step 7: Create GitHub Release

1. Go to the [Releases page](https://github.com/blencorp/react-native-usmds/releases)
2. Click "Draft a new release"
3. Create a new tag: `v<version>` (e.g., `v1.22.0`)
4. Set target to `main`
5. Use the title: `v<version>`
6. Copy the relevant section from `CHANGELOG.md` as the description
7. Publish the release

## Version Determination

Semantic-release automatically determines the version based on conventional commits:

| Commit Type | Version Bump | Example |
|------------|--------------|---------|
| `fix:` | Patch (1.0.x) | `fix(button): correct hover state` |
| `feat:` | Minor (1.x.0) | `feat(input): add password visibility toggle` |
| `BREAKING CHANGE:` | Major (x.0.0) | Commit footer with `BREAKING CHANGE: ...` |

## Troubleshooting

### Workflow Fails

If the release workflow fails:

1. Check the [Actions tab](https://github.com/blencorp/react-native-usmds/actions) for error details
2. Fix any issues in the release branch
3. Commit and push fixes to the same release branch
4. The workflow will run again automatically

### Wrong Version Generated

If semantic-release generates an unexpected version:

1. Review the commit messages since the last release
2. Ensure commits follow the conventional commit format
3. If needed, delete the release branch and start over with corrected commits

### Need to Cancel a Release

If you need to cancel a release:

1. Delete the release branch: `git push origin --delete release/v<version>`
2. Close any open PR
3. Start over when ready

## Configuration Files

- `.releaserc` - Semantic-release configuration
- `.github/workflows/release.yml` - GitHub Actions workflow for releases

## Why This Approach?

This release branch workflow:

- ✅ Respects GitHub branch protections on `main`
- ✅ Allows review of release changes before merging
- ✅ Provides clear visibility into what's being released
- ✅ Maintains a clean git history
- ✅ Follows GitHub best practices
