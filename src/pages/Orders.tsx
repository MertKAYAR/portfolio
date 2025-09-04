"use client"

import type React from "react"
import { useState } from "react"
import { Search, Filter, Eye, Package, Truck, CheckCircle, XCircle } from "lucide-react"
import type { Order } from "@/types"
import { formatCurrency, formatDate } from "@/utils/formatters"

// Mock data
const mockOrders: Order[] = [
  {
    id: 1001,
    userId: 1,
    products: [
      { productId: 1, quantity: 2, price: 299.99, title: "iPhone 15" },
      { productId: 2, quantity: 1, price: 49.99, title: "Phone Case" },
    ],
    total: 649.97,
    status: "processing",
    createdAt: "2024-01-15T10:30:00Z",
    shippingAddress: {
      street: "Atatürk Cad. No: 123",
      city: "İstanbul",
      zipCode: "34000",
      country: "Türkiye",
    },
  },
  {
    id: 1002,
    userId: 2,
    products: [{ productId: 3, quantity: 1, price: 899.99, title: "MacBook Air" }],
    total: 899.99,
    status: "shipped",
    createdAt: "2024-01-14T15:45:00Z",
    shippingAddress: {
      street: "İnönü Sok. No: 45",
      city: "Ankara",
      zipCode: "06000",
      country: "Türkiye",
    },
  },
  {
    id: 1003,
    userId: 3,
    products: [{ productId: 4, quantity: 3, price: 29.99, title: "T-Shirt" }],
    total: 89.97,
    status: "delivered",
    createdAt: "2024-01-13T09:15:00Z",
    shippingAddress: {
      street: "Cumhuriyet Mah. No: 67",
      city: "İzmir",
      zipCode: "35000",
      country: "Türkiye",
    },
  },
]

const statusConfig = {
  pending: { label: "Beklemede", color: "bg-yellow-100 text-yellow-800", icon: Package },
  processing: { label: "İşleniyor", color: "bg-blue-100 text-blue-800", icon: Package },
  shipped: { label: "Kargoda", color: "bg-purple-100 text-purple-800", icon: Truck },
  delivered: { label: "Teslim Edildi", color: "bg-green-100 text-green-800", icon: CheckCircle },
  cancelled: { label: "İptal Edildi", color: "bg-red-100 text-red-800", icon: XCircle },
}

export const Orders: React.FC = () => {
  const [orders] = useState<Order[]>(mockOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toString().includes(searchTerm) ||
      order.products.some((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateOrderStatus = (orderId: number, newStatus: Order["status"]) => {
    // This would typically make an API call
    console.log(`Updating order ${orderId} to status: ${newStatus}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Siparişler</h1>
        <p className="text-gray-600">Tüm siparişleri görüntüleyin ve yönetin</p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Sipariş numarası veya ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input pl-10 pr-8">
              <option value="all">Tüm Durumlar</option>
              {Object.entries(statusConfig).map(([status, config]) => (
                <option key={status} value={status}>
                  {config.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const StatusIcon = statusConfig[order.status].icon
          return (
            <div key={order.id} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sipariş #{order.id}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}
                  >
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {statusConfig[order.status].label}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(order.total)}</p>
                  <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Ürünler</h4>
                  <div className="space-y-2">
                    {order.products.map((product, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {product.title} x{product.quantity}
                        </span>
                        <span className="font-medium">{formatCurrency(product.price * product.quantity)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Teslimat Adresi</h4>
                  <div className="text-sm text-gray-600">
                    <p>{order.shippingAddress.street}</p>
                    <p>
                      {order.shippingAddress.city}, {order.shippingAddress.zipCode}
                    </p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <button className="btn btn-secondary btn-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Detay
                  </button>
                </div>

                <div className="flex space-x-2">
                  {order.status === "pending" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "processing")}
                      className="btn btn-primary btn-sm"
                    >
                      İşleme Al
                    </button>
                  )}
                  {order.status === "processing" && (
                    <button onClick={() => updateOrderStatus(order.id, "shipped")} className="btn btn-primary btn-sm">
                      Kargoya Ver
                    </button>
                  )}
                  {order.status === "shipped" && (
                    <button onClick={() => updateOrderStatus(order.id, "delivered")} className="btn btn-primary btn-sm">
                      Teslim Edildi
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Sipariş bulunamadı</h3>
          <p className="text-gray-500">
            {searchTerm || statusFilter !== "all"
              ? "Arama kriterlerinize uygun sipariş bulunamadı."
              : "Henüz hiç sipariş alınmamış."}
          </p>
        </div>
      )}
    </div>
  )
}
