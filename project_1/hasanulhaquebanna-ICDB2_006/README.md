# Project 1

## Setup

### Frontend (Next.js)

1. Navigate to the `my-next-app` directory:
   ```bash
   cd my-next-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend (NestJS)

1. Navigate to the `my-nest-app` directory:
   ```bash
   cd my-nest-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start:dev
   ```

### Docker

1. Build and run the containers:
   ```bash
   docker-compose up --build
   ```

### Wrapper Tool

1. Run the wrapper tool with Node.js:
   ```bash
   node wrapper.js logs service_name
   node wrapper.js run app 80
   node wrapper.js clean -everything
   ```

## Notes

- Ensure you have Docker and Node.js installed on your machine.
- Update the `DATABASE_URL` in `docker-compose.yml` as needed.
