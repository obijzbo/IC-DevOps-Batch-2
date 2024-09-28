# Urban Eats

## Overview

Urban Eats is a web application with a React frontend and a Node.js backend. The project is containerized using Docker and Docker Compose, allowing for easy setup and deployment.

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## How to Run

### Step 2: Build and Run with Docker Compose

```bash
docker-compose up --build
```

### Step 3: Access the Application

- **Client**: `http://localhost:5173`
- **Server**: `http://localhost:5000`

### Step 4: Stop the Application

```bash
docker-compose down
```

## Useful Commands

- **Check Logs**:

  ```bash
  docker-compose logs -f
  ```

- **Rebuild Specific Service**:

  ```bash
  docker-compose up --build <service-name>
  ```

- **Clean Up**:
  ```bash
  docker system prune -f
  ```
