import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User } from "@/types"

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (data: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (email === "admin@example.com" && password === "admin123") {
          const user: User = {
            id: 1,
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            createdAt: new Date().toISOString(),
          }

          set({ user, isAuthenticated: true })
          return true
        }

        return false
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },

      updateProfile: (data: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({ user: { ...currentUser, ...data } })
        }
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
