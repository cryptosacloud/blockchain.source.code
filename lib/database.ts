import mysql from 'mysql2/promise';

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'revolution_web3',
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
};

// Create connection pool for better performance
const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export interface ContactSubmission {
  id?: number;
  fullName: string;
  email: string;
  phone?: string;
  enquiryType: string;
  subject: string;
  message: string;
  honeypot?: string; // For spam prevention
  ipAddress?: string;
  userAgent?: string;
  createdAt?: Date;
}

export class DatabaseManager {
  // Create contact submission
  static async createContactSubmission(data: ContactSubmission): Promise<number> {
    try {
      const connection = await pool.getConnection();
      
      const [result] = await connection.execute(
        `INSERT INTO contact_submissions 
         (full_name, email, phone, enquiry_type, subject, message, ip_address, user_agent, created_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          data.fullName,
          data.email,
          data.phone || null,
          data.enquiryType,
          data.subject,
          data.message,
          data.ipAddress || null,
          data.userAgent || null,
        ]
      );
      
      connection.release();
      
      return (result as any).insertId;
    } catch (error) {
      console.error('Database error creating contact submission:', error);
      throw new Error('Failed to save contact submission');
    }
  }

  // Get contact submission by ID
  static async getContactSubmission(id: number): Promise<ContactSubmission | null> {
    try {
      const connection = await pool.getConnection();
      
      const [rows] = await connection.execute(
        'SELECT * FROM contact_submissions WHERE id = ?',
        [id]
      );
      
      connection.release();
      
      const submissions = rows as ContactSubmission[];
      return submissions.length > 0 ? submissions[0] : null;
    } catch (error) {
      console.error('Database error fetching contact submission:', error);
      throw new Error('Failed to fetch contact submission');
    }
  }

  // Get all contact submissions (for admin)
  static async getAllContactSubmissions(limit: number = 50, offset: number = 0): Promise<ContactSubmission[]> {
    try {
      const connection = await pool.getConnection();
      
      const [rows] = await connection.execute(
        'SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT ? OFFSET ?',
        [limit, offset]
      );
      
      connection.release();
      
      return rows as ContactSubmission[];
    } catch (error) {
      console.error('Database error fetching contact submissions:', error);
      throw new Error('Failed to fetch contact submissions');
    }
  }

  // Test database connection
  static async testConnection(): Promise<boolean> {
    try {
      const connection = await pool.getConnection();
      await connection.ping();
      connection.release();
      return true;
    } catch (error) {
      console.error('Database connection test failed:', error);
      return false;
    }
  }
}