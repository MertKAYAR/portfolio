export interface User {
  id: number
  name: string
  email: string
  role: "admin" | "user"
  avatar?: string
  createdAt: string
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  rating: {
    rate: number
    count: number
  }
  createdAt: string
}

export interface Order {
  id: number
  userId: number
  products: OrderProduct[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  shippingAddress: {
    street: string
    city: string
    zipCode: string
    country: string
  }
}

export interface OrderProduct {
  productId: number
  quantity: number
  price: number
  title: string
}

export interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    zipCode: string
    country: string
  }
  totalOrders: number
  totalSpent: number
  createdAt: string
}

export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
  revenueGrowth: number
  ordersGrowth: number
}

export interface ChartData {
  name: string
  value: number
  date?: string
}
