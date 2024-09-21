## Description of the Process

1. **Setup Node.js Environment**: The project uses Node.js version 18. To set up the environment, we use the `actions/setup-node@v3` action in our GitHub Actions workflows.
2. **Install Dependencies**: The workflow installs all the dependencies listed in `package.json` using `npm install`.

3. **Lint Checks**: We perform lint checks on JavaScript and JSX files that have changed. This is achieved using ESLint, configured to run only on the files modified in the last commit or pull request.

4. **Unit Tests**: After lint checks, unit tests are executed to ensure that all functionalities work as expected. The tests are run using the `npm test` command.

5. **SonarCloud Code Quality**: This is usually done in SonarCloud settings and GitHub marketplace by installing SonarCloud on your repository.

6. **Merging Changes**: If both lint checks and unit tests pass, the workflow automatically merges the changes from the feature branch to the `dev` branch. This step is conditional on the success of the previous steps to ensure code quality.

## Project Repository

**Client side repo**: `https://github.com/Hazrat16/urban-eats-client`

**Server side repo**: `https://github.com/Hazrat16/urban-eats-server`
