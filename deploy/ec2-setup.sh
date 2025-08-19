#!/bin/bash

# Beautiful Portfolio Website - EC2 Initial Setup Script
# This script sets up an EC2 instance with Docker, Docker Compose, and necessary configurations

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Check if running as root or with sudo
if [[ $EUID -ne 0 ]]; then
   error "This script must be run as root or with sudo"
fi

log "Starting EC2 setup for Beautiful Portfolio Website..."

# Update system packages
log "Updating system packages..."
apt-get update -y || yum update -y 2>/dev/null || true

# Detect OS and install Docker accordingly
if command -v apt-get &> /dev/null; then
    # Ubuntu/Debian
    log "Detected Ubuntu/Debian system. Installing Docker..."

    # Install required packages
    apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release

    # Add Docker's official GPG key
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

    # Add Docker repository
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Update package index
    apt-get update -y

    # Install Docker Engine
    apt-get install -y docker-ce docker-ce-cli containerd.io

elif command -v yum &> /dev/null; then
    # Amazon Linux/CentOS/RHEL
    log "Detected Amazon Linux/CentOS/RHEL system. Installing Docker..."

    # Install Docker
    yum install -y docker

else
    error "Unsupported operating system. This script supports Ubuntu/Debian and Amazon Linux/CentOS/RHEL."
fi

# Start and enable Docker service
log "Starting and enabling Docker service..."
systemctl start docker
systemctl enable docker

# Add current user to docker group (if not root)
if [ "$SUDO_USER" ]; then
    log "Adding user $SUDO_USER to docker group..."
    usermod -aG docker "$SUDO_USER"
    info "Note: $SUDO_USER will need to log out and log back in for docker group changes to take effect"
fi

# Install Docker Compose
log "Installing Docker Compose..."
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d'"' -f4)
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create symbolic link for easier access
ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose

# Install Git if not already installed
if ! command -v git &> /dev/null; then
    log "Installing Git..."
    if command -v apt-get &> /dev/null; then
        apt-get install -y git
    elif command -v yum &> /dev/null; then
        yum install -y git
    fi
fi

# Create project directory
PROJECT_DIR="/opt/beautiful-portfolio-website"
log "Creating project directory: $PROJECT_DIR"
mkdir -p "$PROJECT_DIR"
chmod 755 "$PROJECT_DIR"

# Configure firewall rules for port 3000
log "Configuring firewall rules..."

# For Ubuntu/Debian with ufw
if command -v ufw &> /dev/null; then
    ufw --force enable
    ufw allow 22/tcp
    ufw allow 3000/tcp
    ufw --force reload
    info "UFW firewall configured to allow ports 22 (SSH) and 3000 (Application)"
fi

# For Amazon Linux/CentOS/RHEL with firewall-cmd
if command -v firewall-cmd &> /dev/null; then
    systemctl start firewalld
    systemctl enable firewalld
    firewall-cmd --permanent --add-port=3000/tcp
    firewall-cmd --permanent --add-service=ssh
    firewall-cmd --reload
    info "Firewalld configured to allow ports 22 (SSH) and 3000 (Application)"
fi

# For systems with iptables
if command -v iptables &> /dev/null && ! command -v ufw &> /dev/null && ! command -v firewall-cmd &> /dev/null; then
    # Allow SSH and application port
    iptables -A INPUT -p tcp --dport 22 -j ACCEPT
    iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
    iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

    # Save iptables rules
    if command -v iptables-save &> /dev/null; then
        iptables-save > /etc/iptables.rules
        info "Iptables rules configured and saved"
    fi
fi

# Create a simple deployment script shortcut
log "Creating deployment script shortcut..."
cat > /usr/local/bin/deploy-portfolio << 'EOF'
#!/bin/bash
cd /opt/beautiful-portfolio-website
if [ -f "deploy/docker-deploy.sh" ]; then
    bash deploy/docker-deploy.sh
else
    echo "Please clone the repository first:"
    echo "git clone https://github.com/tenam314/beautiful-portfolio-website.git /opt/beautiful-portfolio-website"
    echo "Then run: deploy-portfolio"
fi
EOF
chmod +x /usr/local/bin/deploy-portfolio

# Display system information
log "EC2 setup completed successfully!"
echo ""
echo -e "${GREEN}=== SETUP SUMMARY ===${NC}"
echo -e "${GREEN}Docker Version: ${NC}$(docker --version)"
echo -e "${GREEN}Docker Compose Version: ${NC}$(docker-compose --version)"
echo -e "${GREEN}Git Version: ${NC}$(git --version)"
echo -e "${GREEN}Project Directory: ${NC}$PROJECT_DIR"
echo -e "${GREEN}Public IP: ${NC}$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo 'Not available')"
echo ""
echo -e "${BLUE}=== NEXT STEPS ===${NC}"
echo "1. Clone the repository:"
echo "   sudo git clone https://github.com/tenam314/beautiful-portfolio-website.git $PROJECT_DIR"
echo ""
echo "2. Deploy the application:"
echo "   sudo $PROJECT_DIR/deploy/docker-deploy.sh"
echo "   OR"
echo "   sudo deploy-portfolio"
echo ""
echo "3. Access your application at:"
echo "   http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo 'YOUR_EC2_PUBLIC_IP'):3000"
echo ""
echo -e "${YELLOW}Important Security Notes:${NC}"
echo "- Ensure your EC2 Security Group allows inbound traffic on port 3000"
echo "- Consider using HTTPS and a reverse proxy (nginx) for production"
echo "- Regularly update your system and Docker images for security"
echo ""
log "Setup script completed successfully!"
