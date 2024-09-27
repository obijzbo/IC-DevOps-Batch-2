#!/bin/bash

# Function to show logs for a specified container
logs() {
    if [ -z "$1" ]; then
        echo "Usage: mdt logs <service_name>"
        return
    fi
    docker logs -f "$1"
}

# Function to run a Docker container with specified arguments
run() {
    if [ -z "$1" ]; then
        echo "Usage: mdt run <app_name> [args...]"
        return
    fi
    docker run -it "$@"
}

# Function to clean up Docker resources based on the option
clean() {
    case $1 in
        -image)
            docker rmi $(docker images -q) --force
            ;;
        -everything)
            docker system prune -a -f
            ;;
        *)
            echo "Usage: mdt clean <-image or -everything>"
            ;;
    esac
}

# Function to populate the database
db_populate() {
    if [ -z "$1" ]; then
        echo "Usage: mdt db_populate <db_name>"
        return
    fi
    # Replace with your actual DB population command
    docker exec -it mongo mongo "$1" --eval 'db.populate()'
}

# Function to destroy the database
db_destroy() {
    if [ -z "$1" ]; then
        echo "Usage: mdt db_destroy <db_name>"
        return
    fi
    # Replace with your actual DB destruction command
    docker exec -it mongo mongo "$1" --eval 'db.dropDatabase()'
}

# Main function to handle command line arguments
main() {
    if [ "$#" -eq 0 ]; then
        echo "Usage: mdt <command> [options]"
        return
    fi

    case $1 in
        logs)
            logs "$2"
            ;;
        run)
            shift
            run "$@"
            ;;
        clean)
            clean "$2"
            ;;
        db_populate)
            db_populate "$2"
            ;;
        db_destroy)
            db_destroy "$2"
            ;;
        *)
            echo "Unknown command."
            echo "Available commands: logs, run, clean, db_populate, db_destroy"
            ;;
    esac
}

# Call the main function
main "$@"
