#!/bin/bash

# 🚀 The Blockchain Coders - Automated Installation Script
# This script sets up the complete blockchain development platform

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# ASCII Art Banner
echo -e "${CYAN}"
cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ████████╗██╗  ██╗███████╗    ██████╗ ██╗      ██████╗     ║
║    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██║     ██╔═══██╗    ║
║       ██║   ███████║█████╗      ██████╔╝██║     ██║   ██║    ║
║       ██║   ██╔══██║██╔══╝      ██╔══██╗██║     ██║   ██║    ║
║       ██║   ██║  ██║███████╗    ██████╔╝███████╗╚██████╔╝    ║
║       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚══════╝ ╚═════╝     ║
║                                                              ║
║           ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗               ║
║          ██╔════╝██║  ██║██╔══██╗██║████╗  ██║               ║
║          ██║     ███████║███████║██║██╔██╗ ██║               ║
║          ██║     ██╔══██║██╔══██║██║██║╚██╗██║               ║
║          ╚██████╗██║  ██║██║  ██║██║██║ ╚████║               ║
║           ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝               ║
║                                                              ║
║                    CODERS INSTALLATION                       ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${PURPLE}🚀 The Blockchain Coders - Automated Installation Script${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Function to print status messages
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${PURPLE}[STEP]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to get user input with default value
get_input() {
    local prompt="$1"
    local default="$2"
    local input
    
    if [ -n "$default" ]; then
        read -p "$prompt [$default]: " input
        echo "${input:-$default}"
    else
        read -p "$prompt: " input
        echo "$input"
    fi
}

# Function to validate email
validate_email() {
    local email="$1"
    if [[ "$email" =~ ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$ ]]; then
        return 0
    else
        return 1
    fi
}

# Function to clean all caches thoroughly
clean_all_caches() {
    print_status "Performing comprehensive cache cleanup..."
    
    # Stop any running Next.js processes
    print_status "Stopping any running Next.js processes..."
    pkill -f "next" 2>/dev/null || true
    pkill -f "node.*next" 2>/dev/null || true
    sleep 2
    
    # Clean npm cache
    print_status "Clearing npm cache..."
    npm cache clean --force 2>/dev/null || true
    npm cache verify 2>/dev/null || true
    
    # Remove all build and cache directories
    print_status "Removing build and cache directories..."
    
    # Remove .next directory (Next.js build cache)
    if [ -d ".next" ]; then
        print_status "Removing .next directory..."
        rm -rf .next
        print_success ".next directory removed"
    fi
    
    # Remove node_modules
    if [ -d "node_modules" ]; then
        print_status "Removing node_modules directory..."
        rm -rf node_modules
        print_success "node_modules directory removed"
    fi
    
    # Remove lock files
    for lockfile in package-lock.json yarn.lock pnpm-lock.yaml; do
        if [ -f "$lockfile" ]; then
            print_status "Removing $lockfile..."
            rm -f "$lockfile"
            print_success "$lockfile removed"
        fi
    done
    
    # Remove build directory/symlink
    if [ -L "build" ]; then
        print_status "Removing build symlink..."
        rm -f build
        print_success "Build symlink removed"
    elif [ -d "build" ]; then
        print_status "Removing build directory..."
        rm -rf build
        print_success "Build directory removed"
    fi
    
    # Remove other potential cache directories
    for cache_dir in ".turbo" "dist" "out" ".swc" ".parcel-cache" ".cache"; do
        if [ -d "$cache_dir" ]; then
            print_status "Removing $cache_dir directory..."
            rm -rf "$cache_dir"
            print_success "$cache_dir directory removed"
        fi
    done
    
    # Clean temporary files
    print_status "Cleaning temporary files..."
    find . -name "*.tmp" -type f -delete 2>/dev/null || true
    find . -name "*.temp" -type f -delete 2>/dev/null || true
    find . -name ".DS_Store" -type f -delete 2>/dev/null || true
    
    # Clear system temp if accessible
    if [ -w "/tmp" ]; then
        print_status "Clearing system temporary files..."
        rm -rf /tmp/next-* 2>/dev/null || true
        rm -rf /tmp/webpack-* 2>/dev/null || true
    fi
    
    print_success "Comprehensive cache cleanup completed"
}

# Check system requirements
print_step "Checking system requirements..."

# Check for Node.js
if ! command_exists node; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node --version)"
    exit 1
fi

print_success "Node.js $(node --version) detected"

# Check for npm
if ! command_exists npm; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_success "npm $(npm --version) detected"

# Check for git
if ! command_exists git; then
    print_warning "Git is not installed. Some features may not work properly."
else
    print_success "Git $(git --version | cut -d' ' -f3) detected"
fi

echo ""

# Get project configuration
print_step "Project Configuration"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

PROJECT_NAME=$(get_input "Enter project name" "blockchain-coders")
PROJECT_DIR=$(get_input "Enter installation directory" "./$PROJECT_NAME")
DOMAIN=$(get_input "Enter your domain (for production)" "localhost:3000")

echo ""
print_step "Email Configuration (SMTP)"
echo -e "${YELLOW}Configure SMTP settings for contact form emails${NC}"

SMTP_HOST=$(get_input "SMTP Host" "smtp.gmail.com")
SMTP_PORT=$(get_input "SMTP Port" "587")
SMTP_USER=$(get_input "SMTP Username/Email")
while [ -z "$SMTP_USER" ]; do
    print_error "SMTP username is required"
    SMTP_USER=$(get_input "SMTP Username/Email")
done

SMTP_PASSWORD=$(get_input "SMTP Password/App Password")
while [ -z "$SMTP_PASSWORD" ]; do
    print_error "SMTP password is required"
    SMTP_PASSWORD=$(get_input "SMTP Password/App Password")
done

echo ""
print_step "Payment Configuration"
echo -e "${YELLOW}Configure payment processors (you can update these later)${NC}"

# Stripe Configuration
echo -e "${CYAN}Stripe Configuration:${NC}"
STRIPE_PUBLISHABLE_KEY=$(get_input "Stripe Publishable Key" "pk_live_51QKg0cKKaGPIKFDDT9WRxjw0MEC31MNB3g4Kz5eDYfaqwZfeHmPBq3oyNpogWuw5IUTpZeDABD5MBvOIOuvqBbw400C7iXjR2R")
STRIPE_SECRET_KEY=$(get_input "Stripe Secret Key" "sk_test_51•••••U5M")
STRIPE_WEBHOOK_SECRET=$(get_input "Stripe Webhook Secret (optional)")

# Cryptomus Configuration
echo -e "${CYAN}Cryptomus Configuration:${NC}"
CRYPTOMUS_API_KEY=$(get_input "Cryptomus API Key" "M33bUJb5aBFHm16acSO3I2BY1UTVSD8QZITioQGKu8l0Q5XpZRiGeoEZMhf8q908MzhzzKoiU3SPRLNWmVGGH1lJpOMrzuq3gLrLYfqiAx3vfWorRoq4w89ooJZeCBFR")
CRYPTOMUS_MERCHANT_ID=$(get_input "Cryptomus Merchant ID" "abeef092-f7ce-4d72-b20b-e9643637d0b4")
CRYPTOMUS_WEBHOOK_SECRET=$(get_input "Cryptomus Webhook Secret (optional)")

echo ""
print_step "Database Configuration"
echo -e "${YELLOW}Supabase will be used for the database${NC}"

SUPABASE_URL=$(get_input "Supabase URL (optional, can be configured later)")
SUPABASE_ANON_KEY=$(get_input "Supabase Anon Key (optional, can be configured later)")

echo ""
print_step "Security Configuration"
NEXTAUTH_SECRET=$(openssl rand -base64 32 2>/dev/null || echo "your_nextauth_secret_$(date +%s)")
CSRF_SECRET=$(openssl rand -base64 32 2>/dev/null || echo "your_csrf_secret_$(date +%s)")
ENCRYPTION_KEY=$(openssl rand -base64 32 2>/dev/null || echo "your_encryption_key_$(date +%s)")

print_success "Security keys generated automatically"

echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
print_step "Starting Installation..."
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Create project directory
if [ ! -d "$PROJECT_DIR" ]; then
    print_status "Creating project directory: $PROJECT_DIR"
    mkdir -p "$PROJECT_DIR"
    print_success "Project directory created"
else
    print_warning "Project directory already exists: $PROJECT_DIR"
fi

cd "$PROJECT_DIR"

# Check if this is already a Next.js project
if [ -f "package.json" ]; then
    print_status "Existing Next.js project detected, performing comprehensive cleanup..."
    
    # Perform comprehensive cache cleanup
    clean_all_caches
    
    # Fresh installation of dependencies
    print_status "Installing dependencies from package.json..."
    npm install --no-cache --prefer-offline=false
    print_success "Dependencies installed from package.json"
else
    print_status "Initializing new Next.js project..."
    
    # Clean any existing caches before creating new project
    clean_all_caches
    
    npx create-next-app@13.5.1 . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes
    print_success "Next.js project initialized"
fi

# Create environment file
print_status "Creating environment configuration..."
cat > .env << EOF
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/blockchain_bookings"
DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="blockchain_bookings"
DB_USER="your_username"
DB_PASSWORD="your_password"

# Supabase Configuration (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="$SUPABASE_ANON_KEY"

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="$STRIPE_PUBLISHABLE_KEY"
STRIPE_SECRET_KEY="$STRIPE_SECRET_KEY"
STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET"

# Cryptomus Configuration
CRYPTOMUS_API_KEY="$CRYPTOMUS_API_KEY"
CRYPTOMUS_MERCHANT_ID="$CRYPTOMUS_MERCHANT_ID"
CRYPTOMUS_WEBHOOK_SECRET="$CRYPTOMUS_WEBHOOK_SECRET"

# Application Configuration
NEXT_PUBLIC_BASE_URL="http://$DOMAIN"
NEXTAUTH_SECRET="$NEXTAUTH_SECRET"
NEXTAUTH_URL="http://$DOMAIN"

# Email Configuration (SMTP)
SMTP_HOST="$SMTP_HOST"
SMTP_PORT="$SMTP_PORT"
SMTP_USER="$SMTP_USER"
SMTP_PASSWORD="$SMTP_PASSWORD"

# Security
CSRF_SECRET="$CSRF_SECRET"
ENCRYPTION_KEY="$ENCRYPTION_KEY"

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS="5"
RATE_LIMIT_WINDOW_MS="60000"

# Logging
LOG_LEVEL="info"
LOG_FILE_PATH="./logs/app.log"
EOF

print_success "Environment file created"

# Create logs directory
mkdir -p logs
print_success "Logs directory created"

# Build the project with clean cache
print_status "Building the project with clean cache..."
npm run build
print_success "Project built successfully"

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
print_success "🎉 Installation completed successfully!"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo ""
echo -e "${CYAN}📋 Next Steps:${NC}"
echo -e "${YELLOW}1.${NC} Review and update the .env file with your actual credentials"
echo -e "${YELLOW}2.${NC} Set up your database (Supabase recommended)"
echo -e "${YELLOW}3.${NC} Configure webhook endpoints in Stripe and Cryptomus dashboards"
echo -e "${YELLOW}4.${NC} Test the contact form and payment flows"
echo -e "${YELLOW}5.${NC} Deploy to your preferred hosting platform"

echo ""
echo -e "${CYAN}🚀 Quick Start Commands:${NC}"
echo -e "${GREEN}# Start development server${NC}"
echo -e "${BLUE}cd $PROJECT_DIR && npm run dev${NC}"
echo ""
echo -e "${GREEN}# Build for production${NC}"
echo -e "${BLUE}npm run build${NC}"
echo ""
echo -e "${GREEN}# Start production server${NC}"
echo -e "${BLUE}npm start${NC}"

echo ""
echo -e "${CYAN}🔧 Troubleshooting:${NC}"
echo -e "${YELLOW}# If you encounter webpack cache errors, run:${NC}"
echo -e "${BLUE}rm -rf .next node_modules package-lock.json && npm install${NC}"

echo ""
echo -e "${CYAN}📚 Important Files:${NC}"
echo -e "${YELLOW}•${NC} .env - Environment configuration"
echo -e "${YELLOW}•${NC} CHANGELOG.md - Complete development history"
echo -e "${YELLOW}•${NC} README.md - Project documentation"
echo -e "${YELLOW}•${NC} supabase/migrations/ - Database schema"

echo ""
echo -e "${CYAN}🔗 Useful Links:${NC}"
echo -e "${YELLOW}•${NC} Stripe Dashboard: https://dashboard.stripe.com"
echo -e "${YELLOW}•${NC} Cryptomus Dashboard: https://cryptomus.com"
echo -e "${YELLOW}•${NC} Supabase Dashboard: https://supabase.com"
echo -e "${YELLOW}•${NC} Project Documentation: ./README.md"

echo ""
echo -e "${PURPLE}🎯 Your blockchain development platform is ready!${NC}"
echo -e "${CYAN}Visit: http://$DOMAIN (after starting the dev server)${NC}"

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${PURPLE}Thank you for using The Blockchain Coders installation script!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"