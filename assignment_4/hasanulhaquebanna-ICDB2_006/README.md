# Next.js CI Pipeline with GitHub Actions

This repository demonstrates how to set up a Continuous Integration (CI) pipeline for a Next.js application using GitHub Actions. The pipeline is configured to automatically lint, check code quality, and run unit tests on every push or pull request to the `feature/*` branches.

## Project Overview

This project is built with Next.js, a powerful React framework for building server-rendered and static web applications. The CI pipeline ensures that every code change is automatically tested and validated, maintaining the integrity and quality of the codebase.

## CI Pipeline Overview

The CI pipeline is defined in the `.github/workflows/ci.yml` file. Here's a breakdown of the steps involved:

1. **Trigger Events**:

   - The workflow is triggered on `push` events to any `feature/*` branches.
   - The workflow also triggers on `pull_request` events targeting these branches.

2. **Jobs**:

   - **Linter**: Runs ESLint to check for code style issues.
   - **Code Quality**: Performs additional code quality checks.
   - **Unit Tests**: Executes unit tests to validate the functionality of the application.

3. **Dependencies**:
   - The project uses `pnpm` for package management, which is set up in the workflow before running any jobs.

## How to Set Up

To replicate this CI pipeline in your own project, follow these steps:

1. **Create a Next.js Project**:

   ```bash
   npx create-next-app@latest my-nextjs-app
   cd my-nextjs-app
   ```

2. **Create a GitHub Repository**:

   - Go to GitHub and create a new repository.
   - Push your Next.js project to this repository.

3. **Add the CI Workflow**:

   - Create a `.github/workflows/ci.yml` file in your repository with the following content:

   ```yaml
        name: CI Pipeline

        on:
        push:
            branches:
            - "feature/*"

        jobs:
        linter:
            runs-on: ubuntu-latest
            steps:
            - name: Checkout code
                uses: actions/checkout@v3

            - name: Set up Node.js
                uses: actions/setup-node@v3
                with:
                node-version: "18"

            - name: Install pnpm
                run: npm install -g pnpm

            - name: Install dependencies
                run: pnpm install

            - name: Run ESLint
                run: pnpm run lint

        code_quality:
            runs-on: ubuntu-latest
            needs: linter
            steps:
            - name: Checkout code
                uses: actions/checkout@v3

            - name: Set up Node.js
                uses: actions/setup-node@v3
                with:
                node-version: "18"

            - name: Install pnpm
                run: npm install -g pnpm

            - name: Install dependencies
                run: pnpm install

            - name: Run code quality check
                run: pnpm run lint

        unit_tests:
            runs-on: ubuntu-latest
            needs: code_quality
            steps:
            - name: Checkout code
                uses: actions/checkout@v3

            - name: Set up Node.js
                uses: actions/setup-node@v3
                with:
                node-version: "18"

            - name: Install pnpm
                run: npm install -g pnpm

            - name: Install dependencies
                run: pnpm install

            - name: Run unit tests
                run: pnpm test

        merge_to_dev:
            runs-on: ubuntu-latest
            needs: unit_tests
            steps:
            - name: Checkout dev branch
                uses: actions/checkout@v3
                with:
                ref: dev

            - name: Set up Git
                run: |
                git config --global user.name "github-actions"
                git config --global user.email "github-actions@github.com"

            - name: Fetch all branches
                run: git fetch origin

            - name: Extract branch name
                id: extract_branch
                run: echo "BRANCH_NAME=${GITHUB_REF#refs/heads/}" >> $GITHUB_ENV

            - name: Print branch info
                run: |
                echo "Current branch: $(git branch --show-current)"
                git branch -a
                git log --oneline -n 5

            - name: Merge feature branch to dev
                run: |
                git checkout dev
                git pull origin dev
                git merge origin/${{ env.BRANCH_NAME }} --no-ff --no-edit || exit 1
                git push origin dev

   ```

4. **Commit and Push**:
   - Commit your changes and push them to your GitHub repository. The CI pipeline will automatically run for every push or pull request.

## Repository Link

You can view the full project and CI setup in the repository: [Next.js CI/CD Pipeline with GitHub Actions](https://github.com/programmerbanna/nextjs-ci-cd)

---

This README file provides an overview of the CI setup process and includes the relevant details and steps for others to replicate the setup. It also includes a direct link to my GitHub repository, making it easy for readers to explore the project.
