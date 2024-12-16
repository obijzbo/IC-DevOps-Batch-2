Your README looks comprehensive, but it's missing a couple of details about repository configuration and permissions. Here’s an updated version that includes these aspects:

---

# Fullstack CI Pipeline with GitHub Actions (Next.js & NestJS)

This repository demonstrates how to set up a Continuous Integration (CI) pipeline for a project that includes both a Next.js frontend and a NestJS backend using GitHub Actions. The pipeline is configured to automatically lint, check code quality, and run unit tests for both applications on every push or pull request to the `feature/*` branches.

## Project Overview

This project combines Next.js, a powerful React framework for server-rendered and static web applications, with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. The CI pipeline ensures that every code change in both the frontend and backend is automatically tested and validated, maintaining the integrity and quality of the codebase.

## CI Pipeline Overview

The CI pipeline is defined in the `.github/workflows/ci.yml` file. Here's a breakdown of the steps involved:

1. **Trigger Events**:

   - The workflow is triggered on `push` events to any `feature/*` branches.
   - The workflow also triggers on `pull_request` events targeting these branches.

2. **Jobs**:

   - **Frontend Linter**: Runs ESLint to check for code style issues in the Next.js frontend.
   - **Frontend Code Quality**: Performs additional code quality checks for the Next.js frontend.
   - **Frontend Unit Tests**: Executes unit tests for the Next.js frontend.
   - **Backend Linter**: Runs ESLint or TSLint to check for code style issues in the NestJS backend.
   - **Backend Code Quality**: Performs additional code quality checks for the NestJS backend.
   - **Backend Unit Tests**: Executes unit tests for the NestJS backend.
   - **Merge Feature Branch to Dev**: Merges the feature branch into the `dev` branch upon successful completion of previous jobs.

3. **Dependencies**:
   - The project uses `pnpm` for package management, which is set up in the workflow before running any jobs.

## Repository Configuration

To ensure smooth operation of the CI pipeline, please note the following:

1. **Branch Configuration**:

   - Your repository must have a `dev` branch where feature branches will be merged.

2. **Permissions**:
   - Ensure that the repository has the appropriate permissions to allow the CI workflow to read and write for merging operations. This typically requires write access to the `dev` branch and the ability to push changes.

## How to Set Up

To replicate this CI pipeline in your own project, follow these steps:

1. **Create a Next.js and NestJS Project**:

   ```bash
   pnpm dlx create-next-app@latest frontend
   pnpm dlx nest new backend
   ```

2. **Create a GitHub Repository**:

   - Go to GitHub and create a new repository.
   - Push your Next.js and NestJS project to this repository.

3. **Add the CI Workflow**:

   - Create a `.github/workflows/ci.yml` file in your repository with the following content:

   ```yaml
   name: Fullstack CI Pipeline (NextJs & NestJs)

   on:
     push:
       branches:
         - "feature/*"

   jobs:
     lint_frontend:
       name: Lint Next.js (Frontend)
       runs-on: ubuntu-latest

       steps:
         - name: Checkout Code
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"

         - name: Install pnpm
           run: npm install -g pnpm

         - name: Install Frontend Dependencies
           working-directory: ./frontend
           run: pnpm install

         - name: Run Frontend Linter
           working-directory: ./frontend
           run: pnpm lint

     lint_backend:
       name: Lint Nest.js (Backend)
       runs-on: ubuntu-latest
       needs: lint_frontend

       steps:
         - name: Checkout Code
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"

         - name: Install pnpm
           run: npm install -g pnpm

         - name: Install Backend Dependencies
           working-directory: ./backend
           run: pnpm install

         - name: Run Backend Linter
           working-directory: ./backend
           run: pnpm lint

     code_quality_frontend:
       name: Code Quality Check - Next.js
       runs-on: ubuntu-latest
       needs: lint_backend

       steps:
         - name: Checkout Code
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"

         - name: Install pnpm
           run: npm install -g pnpm

         - name: Install Frontend Dependencies
           working-directory: ./frontend
           run: pnpm install

         - name: Run Code Quality Check (Frontend)
           working-directory: ./frontend
           run: pnpm run code-quality

     code_quality_backend:
       name: Code Quality Check - Nest.js
       runs-on: ubuntu-latest
       needs: code_quality_frontend

       steps:
         - name: Checkout Code
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"

         - name: Install pnpm
           run: npm install -g pnpm

         - name: Install Backend Dependencies
           working-directory: ./backend
           run: pnpm install

         - name: Run Code Quality Check (Backend)
           working-directory: ./backend
           run: pnpm run code-quality

     unit_test_frontend:
       name: Run Unit Tests - Next.js
       runs-on: ubuntu-latest
       needs: code_quality_backend

       steps:
         - name: Checkout Code
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"

         - name: Install pnpm
           run: npm install -g pnpm

         - name: Install Frontend Dependencies
           working-directory: ./frontend
           run: pnpm install

         - name: Run Frontend Unit Tests
           working-directory: ./frontend
           run: pnpm test

     unit_test_backend:
       name: Run Unit Tests - Nest.js
       runs-on: ubuntu-latest
       needs: unit_test_frontend

       steps:
         - name: Checkout Code
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"

         - name: Install pnpm
           run: npm install -g pnpm

         - name: Install Backend Dependencies
           working-directory: ./backend
           run: pnpm install

         - name: Run Backend Unit Tests
           working-directory: ./backend
           run: pnpm run test

     merge_to_dev:
       name: Merge Feature Branch to Dev
       runs-on: ubuntu-latest
       needs: [unit_test_frontend, unit_test_backend]
       steps:
         - name: Checkout feature branch
           uses: actions/checkout@v3
           with:
             ref: ${{ github.ref }} # Check out the current feature branch

         - name: Set up Git
           run: |
             git config --global user.name "github-actions"
             git config --global user.email "github-actions@github.com"

         - name: Fetch dev branch
           run: git fetch origin dev

         - name: Rebase feature branch onto dev
           run: |
             git rebase origin/dev || exit 1

         - name: Push rebased feature branch
           run: git push --force-with-lease origin ${{ github.ref }}

         - name: Checkout dev branch
           run: git checkout dev

         - name: Merge rebased feature branch into dev
           run: |
             git merge ${{ github.ref }} --no-ff --no-edit || exit 1

         - name: Push merged changes to dev branch
           run: git push origin dev
   ```

4. **Commit and Push**:
   - Commit your changes and push them to your GitHub repository. The CI pipeline will automatically run for every push or pull request.

## Repository Link

You can view the full project and CI setup in the repository: [Next.js and NestJS CI/CD Pipeline with GitHub Actions](https://github.com/programmerbanna/nextjs-nestjs-ci/)

---

This README file provides an overview of the CI setup process for both Next.js and NestJS applications and includes the relevant details and steps for others to replicate the setup.
