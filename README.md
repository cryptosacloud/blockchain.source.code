# Revolution Web3 Design Store - Complete Blockchain Development Platform

A comprehensive blockchain development platform featuring source code marketplace, fully functional contact system with SMTP email integration, and integrated payment processing with both traditional and cryptocurrency payment methods.

## 🚀 Features Overview

### 🎨 Frontend
- **Responsive Design**: Mobile-first cyberpunk aesthetic with modern CSS animations
- **Source Code Gallery**: 37+ blockchain project templates with filtering and search
- **Contact System**: Professional contact form with real-time validation
- **Payment Integration**: Support for Stripe (cards) and Cryptomus (cryptocurrency)
- **Modern UI**: shadcn/ui components with Tailwind CSS styling

### 📧 SMTP Email System (NEW)
- **Dual Email Notifications**: Automatic confirmation to users + admin notifications
- **Beautiful HTML Templates**: Cyberpunk-themed responsive email designs
- **SMTP Configuration**: Fully configurable via environment variables
- **Email Validation**: Server-side email format and deliverability checks
- **Error Handling**: Graceful fallbacks if email delivery fails

### 🗄️ Database Integration (NEW)
- **Contact Submissions**: Complete MySQL database schema for form data
- **Email Logging**: Track email delivery status and errors
- **Admin Panel Ready**: Database structure prepared for future admin interface
- **Performance Optimized**: Proper indexing and query optimization

### 🔐 Security Features (NEW)
- **Spam Prevention**: Honeypot fields and rate limiting (3 submissions/minute)
- **Input Sanitization**: XSS protection and SQL injection prevention
- **Form Validation**: Client-side and server-side validation
- **IP Tracking**: Log submission IP addresses for security monitoring

### 🛠️ Backend
- **RESTful API**: Next.js API routes with comprehensive error handling
- **Payment Processing**: Stripe and Cryptomus integration with webhooks
- **Database Operations**: MySQL connection pooling and transaction management
- **Health Checks**: System status monitoring endpoints

## 📧 SMTP Email System Details

### Email Features
- **User Confirmation Emails**: Professional branded confirmation with enquiry summary
- **Admin Notifications**: Detailed notifications with all form data and quick reply buttons
- **HTML Templates**: Responsive designs matching the cyberpunk brand aesthetic
- **Email Logging**: Track delivery status and troubleshoot issues

### Supported SMTP Providers
- **Gmail**: Full support with app passwords
- **Outlook/Hotmail**: Microsoft 365 integration
- **Custom SMTP**: Any SMTP server with TLS/SSL support
- **SendGrid**: Commercial email service integration
- **Mailgun**: Transactional email service support

### Email Template Features
- **Responsive Design**: Works on all email clients and devices
- **Brand Consistency**: Matches website's cyberpunk aesthetic
- **Interactive Elements**: Reply buttons and contact information
- **Professional Layout**: Clean, modern design with proper typography

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+
- MySQL 8.0+ or MariaDB 10.3+
- SMTP email account (Gmail, Outlook, or custom)
- Stripe account (for card payments)
- Cryptomus account (for crypto payments)

### Quick Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd revolution-web3-store
   npm install
   ```

2. **Database Setup**
   ```bash
   # Create database
   mysql -u root -p -e "CREATE DATABASE revolution_web3;"
   
   # Import schema
   mysql -u username -p revolution_web3 < supabase/migrations/20250621215202_delicate_cloud.sql
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```

### 📧 SMTP Configuration

#### Gmail Setup (Recommended)
```env
# Gmail SMTP Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your_email@gmail.com"
SMTP_PASSWORD="your_app_password"  # Generate in Google Account settings
SMTP_TLS_REJECT_UNAUTHORIZED="true"
ADMIN_EMAIL="admin@revolutionweb3.store"
```

**Gmail App Password Setup:**
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account Settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this password in `SMTP_PASSWORD`

#### Outlook/Hotmail Setup
```env
# Outlook SMTP Configuration
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your_email@outlook.com"
SMTP_PASSWORD="your_password"
SMTP_TLS_REJECT_UNAUTHORIZED="true"
```

#### Custom SMTP Server
```env
# Custom SMTP Configuration
SMTP_HOST="mail.yourdomain.com"
SMTP_PORT="587"  # or 465 for SSL
SMTP_SECURE="false"  # true for port 465
SMTP_USER="noreply@yourdomain.com"
SMTP_PASSWORD="your_smtp_password"
SMTP_TLS_REJECT_UNAUTHORIZED="true"
```

### 🗄️ Database Configuration

```env
# Database Configuration
DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="revolution_web3"
DB_USER="your_db_username"
DB_PASSWORD="your_db_password"
DB_SSL="false"  # true for production with SSL
```

### 🔧 Complete Environment Setup

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/revolution_web3"
DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="revolution_web3"
DB_USER="your_username"
DB_PASSWORD="your_password"
DB_SSL="false"

# SMTP Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your_email@gmail.com"
SMTP_PASSWORD="your_app_password"
SMTP_TLS_REJECT_UNAUTHORIZED="true"

# Admin Email (where contact form notifications are sent)
ADMIN_EMAIL="admin@revolutionweb3.store"

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Cryptomus Configuration
CRYPTOMUS_API_KEY="your_api_key"
CRYPTOMUS_MERCHANT_ID="your_merchant_id"
CRYPTOMUS_WEBHOOK_SECRET="your_webhook_secret"

# Application Configuration
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="https://yourdomain.com"

# Security
CSRF_SECRET="your_csrf_secret_key"
ENCRYPTION_KEY="your_32_character_encryption_key"

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS="3"
RATE_LIMIT_WINDOW_MS="60000"

# Environment
NODE_ENV="production"
```

## 📊 Database Schema

### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
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
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Email Logs Table
```sql
CREATE TABLE email_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NULL,
    email_type ENUM('user_confirmation', 'admin_notification') NOT NULL,
    recipient_email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    status ENUM('sent', 'failed', 'pending') DEFAULT 'pending',
    error_message TEXT NULL,
    sent_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔌 API Endpoints

### Contact Form API
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Health check (database + email config)

### Payment APIs
- `POST /api/payments/create` - Create payment intent
- `POST /api/webhooks/stripe` - Stripe webhook handler
- `POST /api/webhooks/cryptomus` - Cryptomus webhook handler

### Booking APIs
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details

## 🧪 Testing the Contact Form

### 1. Test Form Submission
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "enquiryType": "general",
    "subject": "Test Enquiry",
    "message": "This is a test message"
  }'
```

### 2. Test System Health
```bash
curl http://localhost:3000/api/contact
```

Expected response:
```json
{
  "status": "ok",
  "database": "connected",
  "email": "configured",
  "timestamp": "2024-12-21T10:30:00.000Z"
}
```

### 3. Test Email Delivery
1. Submit a form through the website
2. Check your email for confirmation
3. Check admin email for notification
4. Verify database entry was created

## 🔐 Security Features

### Spam Prevention
- **Honeypot Fields**: Hidden fields to catch bots
- **Rate Limiting**: Max 3 submissions per minute per IP
- **Input Validation**: Client and server-side validation
- **Email Verification**: Real email format checking

### Data Protection
- **Input Sanitization**: XSS prevention
- **SQL Injection Prevention**: Parameterized queries
- **IP Logging**: Track submission sources
- **Error Handling**: Secure error messages

### Form Security
```javascript
// Example validation
const validation = FormValidator.validateContactForm(formData);
if (!validation.isValid) {
  return NextResponse.json(
    { error: 'Validation failed', details: validation.errors },
    { status: 400 }
  );
}
```

## 📈 Monitoring & Analytics

### Email Delivery Monitoring
```sql
-- Check email delivery status
SELECT 
  email_type,
  status,
  COUNT(*) as count
FROM email_logs 
GROUP BY email_type, status;

-- Recent failed emails
SELECT * FROM email_logs 
WHERE status = 'failed' 
ORDER BY created_at DESC 
LIMIT 10;
```

### Contact Form Analytics
```sql
-- Submissions by enquiry type
SELECT 
  enquiry_type,
  COUNT(*) as submissions,
  DATE(created_at) as date
FROM contact_submissions 
GROUP BY enquiry_type, DATE(created_at)
ORDER BY date DESC;

-- Recent submissions
SELECT * FROM contact_submissions_report 
LIMIT 20;
```

## 🚀 Deployment

### Production Checklist
- [ ] Set production environment variables
- [ ] Configure production database with SSL
- [ ] Set up SMTP with reliable email provider
- [ ] Configure webhook endpoints
- [ ] Test email delivery end-to-end
- [ ] Set up monitoring and logging
- [ ] Configure SSL certificates
- [ ] Test payment flows

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL="mysql://user:pass@prod-db:3306/revolution_web3?ssl=true"
SMTP_HOST="smtp.gmail.com"
SMTP_USER="noreply@yourdomain.com"
ADMIN_EMAIL="admin@yourdomain.com"
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
```

### Email Provider Recommendations

#### For High Volume (1000+ emails/month)
- **SendGrid**: Reliable with good deliverability
- **Mailgun**: Developer-friendly with APIs
- **Amazon SES**: Cost-effective for large volumes

#### For Low Volume (< 1000 emails/month)
- **Gmail**: Free with app passwords
- **Outlook**: Free with Microsoft account
- **Custom SMTP**: Your hosting provider's SMTP

## 🛠️ Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Database Migrations
```bash
# Apply new migrations
mysql -u username -p revolution_web3 < supabase/migrations/new_migration.sql
```

## 📚 File Structure

```
revolution-web3-store/
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form API
│   │   ├── bookings/route.ts         # Booking management
│   │   └── webhooks/                 # Payment webhooks
│   ├── contact/page.tsx              # Contact form page
│   └── ...
├── lib/
│   ├── database.ts                   # Database operations
│   ├── email.ts                      # Email service
│   ├── validation.ts                 # Form validation
│   └── ...
├── supabase/migrations/              # Database schema
├── .env.example                      # Environment template
└── README.md                         # This file
```

## 🔧 Troubleshooting

### Email Issues
1. **Emails not sending**: Check SMTP credentials and firewall
2. **Gmail authentication**: Ensure 2FA is enabled and app password is used
3. **Emails in spam**: Configure SPF/DKIM records for your domain
4. **Connection timeout**: Check SMTP port and security settings

### Database Issues
1. **Connection failed**: Verify database credentials and server status
2. **Table not found**: Run the migration SQL file
3. **Permission denied**: Check database user permissions

### Common Errors
```bash
# Test database connection
mysql -h localhost -u username -p revolution_web3

# Test SMTP connection
telnet smtp.gmail.com 587

# Check application logs
tail -f logs/app.log
```

## 📞 Support

For technical support:
- **Email**: hello@revolutionweb3.store
- **Documentation**: Check the `/docs` folder
- **Issues**: Create an issue in the repository
- **Health Check**: Visit `/api/contact` for system status

## 📄 License

This project is proprietary software. All rights reserved.

---

## 🎯 Recent Updates

### v2.0.0 - SMTP Email Integration
- ✅ Complete contact form with database storage
- ✅ SMTP email system with beautiful HTML templates
- ✅ Spam prevention and security features
- ✅ Rate limiting and input validation
- ✅ Email delivery logging and monitoring
- ✅ Health check endpoints
- ✅ Production-ready deployment configuration

### v1.0.0 - Initial Release
- ✅ Source code marketplace with 37+ products
- ✅ Payment integration (Stripe + Cryptomus)
- ✅ Responsive cyberpunk design
- ✅ Database schema and API endpoints

---

*Last Updated: December 2024*  
*Version: 2.0.0*  
*Status: Production Ready with Full Email Integration* 🚀📧