/*
  # Payment System Database Schema

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `product_id` (integer)
      - `product_title` (text)
      - `customer_name` (text)
      - `customer_email` (text)
      - `customer_phone` (text)
      - `amount` (decimal)
      - `payment_method` (enum: stripe, cryptomus)
      - `status` (enum: pending, processing, completed, failed, expired)
      - `payment_data` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `orders` table
    - Add policies for authenticated users to read their own orders
    - Add admin policies for order management
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id integer NOT NULL,
  product_title text NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  amount decimal(10,2) NOT NULL,
  payment_method text NOT NULL CHECK (payment_method IN ('stripe', 'cryptomus')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'expired')),
  payment_data jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_payment_method ON orders(payment_method);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_orders_product_id ON orders(product_id);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = customer_email);

CREATE POLICY "Users can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Admin policy (for future admin panel)
CREATE POLICY "Admins can manage all orders"
  ON orders
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email = 'admin@revolutionweb3.store'
    )
  );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_orders_updated_at
    BEFORE UPDATE ON orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create a view for order analytics
CREATE OR REPLACE VIEW order_analytics AS
SELECT 
  DATE(created_at) as order_date,
  payment_method,
  status,
  COUNT(*) as order_count,
  SUM(amount) as total_amount,
  AVG(amount) as avg_amount
FROM orders
GROUP BY DATE(created_at), payment_method, status
ORDER BY order_date DESC;

-- Create a view for customer orders
CREATE OR REPLACE VIEW customer_orders AS
SELECT 
  id,
  product_id,
  product_title,
  customer_name,
  customer_email,
  amount,
  payment_method,
  status,
  created_at,
  updated_at
FROM orders
ORDER BY created_at DESC;