"use client"

import type React from "react"
import { NavLink } from "react-router-dom"
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react"
import { useAuthStore } from "@/store/authStore"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Ürünler", href: "/products", icon: Package },
  { name: "Siparişler", href: "/orders", icon: ShoppingCart },
  { name: "Müşteriler", href: "/customers", icon: Users },
  { name: "Ayarlar", href: "/settings", icon: Settings },
]

export const Sidebar: React.FC = () => {
  const { logout, user } = useAuthStore()

  return (
    <div className="flex flex-col w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">E-Commerce</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? "bg-primary-50 text-primary-700 border-r-2 border-primary-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-4">
          <img
            className="h-8 w-8 rounded-full"
            src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=3b82f6&color=fff`}
            alt={user?.name}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Çıkış Yap
        </button>
      </div>
    </div>
  )
}
