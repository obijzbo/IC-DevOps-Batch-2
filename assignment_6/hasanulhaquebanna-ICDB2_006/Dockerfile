# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run lint && npm test
RUN npm prune --production

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
USER appuser
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1
CMD ["node", "src/app.js"]