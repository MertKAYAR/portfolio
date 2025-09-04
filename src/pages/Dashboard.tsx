"use client"

import type React from "react"
import { useEffect } from "react"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { useDashboardStore } from "@/store/dashboardStore"
import { formatCurrency, formatNumber } from "@/utils/formatters"
import { LoadingSpinner } from "@/components/UI/LoadingSpinner"

const StatCard: React.FC<{
  title: string
  value: string
  change: number
  icon: React.ReactNode
}> = ({ title, value, change, icon }) => (
  <div className="card">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <div className="flex items-center mt-1">
          {change >= 0 ? (
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className={`text-sm font-medium ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      <div className="p-3 bg-primary-50 rounded-full">{icon}</div>
    </div>
  </div>
)

export const Dashboard: React.FC = () => {
  const { stats, revenueData, ordersData, isLoading, fetchDashboardData } = useDashboardStore()

  useEffect(() => {
    fetchDashboardData()
  }, [fetchDashboardData])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">E-ticaret mağazanızın genel durumu</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Toplam Gelir"
          value={formatCurrency(stats?.totalRevenue || 0)}
          change={stats?.revenueGrowth || 0}
          icon={<DollarSign className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          title="Toplam Sipariş"
          value={formatNumber(stats?.totalOrders || 0)}
          change={stats?.ordersGrowth || 0}
          icon={<ShoppingCart className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          title="Toplam Ürün"
          value={formatNumber(stats?.totalProducts || 0)}
          change={5.2}
          icon={<Package className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          title="Toplam Müşteri"
          value={formatNumber(stats?.totalCustomers || 0)}
          change={3.8}
          icon={<Users className="h-6 w-6 text-primary-600" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gelir Trendi</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [formatCurrency(value as number), "Gelir"]} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sipariş Trendi</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [formatNumber(value as number), "Sipariş"]} />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h3>
        <div className="space-y-4">
          {[
            { action: "Yeni sipariş alındı", details: "#12345 - Ahmet Yılmaz", time: "2 dakika önce" },
            { action: "Ürün stoku güncellendi", details: "iPhone 15 Pro - 5 adet eklendi", time: "15 dakika önce" },
            { action: "Yeni müşteri kaydı", details: "Ayşe Demir - ayse@example.com", time: "1 saat önce" },
            { action: "Sipariş teslim edildi", details: "#12340 - Mehmet Kaya", time: "2 saat önce" },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.details}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
