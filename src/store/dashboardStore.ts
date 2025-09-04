import { create } from "zustand"
import type { DashboardStats, ChartData } from "@/types"

interface DashboardState {
  stats: DashboardStats | null
  revenueData: ChartData[]
  ordersData: ChartData[]
  isLoading: boolean
  fetchDashboardData: () => Promise<void>
}

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: null,
  revenueData: [],
  ordersData: [],
  isLoading: false,

  fetchDashboardData: async () => {
    set({ isLoading: true })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const stats: DashboardStats = {
      totalRevenue: 125430,
      totalOrders: 1250,
      totalProducts: 89,
      totalCustomers: 456,
      revenueGrowth: 12.5,
      ordersGrowth: 8.2,
    }

    const revenueData: ChartData[] = [
      { name: "Jan", value: 12000 },
      { name: "Feb", value: 15000 },
      { name: "Mar", value: 18000 },
      { name: "Apr", value: 22000 },
      { name: "May", value: 25000 },
      { name: "Jun", value: 28000 },
    ]

    const ordersData: ChartData[] = [
      { name: "Jan", value: 120 },
      { name: "Feb", value: 150 },
      { name: "Mar", value: 180 },
      { name: "Apr", value: 220 },
      { name: "May", value: 250 },
      { name: "Jun", value: 280 },
    ]

    set({
      stats,
      revenueData,
      ordersData,
      isLoading: false,
    })
  },
}))
