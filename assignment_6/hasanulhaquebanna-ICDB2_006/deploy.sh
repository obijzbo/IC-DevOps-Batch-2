#!/bin/bash

# Environment variables
export DOCKER_USERNAME=""
export DOCKER_PASSWORD=""
export MONGO_ROOT_USERNAME=""
export MONGO_ROOT_PASSWORD=""
export JWT_SECRET=""

# Function to display usage
usage() {
    echo "Usage: $0 [local|production]"
    echo "  local       - Deploy using Docker Compose"
    echo "  production  - Deploy to Kubernetes cluster"
    exit 1
}

# Local deployment using Docker Compose
deploy_local() {
    echo "🚀 Starting local deployment..."

    # Build and start services
    docker-compose build
    docker-compose up -d

    # Wait for services to be healthy
    echo "⏳ Waiting for services to be healthy..."
    sleep 10

    # Check service health
    docker-compose ps

    echo "✅ Local deployment complete!"
    echo "📝 API is accessible at http://localhost:3000"
    echo "📊 MongoDB is running on port 27017"
}

# Production deployment to Kubernetes
deploy_production() {
    echo "🚀 Starting production deployment..."

    # Check kubectl access
    if ! kubectl cluster-info &> /dev/null; then
        echo "❌ Error: Cannot connect to Kubernetes cluster"
        exit 1
    }

    # Check Helm installation
    if ! helm version &> /dev/null; then
        echo "❌ Error: Helm is not installed"
        exit 1
    }

    # Create namespace if it doesn't exist
    kubectl create namespace production --dry-run=client -o yaml | kubectl apply -f -

    # Add any required secrets
    kubectl create secret generic todo-api-secrets \
        --namespace production \
        --from-literal=JWT_SECRET="$JWT_SECRET" \
        --from-literal=MONGODB_URI="mongodb://mongodb:27017/todo-app" \
        --dry-run=client -o yaml | kubectl apply -f -

    # Deploy using Helm
    helm upgrade --install todo-api ./helm \
        --namespace production \
        --set image.tag=$(git rev-parse --short HEAD) \
        --set config.nodeEnv=production \
        --set config.dbHost=mongodb \
        --wait --timeout 5m

    # Verify deployment
    echo "⏳ Verifying deployment..."
    kubectl get pods -n production
    kubectl get services -n production
    kubectl get ingress -n production

    echo "✅ Production deployment complete!"
}

# Main script logic
case "$1" in
    "local")
        deploy_local
        ;;
    "production")
        deploy_production
        ;;
    *)
        usage
        ;;
esac