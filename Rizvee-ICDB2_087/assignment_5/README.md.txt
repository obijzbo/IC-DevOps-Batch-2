# Ansible Playbook to Setup Dockerfile on Remote Ubuntu Server

This repository contains an Ansible playbook that installs Docker on a remote Ubuntu server and creates a Dockerfile for a Python application. The playbook ensures that Docker is installed, the service is running, and a specific directory with a Dockerfile is created.

## Prerequisites

Before you begin, ensure you have the following:

- Ansible installed on your local machine.
- SSH access to the remote Ubuntu server.
- The remote server should be running Ubuntu 20.04 (or a compatible version).

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/docker-setup-playbook.git
cd docker-setup-playbook
