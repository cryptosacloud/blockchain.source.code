-- Revolution Web3 Design Store - Contact Form Database Schema
-- This file creates the necessary database structure for the contact form

-- Create database (uncomment if needed)
-- CREATE DATABASE revolution_web3;
-- USE revolution_web3;

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NULL,
    enquiry_type VARCHAR(100) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45) NULL,
    user_agent TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for better performance
    INDEX idx_email (email),
    INDEX idx_enquiry_type (enquiry_type),
    INDEX idx_created_at (created_at),
    INDEX idx_ip_address (ip_address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: Create admin users table for future admin panel
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: Create email logs table to track sent emails
CREATE TABLE IF NOT EXISTS email_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NULL,
    email_type ENUM('user_confirmation', 'admin_notification') NOT NULL,
    recipient_email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    status ENUM('sent', 'failed', 'pending') DEFAULT 'pending',
    error_message TEXT NULL,
    sent_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (submission_id) REFERENCES contact_submissions(id) ON DELETE SET NULL,
    INDEX idx_submission_id (submission_id),
    INDEX idx_email_type (email_type),
    INDEX idx_status (status),
    INDEX idx_sent_at (sent_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample admin user (password: 'admin123' - change this!)
-- Password hash for 'admin123' using bcrypt
INSERT IGNORE INTO admin_users (username, email, password_hash) VALUES 
('admin', 'admin@revolutionweb3.store', '$2b$10$rQZ8kHWKQVnqVQZ8kHWKQVnqVQZ8kHWKQVnqVQZ8kHWKQVnqVQZ8k');

-- Create a view for easy contact submission reporting
CREATE OR REPLACE VIEW contact_submissions_report AS
SELECT 
    cs.id,
    cs.full_name,
    cs.email,
    cs.phone,
    cs.enquiry_type,
    cs.subject,
    LEFT(cs.message, 100) as message_preview,
    cs.ip_address,
    cs.created_at,
    COUNT(el.id) as emails_sent,
    SUM(CASE WHEN el.status = 'sent' THEN 1 ELSE 0 END) as emails_delivered
FROM contact_submissions cs
LEFT JOIN email_logs el ON cs.id = el.submission_id
GROUP BY cs.id
ORDER BY cs.created_at DESC;

-- Create indexes for better query performance
CREATE INDEX idx_contact_submissions_composite ON contact_submissions(enquiry_type, created_at);
CREATE INDEX idx_email_logs_composite ON email_logs(status, email_type, sent_at);

-- Show table structure
DESCRIBE contact_submissions;
DESCRIBE admin_users;
DESCRIBE email_logs;

-- Show the view
DESCRIBE contact_submissions_report;

-- Sample queries for testing
-- SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 10;
-- SELECT * FROM contact_submissions_report LIMIT 10;
-- SELECT enquiry_type, COUNT(*) as count FROM contact_submissions GROUP BY enquiry_type;