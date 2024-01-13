# Development stage
FROM node:21.5.0-slim AS development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start:dev"]

# Production-build stage
FROM node:21.5.0-slim AS production-build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:21.5.0-slim AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=production-build /app/dist ./dist
CMD ["npm", "run", "start"]
