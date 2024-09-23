# Real Estate Project CI Pipeline

This project implements Continuous Integration (CI) pipelines using GitHub Actions for both the API and client repositories of the Real Estate application.

## Project Repositories

- API Repository: [https://github.com/AbuFattah/Real-estate-api](https://github.com/AbuFattah/Real-estate-api)
- Client Repository: [https://github.com/AbuFattah/real-estate-client](https://github.com/AbuFattah/real-estate-client)

## CI Process Overview

Our CI processes are structured differently for the API and client components:

### API Repository (Real-estate-api)

The API uses a single workflow file:

- File: `.github/workflows/ci.yml`
- Stages:
  1. Linting
  2. Testing
  3. Code Analysis (SonarCloud)
  4. Automated Merging

### Client Repository (real-estate-client)

The client uses multiple workflow files:

1. `.github/workflows/lint.yml`: Handles code linting
2. `.github/workflows/test_and_code_quality.yml`: Manages testing and code quality checks
3. `.github/workflows/automerge.yml`: Handles automated merging of branches

## Common CI Features

While the structure differs, both repositories include these key features:

1. **Linting**
   - Tool: ESLint
   - Function: Checks code style and quality on changed files

2. **Testing**
   - Function: Runs the test suite to catch regressions

3. **Code Analysis**
   - Tool: SonarCloud (in API repository)
   - Function: Performs in-depth code quality analysis

4. **Automated Merging**
   - Function: Attempts to merge feature branches into the dev branch

## Workflow Triggers

The CI workflows are typically activated on:
- Push events to main, dev, and feature branches
- Pull request events to the dev branch
- Manual dispatch (for on-demand runs)

Specific triggers may vary between workflows and repositories.

## Contributing

When contributing to this project:
1. Create a new feature branch from dev
2. Make your changes and commit them
3. Push your feature branch
4. The CI pipelines will automatically run
5. If all checks pass, the branch may be automatically merged into dev (depending on the repository)
6. If there are conflicts or the auto-merge is not set up, a pull request will be needed for manual review

Always ensure your code passes all CI checks before considering it ready for merge.

## Detailed Configuration

For a detailed view of the CI setups, please refer to the workflow files in each repository:
- API: `.github/workflows/ci.yml`
- Client: `.github/workflows/lint.yml`, `.github/workflows/test_and_code_quality.yml`, `.github/workflows/automerge.yml`