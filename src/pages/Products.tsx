"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Plus, Edit, Trash2, Search, Package } from "lucide-react"
import { useProductStore } from "@/store/productStore"
import type { Product } from "@/types"
import { formatCurrency, truncateText } from "@/utils/formatters"
import { LoadingSpinner } from "@/components/UI/LoadingSpinner"
import { Modal } from "@/components/UI/Modal"
import { ProductForm } from "@/components/Forms/ProductForm"

export const Products: React.FC = () => {
  const { products, isLoading, fetchProducts, deleteProduct } = useProductStore()
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (window.confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
      await deleteProduct(id)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setEditingProduct(null)
  }

  if (isLoading && products.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ürünler</h1>
          <p className="text-gray-600">Mağazanızdaki tüm ürünleri yönetin</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Yeni Ürün
        </button>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ürün ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card hover:shadow-md transition-shadow">
            <div className="aspect-w-1 aspect-h-1 mb-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{truncateText(product.title, 50)}</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{product.category}</span>
              </div>

              <p className="text-xs text-gray-500 line-clamp-2">{truncateText(product.description, 80)}</p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{formatCurrency(product.price)}</span>
                <span className="text-xs text-gray-500">Stok: {product.stock}</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button onClick={() => handleEdit(product)} className="p-1 text-gray-400 hover:text-primary-600">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-1 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ürün bulunamadı</h3>
          <p className="text-gray-500">
            {searchTerm ? "Arama kriterlerinize uygun ürün bulunamadı." : "Henüz hiç ürün eklenmemiş."}
          </p>
        </div>
      )}

      {/* Product Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={editingProduct ? "Ürün Düzenle" : "Yeni Ürün Ekle"}
        size="lg"
      >
        <ProductForm product={editingProduct} onClose={handleModalClose} />
      </Modal>
    </div>
  )
}
