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

# Cloud Run provides PORT env var, default to 8080 if not set
ENV PORT=8080
# Expose the port that will be used
EXPOSE $PORT
ENV EXPO_PUBLIC_STORYBOOK_ENABLED=true  
# Run Storybook in web mode with correct Expo CLI flags for Cloud Run
CMD ["sh", "-c", "cross-env EXPO_PUBLIC_STORYBOOK_ENABLED=true expo start --web --host 0.0.0.0 --port $PORT"]