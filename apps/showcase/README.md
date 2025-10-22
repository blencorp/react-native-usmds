# Showcase App Expo Go Distribution Guide

This workspace is configured for the current Expo application services (EAS) tooling. `expo publish` is no longer supported locally, so use **EAS Update** to bundle and host the JavaScript experience for Expo Go.

> **No custom dev client required**
>
> The showcase app intentionally omits the `expo-dev-client` dependency and does not register the `expo-dev-client` plugin in [`app.json`](./app.json). Updates resolve through the standard Expo Go runtime (`runtimeVersion: { policy: "appVersion" }` + the hosted `updates.url`), so scanning the QR code in Expo Go loads the bundle without building a native binary.

## Prerequisites

1. Install dependencies from the repo root: `pnpm install`.
2. Switch into this workspace when running Expo/EAS commands: `cd apps/showcase`.
3. Authenticate with the Expo account that owns the project: `npx expo login` (the project owner is `blen-corp`).
4. Ensure you have the latest EAS CLI (the required range is declared in `eas.json`, `>= 16.20.4`).

## Publish a Showcase Update for Expo Go

1. From `apps/showcase`, run the publish script to bundle and upload the JS/asset payload (from the repo root you can also run `pnpm --filter showcase publish:expo-go`):

   ```bash
   pnpm publish:expo-go
   ```

   This runs `eas update --branch showcase`, creating (or reusing) the `showcase` update branch and automatically mapping it to the `showcase` release channel.

2. After the upload completes, the CLI prints a QR code and an `exp+updates://` link. Share either with stakeholders.

   - Users install **Expo Go** from the App Store or Play Store.
   - They scan the QR code (or paste the link) to open the showcase experience inside Expo Go.

3. Every time you want to refresh the shared build, repeat `pnpm publish:expo-go` from the commit you want to demo. Provide release notes with the `--message` flag if you need more context:

   ```bash
   pnpm publish:expo-go -- --message "Revamp navigation demo"
   ```

## Channel & Branch Management

- The `showcase` branch is dedicated to Expo Go sharing. If you need parallel demos (e.g., client-specific builds), create additional branches/channels:

  ```bash
  eas branch:create client-acme
  eas channel:create client-acme --branch client-acme
  eas update --branch client-acme
  ```

- Production binaries built via `eas build` pull from the channel that matches their profile (`development`, `preview`, `production`). Keeping the showcase updates on a separate branch prevents accidental promotion to the store build.

## Native build profiles (optional)

- [`eas.json`](./eas.json) still defines native build profiles for when you are ready to create binaries again. Only the `development` profile flips `developmentClient: true`; it is ignored unless you explicitly run `eas build --profile development`.
- The `preview` and `production` profiles generate standard app-store binaries and do not require a custom dev client.
- Because the JavaScript bundle targets Expo Go, you can ignore the native build profiles until the project is resubmitted to the stores.

## Hosting Notes

- Updates are hosted on Expo's CDN (`https://u.expo.dev/...` as configured in `app.json`). No extra hosting work is required unless you need to self-host bundles.
- For stricter access control, consider private updates with EAS Update groups or self-hosting via `eas update --local` + uploading to your own CDN, then pointing `expo-updates` to that manifest.
- Track which git commits feed each QR code by tagging after a successful update, e.g., `git tag showcase-v2025.03.18`.

With this workflow you can iterate entirely in JavaScript, share updates instantly through Expo Go, and avoid creating a custom dev client until you are ready to submit another native binary to the stores.
