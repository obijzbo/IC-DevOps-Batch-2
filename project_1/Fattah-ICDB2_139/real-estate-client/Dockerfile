FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

# Create a non-root user
# RUN adduser -u 5678 --disabled-password --gecos "" appuser

# USER appuser

# Stage 2: Build the React app
FROM base AS build

RUN npm run build

# Stage 3: Serve the React app
FROM node:20-alpine AS production

WORKDIR /app

# Install serve globally
RUN npm install serve

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]

# Stage 4: Unit testing
FROM base AS unit_test

CMD ["npm", "test"]


FROM base AS development

RUN npm run dev

EXPOSE 5173

CMD [ "npm","run","dev" ]