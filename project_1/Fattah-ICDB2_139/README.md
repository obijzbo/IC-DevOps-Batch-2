# Efficient Local Development: Dockerizing a Full-Stack Real Estate Project

This document outlines the process of setting up a local development environment for a full-stack real estate project. It demonstrates the dockerization of a complete application (frontend, backend, and database) with hot reloading capabilities, utilizing a separate repository for local development management.

## Overview

- Project Components: Frontend, Backend, Database
- Key Features: Docker containerization, hot reloading, custom CLI tool for environment management

## Setup Process


### 1. Dependency Installation

Each directory requires installation of necessary packages:

```bash
cd Real-estate-api && npm install
cd ../real-estate-client && npm install
cd ../localdev-real-estate-app && npm install
```

### 2. Docker Utility Tool

A custom Docker utility script is made globally available:

```bash
cd localdev-real-estate-app
npm link
```

This creates a global symlink to the `dt` (dockertool) command, so it can be run from any directory.

### 3. Environment Initialization

The Dockerized environment is started with:

```bash
dt up
```

This command initializes all necessary Docker containers for the project.

## The `dt` (dockertool) Utility

The `dt` command-line tool manages the Docker environment:

- `dt up`: Launch local development environment
- `dt down`: Bring down Docker Compose setup
- `dt clean-all`: Remove all Docker containers, images, and volumes
- `dt clean-image`: Clean unused Docker images
- `dt clean-vol`: Clean unused Docker volumes
- `dt populate`: Seed the application with sample data
- `dt cleandb`: Reset the application database
- `dt logs <service_name>`: View the logs by service name

Full list of available commands:

```bash
dt --help
```

## Benefits of This Approach

1. **Consistency**: Dockerized environments ensure uniform development across different machines and team members.
2. **Isolation**: Each component runs in its own container, preventing conflicts and simplifying dependency management.
3. **Efficiency**: Hot reloading allows for rapid development and testing cycles.
4. **Scalability**: This setup can be easily extended or replicated for larger projects.
5. **Simplified Management**: The separate localdev repository and custom CLI tool streamline environment control and maintenance.

## Advantages of a Separate LocalDev Repository

1. **Environment Control**: Centralized management of Docker configurations and environment variables.
2. **Version Control**: Easy tracking of changes to the development environment setup.
3. **Onboarding**: New team members can quickly set up a working environment by cloning a single repository.
4. **Customization**: Environment-specific scripts and tools can be added without cluttering the main project repositories.
5. **Separation of Concerns**: Keeps the main project repositories focused on application code, while development environment details are managed separately.

## Conclusion

This setup streamlines the development process for complex applications, offering a balance between ease of use and powerful features. By dockerizing the application and utilizing a separate repository for local development, teams can achieve a more efficient, consistent, and maintainable development workflow.

The approach demonstrated here can serve as a template for setting up local development environments for other multi-component projects, promoting best practices in DevOps and software development.