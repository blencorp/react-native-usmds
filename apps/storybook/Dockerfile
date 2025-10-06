FROM node:18-alpine

WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@10.18.1 --activate

# Copy workspace configuration files first
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./

# Copy only the storybook app and the UI package it needs to watch
COPY apps/storybook ./apps/storybook
COPY packages/ui ./packages/ui

# Install dependencies (this will install all workspace deps, but we only copied what we need)
RUN pnpm install --frozen-lockfile

WORKDIR /app/apps/storybook

# Pre-generate the web CSS file for production
RUN pnpm exec tailwindcss -i ./web.css -o ./web-generated.css --config ./tailwind.config.js --minify

# Create a proper home directory for Expo
RUN mkdir -p /app/.expo && chmod 755 /app/.expo
ENV HOME=/app

# Disable Expo telemetry and analytics to avoid file system issues
ENV EXPO_NO_TELEMETRY=1
ENV EXPO_NO_UPDATE_CHECK=1
ENV CI=1

# NativeWind environment variables for web production
ENV NODE_ENV=production
ENV EXPO_WEB_TARGET=web
ENV NATIVEWIND_OUTPUT=web

# Expose the port that Expo uses
EXPOSE 8081
ENV EXPO_PUBLIC_STORYBOOK_ENABLED=true  

# Run Storybook in web mode (use lan for container networking, disable file watching)
CMD ["pnpm", "storybook:web", "--", "--host", "lan", "--no-dev"]