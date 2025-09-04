import { create } from "zustand"
import type { Product } from "@/types"
import { productService } from "@/services/productService"

interface ProductState {
  products: Product[]
  isLoading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  addProduct: (product: Omit<Product, "id" | "createdAt">) => Promise<void>
  updateProduct: (id: number, product: Partial<Product>) => Promise<void>
  deleteProduct: (id: number) => Promise<void>
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const products = await productService.getProducts()
      set({ products, isLoading: false })
    } catch (error) {
      set({ error: "Failed to fetch products", isLoading: false })
    }
  },

  addProduct: async (productData) => {
    set({ isLoading: true })
    try {
      const newProduct = await productService.createProduct(productData)
      const products = get().products
      set({ products: [...products, newProduct], isLoading: false })
    } catch (error) {
      set({ error: "Failed to add product", isLoading: false })
    }
  },

  updateProduct: async (id, productData) => {
    set({ isLoading: true })
    try {
      const updatedProduct = await productService.updateProduct(id, productData)
      const products = get().products
      const updatedProducts = products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
      set({ products: updatedProducts, isLoading: false })
    } catch (error) {
      set({ error: "Failed to update product", isLoading: false })
    }
  },

  deleteProduct: async (id) => {
    set({ isLoading: true })
    try {
      await productService.deleteProduct(id)
      const products = get().products
      const filteredProducts = products.filter((p) => p.id !== id)
      set({ products: filteredProducts, isLoading: false })
    } catch (error) {
      set({ error: "Failed to delete product", isLoading: false })
    }
  },
}))
