#This repo contains ansible playbook to install docker on a remote machine
https://github.com/haiderkn/localdev



# Dockerized Frontend
https://github.com/haiderkn/frontend-service

# Dockerized Frontend

This repository contains a Vite-powered React application that has been dockerized for easy deployment and consistent development environments.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Step 1: Clone the repository

```bash
git clone https://github.com/haiderkn/frontend-service.git
cd frontend-service
```

### Step 2: Dockerize the Application

The application has already been set up for Docker using the following key files:

- **Dockerfile**: Defines the steps for building the Docker image.
- **docker-compose.yml**: Manages the container, builds the image, and maps the necessary ports.

### Dockerfile

The Dockerfile is used to create the production-ready image of the React application:

```Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite app for production
RUN npm run build

# Install a static file server to serve the production build
RUN npm install -g serve

# Expose the port that your app will run on
EXPOSE 4173

# Serve the built files using 'serve'
CMD ["serve", "-s", "dist", "-l", "4173"]
```

### Docker Compose File

The `docker-compose.yml` file simplifies running the containerized application:

```yaml
version: "3.8"

services:
  frontend:
    build: .
    ports:
      - "4173:4173"
    environment:
      NODE_ENV: production
    command: serve -s dist -l 4173
```

### Step 3: Build and Run the Container

To build and run the container, use the following commands:

1. **Build the Docker image**:

   ```bash
   docker-compose up --build
   ```

2. **Access the application**:

   Once the container is running, the application will be accessible at:

   ```
   http://localhost:4173
   ```

### Step 4: Troubleshooting

If you encounter any issues, check the following:
- Ensure Docker and Docker Compose are installed and running.
- Check the logs from the container by running:

  ```bash
  docker-compose logs frontend
  ```

## Key Points

- **Dockerfile**: Builds the Vite-powered React app and serves it using `serve`.
- **docker-compose.yml**: Simplifies the process of building and running the container.
- **Port 4173**: The app is exposed on port 4173, which is used by Vite's preview mode.

## Conclusion

This setup allows you to run your React app in a containerized environment, ensuring consistency across development and production environments. 