FROM node:20-alpine

WORKDIR /app

# Enable corepack for Yarn 4
RUN corepack enable && corepack prepare yarn@4.3.1 --activate

# Copy workspace configuration files first
COPY package.json yarn.lock .yarnrc.yml ./

# Copy only the storybook app and the UI package it needs to watch
COPY apps/storybook ./apps/storybook
COPY packages/ui ./packages/ui

# Install dependencies (this will install all workspace deps, but we only copied what we need)
RUN yarn install

WORKDIR /app/apps/storybook

# Create a proper home directory for Expo
RUN mkdir -p /app/.expo && chmod 755 /app/.expo
ENV HOME=/app

# Disable Expo telemetry and analytics to avoid file system issues
ENV EXPO_NO_TELEMETRY=1
ENV EXPO_NO_UPDATE_CHECK=1
ENV CI=1

# Expose the port that Expo uses
EXPOSE 8081
ENV EXPO_PUBLIC_STORYBOOK_ENABLED=true  

# Run Storybook in web mode (use lan for container networking, port flag is ignored for web)
CMD ["yarn", "storybook:web", "--", "--host", "lan"]