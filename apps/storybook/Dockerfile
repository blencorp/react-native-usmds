FROM node:20-alpine

WORKDIR /app

# Enable corepack for Yarn 4
RUN corepack enable && corepack prepare yarn@4.3.1 --activate

# Copy workspace configuration files first
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy only the storybook app and the UI package it needs to watch
COPY apps/storybook ./apps/storybook
COPY packages/ui ./packages/ui

# Install dependencies (this will install all workspace deps, but we only copied what we need)
RUN yarn install

WORKDIR /app/apps/storybook

# Expose the port that Expo uses
EXPOSE 8081
ENV EXPO_PUBLIC_STORYBOOK_ENABLED=true  
# Run Storybook in web mode
CMD ["yarn", "storybook:web", "--", "--host", "lan", "--port", "8081"]