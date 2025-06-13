-- Database Schema for Booking System

-- Create database
CREATE DATABASE IF NOT EXISTS blockchain_bookings;
USE blockchain_bookings;

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service_type VARCHAR(100) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    notes TEXT,
    payment_method ENUM('stripe', 'cryptomus') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'paid', 'cancelled', 'failed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_booking_date (booking_date),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    payment_method ENUM('stripe', 'cryptomus') NOT NULL,
    transaction_id VARCHAR(255) UNIQUE,
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payment_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    INDEX idx_booking_id (booking_id),
    INDEX idx_transaction_id (transaction_id),
    INDEX idx_status (status)
);

-- Services table (for reference)
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service_key VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    duration_hours INT DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default services
INSERT INTO services (service_key, name, description, price, duration_hours) VALUES
('custom-blockchain', 'Custom EVM Blockchain', 'Build a customized EVM-based Proof-of-Stake blockchain', 1299.00, 40),
('nft-marketplace', 'NFT Marketplace', 'Complete NFT marketplace with minting and trading features', 699.00, 25),
('defi-protocol', 'DeFi Protocol', 'Decentralized finance protocol development', 799.00, 30),
('token-creation', 'Token Creation', 'Create custom tokens on various blockchains', 149.00, 5),
('smart-contracts', 'Smart Contract Development', 'Custom smart contract development and auditing', 99.00, 2),
('blockchain-audit', 'Blockchain Security Audit', 'Comprehensive security audit of blockchain projects', 499.00, 15),
('dapp-development', 'DApp Development', 'Full-stack decentralized application development', 599.00, 20),
('consultation', 'Blockchain Consultation', 'Expert blockchain consultation and guidance', 99.00, 1);

-- Create indexes for better performance
CREATE INDEX idx_bookings_composite ON bookings(status, booking_date, created_at);
CREATE INDEX idx_transactions_composite ON transactions(status, payment_method, created_at);

-- Create a view for booking details with service information
CREATE VIEW booking_details AS
SELECT 
    b.*,
    s.name as service_name,
    s.description as service_description,
    s.duration_hours,
    t.transaction_id,
    t.payment_data,
    t.status as payment_status
FROM bookings b
LEFT JOIN services s ON b.service_type = s.service_key
LEFT JOIN transactions t ON b.id = t.booking_id;