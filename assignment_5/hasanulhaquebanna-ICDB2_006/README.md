# Assignment 5 - Docker and Ansible Setup

## Overview

This project demonstrates the installation of Docker on a remote server using Ansible and the creation of a simple Node.js (Next.js) application containerized with Docker.

## Steps to Complete the Assignment

1. **Wrote an Ansible playbook** to install Docker:

   - The playbook installs necessary packages, adds Docker’s official GPG key and repository, and installs Docker.

2. **Created a Dockerfile** for a simple Node.js (Next.js) application:

   - This Dockerfile follows best practices for Dockerfile creation, ensuring a clean and efficient build.

## Running the Application

To run the application follow the steps below:

```bash
docker build -t nextjs-prod .
docker run -d -p 3000:3000 nextjs-prod

```
