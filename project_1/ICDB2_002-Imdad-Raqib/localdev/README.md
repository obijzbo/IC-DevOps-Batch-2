# Development Environment Setup

This repository contains necessary configurations for development. Follow these steps to set up your local development environment.

## Prerequisites

- Python 3
- Docker and Docker Compose
- Git

## Setup Steps

### 1. Clone Repositories

Clone both repositories in the same parent directory:

```bash
git clone https://github.com/Imdad-Rakib/DevOps-with-Docker-and-Node.git
git clone git@github.com:Imdad-Rakib/localdev.git
```

### 2. Set Up Python Virtual Environment

Navigate to the Wrapper-Tool directory in this repository:

```bash
cd localdev/Wrapper-Tool
python3 -m venv .venv
```

### 3. Activate Virtual Environment

```bash
source .venv/bin/activate
```

On Windows, use:
```
.venv\Scripts\activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Set Up Environment Variables

Set the environment variables from the env.txt file on your system and then restart the system. You may want to change the variables for you own setup.


### 6. Start Docker Containers

Navigate back to the parent directory containing both repositories, then:

```bash
docker compose up --build -d
```

### 7. Use the Database Wrapper Tool

To populate the database:
```bash
python db-wrap.py create
```

To clear the database:
```bash
python db-wrap.py delete
```

## Troubleshooting

- If you encounter permission issues with Docker, you may need to use `sudo` or add your user to the Docker group.
- Ensure all services in the Docker Compose file are running with `docker compose ps`.
- Check Docker logs with `docker compose logs` if you encounter any issues.

