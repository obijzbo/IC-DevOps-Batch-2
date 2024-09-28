# Project 1

## Setup

### Frontend (Next.js)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
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

1. Navigate to the `backend` directory:
   ```bash
   cd backend
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

### MDT Script

1. Make the `mdt.sh` script executable:

   ```bash
   chmod +x mdt.sh
   ```

2. Use the `mdt.sh` script to manage Docker and database operations:

   - View logs for a service:

     ```bash
     ./mdt.sh logs service_name
     ```

   - Run a service:

     ```bash
     ./mdt.sh run service_name
     ```

   - Clean up Docker images, containers, or the entire system:

     ```bash
     ./mdt.sh clean images
     ./mdt.sh clean containers
     ./mdt.sh clean everything
     ```

   - Populate the database:

     ```bash
     ./mdt.sh db-populate
     ```

   - Destroy the database:
     ```bash
     ./mdt.sh db-destroy
     ```

## Notes

- Ensure Docker and Node.js installed on the machine.
- Update the `DATABASE_URL` in `docker-compose.yml` as needed.
