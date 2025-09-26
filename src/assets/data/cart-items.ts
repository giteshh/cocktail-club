export interface UserProfile {
  fullName: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  orders?: CartItem[];
}

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

export interface CartDoc {
  items: CartItem[];
}

export interface OrdersDoc {
  items: any[];
}

export interface Order {
  items: CartItem[];
  total: number;
  date: any;
  paymentId?: string;
  status?: string; // 'pending', 'completed'
  createdAt: any;
  id: string;
}
