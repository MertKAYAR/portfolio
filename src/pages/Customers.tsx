"use client"

import type React from "react"
import { useState } from "react"
import { Search, Mail, Phone, MapPin, ShoppingBag, Users } from "lucide-react"
import type { Customer } from "@/types"
import { formatCurrency, formatDate } from "@/utils/formatters"

// Mock data
const mockCustomers: Customer[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    phone: "+90 555 123 4567",
    address: {
      street: "Atatürk Cad. No: 123",
      city: "İstanbul",
      zipCode: "34000",
      country: "Türkiye",
    },
    totalOrders: 15,
    totalSpent: 2450.75,
    createdAt: "2023-06-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    email: "ayse@example.com",
    phone: "+90 555 987 6543",
    address: {
      street: "İnönü Sok. No: 45",
      city: "Ankara",
      zipCode: "06000",
      country: "Türkiye",
    },
    totalOrders: 8,
    totalSpent: 1200.5,
    createdAt: "2023-08-22T14:15:00Z",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    email: "mehmet@example.com",
    phone: "+90 555 456 7890",
    address: {
      street: "Cumhuriyet Mah. No: 67",
      city: "İzmir",
      zipCode: "35000",
      country: "Türkiye",
    },
    totalOrders: 22,
    totalSpent: 3750.25,
    createdAt: "2023-04-10T09:45:00Z",
  },
]

export const Customers: React.FC = () => {
  const [customers] = useState<Customer[]>(mockCustomers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Müşteriler</h1>
        <p className="text-gray-600">Tüm müşterilerinizi görüntüleyin ve yönetin</p>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Müşteri ara (isim, email, telefon)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-medium">
                    {customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-500">#{customer.id}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                {customer.email}
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                {customer.phone}
              </div>

              <div className="flex items-start text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                <div>
                  <p>{customer.address.street}</p>
                  <p>
                    {customer.address.city}, {customer.address.zipCode}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-1">
                    <ShoppingBag className="h-4 w-4 text-primary-600 mr-1" />
                    <span className="text-lg font-bold text-gray-900">{customer.totalOrders}</span>
                  </div>
                  <p className="text-xs text-gray-500">Toplam Sipariş</p>
                </div>

                <div>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(customer.totalSpent)}</p>
                  <p className="text-xs text-gray-500">Toplam Harcama</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center mt-2">Üye: {formatDate(customer.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Müşteri bulunamadı</h3>
          <p className="text-gray-500">
            {searchTerm ? "Arama kriterlerinize uygun müşteri bulunamadı." : "Henüz hiç müşteri kaydı yok."}
          </p>
        </div>
      )}
    </div>
  )
}
