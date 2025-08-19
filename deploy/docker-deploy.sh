#!/bin/bash

# Beautiful Portfolio Website - Docker Deployment Script for EC2
# This script pulls the latest code, builds the Docker image, and deploys the container

set -e  # Exit on any error

# Configuration
REPO_URL="https://github.com/tenam314/beautiful-portfolio-website.git"
PROJECT_DIR="/opt/beautiful-portfolio-website"
CONTAINER_NAME="beautiful-portfolio"
IMAGE_NAME="beautiful-portfolio"
PORT="3000"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Check if running as root or with sudo
if [[ $EUID -ne 0 ]]; then
   error "This script must be run as root or with sudo"
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    error "Docker is not installed. Please run the ec2-setup.sh script first."
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    error "Docker Compose is not installed. Please run the ec2-setup.sh script first."
fi

log "Starting deployment process..."

# Create project directory if it doesn't exist
if [ ! -d "$PROJECT_DIR" ]; then
    log "Creating project directory: $PROJECT_DIR"
    mkdir -p "$PROJECT_DIR"
fi

# Navigate to project directory
cd "$PROJECT_DIR"

# Clone or update repository
if [ -d ".git" ]; then
    log "Updating existing repository..."
    git fetch origin
    git reset --hard origin/main
else
    log "Cloning repository..."
    rm -rf * .* 2>/dev/null || true
    git clone "$REPO_URL" .
fi

# Stop existing container if running
if docker ps | grep -q "$CONTAINER_NAME"; then
    log "Stopping existing container..."
    docker stop "$CONTAINER_NAME" || warn "Failed to stop container"
fi

# Remove existing container
if docker ps -a | grep -q "$CONTAINER_NAME"; then
    log "Removing existing container..."
    docker rm "$CONTAINER_NAME" || warn "Failed to remove container"
fi

# Remove old image to force rebuild
if docker images | grep -q "$IMAGE_NAME"; then
    log "Removing old Docker image..."
    docker rmi "$IMAGE_NAME" 2>/dev/null || warn "Failed to remove old image"
fi

# Build new Docker image
log "Building Docker image..."
docker build -t "$IMAGE_NAME" . || error "Failed to build Docker image"

# Run new container
log "Starting new container..."
docker run -d \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    -p "$PORT:3000" \
    "$IMAGE_NAME" || error "Failed to start container"

# Wait for container to be healthy
log "Waiting for container to be healthy..."
timeout=60
while [ $timeout -gt 0 ]; do
    if docker ps | grep -q "$CONTAINER_NAME.*healthy\|Up.*seconds"; then
        log "Container is running successfully!"
        break
    fi
    sleep 2
    timeout=$((timeout-2))
done

if [ $timeout -le 0 ]; then
    error "Container failed to start properly"
fi

# Clean up unused Docker resources
log "Cleaning up unused Docker resources..."
docker system prune -f || warn "Failed to clean up Docker resources"

# Display deployment info
log "Deployment completed successfully!"
echo -e "${GREEN}Container Name: ${NC}$CONTAINER_NAME"
echo -e "${GREEN}Image Name: ${NC}$IMAGE_NAME"
echo -e "${GREEN}Port: ${NC}$PORT"
echo -e "${GREEN}Status: ${NC}$(docker ps --filter name=$CONTAINER_NAME --format 'table {{.Status}}')"
echo -e "${GREEN}Application URL: ${NC}http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4):$PORT"

log "Deployment script completed successfully!"
