import { api } from "./api"
import type { Product } from "@/types"

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await api.get("/products")
    return response.data.map((product: any) => ({
      ...product,
      stock: Math.floor(Math.random() * 100) + 10,
      createdAt: new Date().toISOString(),
    }))
  },

  async getProduct(id: number): Promise<Product> {
    const response = await api.get(`/products/${id}`)
    return {
      ...response.data,
      stock: Math.floor(Math.random() * 100) + 10,
      createdAt: new Date().toISOString(),
    }
  },

  async createProduct(product: Omit<Product, "id" | "createdAt">): Promise<Product> {
    // Simulate API call since fakestoreapi doesn't actually create
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      ...product,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }
  },

  async updateProduct(id: number, product: Partial<Product>): Promise<Product> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      id,
      ...product,
    } as Product
  },

  async deleteProduct(id: number): Promise<void> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
  },
}
