#!/bin/bash

# Simple wrapper script to manage Docker commands for the project

# Function to display usage
usage() {
    echo "Usage: $0 {logs|run|clean|db-populate|db-destroy}"
    exit 1
}

# Function to show logs for a service
logs() {
    if [ -z "$1" ]; then
        echo "Please provide a service name."
        exit 1
    fi
    docker logs -f "$1"
}

# Function to run a service
run() {
    if [ -z "$1" ]; then
        echo "Please provide a service name."
        exit 1
    fi
    docker-compose up "$1"
}

# Function to clean up Docker images and containers
clean() {
    if [ "$1" == "images" ]; then
        docker image prune -f
    elif [ "$1" == "containers" ]; then
        docker container prune -f
    elif [ "$1" == "everything" ]; then
        docker system prune -f
    else
        echo "Please specify what to clean: images, containers, or everything."
        exit 1
    fi
}

# Function to populate the database
db_populate() {
    echo "Populating the database..."
    # Example command to run your database seeder script or Prisma commands
    docker-compose exec backend npx prisma db seed
}

# Function to destroy the database
db_destroy() {
    echo "Destroying the database..."
    # Here you can run commands to drop the database or clear its contents
    docker-compose exec backend npx prisma migrate reset --force
}

# Check for arguments
if [ $# -eq 0 ]; then
    usage
fi

# Process commands
case $1 in
    logs)
        logs "$2"
        ;;
    run)
        run "$2"
        ;;
    clean)
        clean "$2"
        ;;
    db-populate)
        db_populate
        ;;
    db-destroy)
        db_destroy
        ;;
    *)
        usage
        ;;
esac
