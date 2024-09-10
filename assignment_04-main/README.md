# CI/CD Pipeline Setup for GitHub Repository

## Overview

This project demonstrates the setup of a CI/CD pipeline using GitHub Actions for a repository. The pipeline includes stages for linting, code quality checks, and unit testing. It also automates the merging of feature branches into the `dev` branch upon successful CI validation.

## Repository Setup

1. **Create a New Repository**:
   - Created a new repository named `assignment-04` on GitHub.

2. **Add a Project**:
   - Added the initial project files and pushed them to the repository.

3. **Add a GitHub Actions Workflow**:
   - Created a GitHub Actions workflow file located at `.github/workflows/ci.yml` to automate the CI/CD process.

4. **Branch Structure**:
   - Created the `dev` branch:
     ```bash
     git checkout -b dev
     ```
   - The repository supports multiple feature branches prefixed with `feature/`.

5. **CI/CD Pipeline Configuration**:
   - The pipeline is triggered for commits made to any `feature/*` branches and includes the following stages:
     - **Linter**: Ensures that the code adheres to specified linting rules.
     - **Code Quality Check**: Performs static analysis to check for code quality issues.
     - **Unit Test**: Runs unit tests to ensure that the code behaves as expected.

6. **Automated Merging**:
   - Upon successful completion of all CI stages, the code from the feature branch is automatically merged into the `dev` branch.

## Workflow File

The GitHub Actions workflow file `.github/workflows/ci.yml` contains the following configuration:

```yaml
name: CI

on:
  workflow_dispatch:
  push:
    branches: [ dev ]
  pull_request:
    types: [opened, reopened]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install Docker Compose
        run: |
          sudo apt-get update
          sudo apt-get install -y docker-compose

      - name: Generate required .env file
        run: |
          echo DEBUG=True >> .env
          echo FLASK_DEBUG=1 >> .env
          echo FLASK_APP=run.py >> .env

      - name: Build containers
        run: docker-compose build

      - name: Run tests
        run: docker-compose up unit-test-container

  pylint:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.10"]
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install Docker Compose
        run: |
          sudo apt-get update
          sudo apt-get install -y docker-compose

      - name: Generate required .env file
        run: |
          echo DEBUG=True >> .env
          echo FLASK_DEBUG=1 >> .env
          echo FLASK_APP=run.py >> .env

      - name: Build containers
        run: docker-compose build

      - name: Run pylint
        run: docker-compose up pylint-container

  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Shallow clones should be disabled for better relevancy of analysis

      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@v2
        with:
          projectBaseDir: .
          args: >
            -Dsonar.projectKey=Nafija-pinky_assignment_04
            -Dsonar.organization=nafija-pinky
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

  merge:
    runs-on: ubuntu-latest
    needs: [build, pylint, sonarcloud]
    if: success()
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Ensure all branches are fetched

      - name: Set up Git config
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          
      - name: Merge feature branch into dev
        run: |
          git checkout dev
          git merge --no-ff ${{ github.head_ref }} || exit 1
          git push origin dev

