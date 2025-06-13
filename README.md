# Revolution Web3 Design Store Blockchain Coders - Contact & Payment System

A comprehensive contact and booking system with integrated payment processing for blockchain development services.

## Features

### Frontend
- **Responsive Contact Form**: Mobile-first design with modern CSS
- **Form Validation**: HTML5 and JavaScript validation with real-time feedback
- **Service Selection**: Dropdown menu with pricing information
- **Date/Time Picker**: Calendar integration with time slot selection
- **Payment Methods**: Support for Stripe (credit/debit cards) and Cryptomus (cryptocurrency)
- **Loading States**: Visual feedback during payment processing
- **Success/Error Pages**: User-friendly confirmation and error handling

### Backend
- **RESTful API**: Next.js API routes for booking management
- **Database Integration**: MySQL/PostgreSQL support with proper schema
- **Payment Processing**: 
  - Stripe integration for traditional payments
  - Cryptomus integration for cryptocurrency payments
- **Webhook Handlers**: Real-time payment status updates
- **Security Features**: CSRF protection, input sanitization, rate limiting

### Security
- **Environment Variables**: Secure API key management
- **Input Validation**: Server-side validation and sanitization
- **SQL Injection Prevention**: Prepared statements and parameterized queries
- **XSS Protection**: Input escaping and content security policies
- **Rate Limiting**: Prevents spam and abuse

## Installation

### Prerequisites
- Node.js 18+ 
- MySQL or PostgreSQL database
- Stripe account (for card payments)
- Cryptomus account (for crypto payments)

### Setup Steps

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd blockchain-coders
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="mysql://username:password@localhost:3306/blockchain_bookings"
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   
   # Cryptomus
   CRYPTOMUS_API_KEY="your_api_key"
   CRYPTOMUS_MERCHANT_ID="your_merchant_id"
   CRYPTOMUS_WEBHOOK_SECRET="your_webhook_secret"
   
   # Application
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

3. **Database Setup**
   ```bash
   # Import the database schema
   mysql -u username -p blockchain_bookings < lib/database.sql
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking status

### Webhooks
- `POST /api/webhooks/stripe` - Stripe payment webhooks
- `POST /api/webhooks/cryptomus` - Cryptomus payment webhooks

## Database Schema

### Bookings Table
```sql
CREATE TABLE bookings (
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
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
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
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);
```

## Payment Integration

### Stripe Setup
1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Set up webhook endpoints in Stripe Dashboard:
   - Endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

### Cryptomus Setup
1. Create a Cryptomus account at https://cryptomus.com
2. Get your API credentials from the merchant dashboard
3. Configure webhook URL: `https://yourdomain.com/api/webhooks/cryptomus`

## Security Best Practices

### Input Validation
```javascript
// Example validation
const validateBooking = (data) => {
  const errors = {};
  
  if (!data.fullName?.trim()) errors.fullName = 'Name is required';
  if (!isValidEmail(data.email)) errors.email = 'Invalid email';
  if (!isValidPhone(data.phone)) errors.phone = 'Invalid phone';
  
  return { isValid: Object.keys(errors).length === 0, errors };
};
```

### Rate Limiting
```javascript
// Implement rate limiting
const rateLimiter = new Map();

const isRateLimited = (ip, maxRequests = 5, windowMs = 60000) => {
  const now = Date.now();
  const requests = rateLimiter.get(ip) || [];
  const validRequests = requests.filter(time => now - time < windowMs);
  
  if (validRequests.length >= maxRequests) return true;
  
  validRequests.push(now);
  rateLimiter.set(ip, validRequests);
  return false;
};
```

## Testing

### Payment Testing
- **Stripe Test Cards**: Use test card numbers from Stripe documentation
- **Cryptomus Testnet**: Use testnet cryptocurrencies for testing

### Form Testing
- Test all validation scenarios
- Test with different browsers and devices
- Test payment flows end-to-end

## Deployment

### Production Checklist
- [ ] Set production environment variables
- [ ] Configure production database
- [ ] Set up SSL certificates
- [ ] Configure webhook endpoints
- [ ] Test payment flows
- [ ] Set up monitoring and logging

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL="your_production_database_url"
STRIPE_SECRET_KEY="sk_live_..."
CRYPTOMUS_API_KEY="your_production_api_key"
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
```

## Monitoring and Logging

### Error Tracking
- Implement comprehensive error logging
- Set up alerts for payment failures
- Monitor webhook delivery status

### Analytics
- Track booking conversion rates
- Monitor payment method preferences
- Analyze user behavior patterns

## Support

For technical support or questions:
- Email: hello@Revolution Web3 Design Store
- Documentation: Check the `/docs` folder
- Issues: Create an issue in the repository

## License

This project is proprietary software. All rights reserved.
