export interface Product {
  id: string;
  stock_id: string;
  name: string;
  description: string;
  price: number;
  color: string[];
  stock: Stock;
  category: Category;
  created_at: Date;
  modified_at?: Date;
}

export interface Stock {
  id: string;
  quantity: number;
  created_at: Date;
  modified_at: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  modified_at: Date;
}

export interface User {
  id: string;
  username: string;
  password: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  created_at: Date;
  modified_at: Date;
  address: UserAddress;
}

export interface UserAddress {
  id: string;
  user_id: string;
  address_line1: string;
  address_line2: string;
  district: string;
  city: string;
  phone: string;
  created_at: Date;
  modified_at: Date;
}

export interface Order {
  id: string;
  user_id: string;
  payment_id: string;
  document: number;
  order_items: OrderItem[];
  payment_details: PaymentDetails;
  shipping_address: ShippingAddress;
  user: User
  created_at: Date;
  modified_at: Date;
}

export interface OrderItem {
  id: string;
  product_id: string;
  order_id: string;
  quantity: number;
  product: Product;
  created_at: Date;
  modified_at: Date;
}

export interface PaymentDetails {
  id: string;
  order_id: string;
  amount: number;
  status: string;
  created_at: Date;
  modified_at: Date;
}

export interface ShippingAddress {
  id: string;
  order_id: string;
  address_line1: string;
  address_line2: string;
  district: string;
  city: string;
  phone: string;
  created_at: Date;
  modified_at: Date;
}
