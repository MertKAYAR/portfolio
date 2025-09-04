"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { useProductStore } from "@/store/productStore"
import type { Product } from "@/types"
import { LoadingSpinner } from "@/components/UI/LoadingSpinner"

interface ProductFormProps {
  product?: Product | null
  onClose: () => void
}

interface ProductFormData {
  title: string
  description: string
  price: number
  category: string
  image: string
  stock: number
}

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
  "books",
  "home & garden",
  "sports",
  "toys",
]

export const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
  const { addProduct, updateProduct, isLoading } = useProductStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: product
      ? {
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          image: product.image,
          stock: product.stock,
        }
      : {
          title: "",
          description: "",
          price: 0,
          category: categories[0],
          image: "",
          stock: 0,
        },
  })

  const onSubmit = async (data: ProductFormData) => {
    try {
      if (product) {
        await updateProduct(product.id, data)
      } else {
        await addProduct({
          ...data,
          rating: { rate: 0, count: 0 },
        })
      }
      onClose()
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="label">Ürün Adı</label>
        <input
          type="text"
          {...register("title", { required: "Ürün adı gereklidir" })}
          className="input"
          placeholder="Ürün adını girin"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="label">Açıklama</label>
        <textarea
          {...register("description", { required: "Açıklama gereklidir" })}
          className="input min-h-[100px] resize-none"
          placeholder="Ürün açıklamasını girin"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">Fiyat (₺)</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Fiyat gereklidir",
              min: { value: 0, message: "Fiyat 0'dan büyük olmalıdır" },
            })}
            className="input"
            placeholder="0.00"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label className="label">Stok</label>
          <input
            type="number"
            {...register("stock", {
              required: "Stok miktarı gereklidir",
              min: { value: 0, message: "Stok 0'dan küçük olamaz" },
            })}
            className="input"
            placeholder="0"
          />
          {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
        </div>
      </div>

      <div>
        <label className="label">Kategori</label>
        <select {...register("category", { required: "Kategori seçimi gereklidir" })} className="input">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label className="label">Ürün Resmi URL</label>
        <input
          type="url"
          {...register("image", { required: "Ürün resmi gereklidir" })}
          className="input"
          placeholder="https://example.com/image.jpg"
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button type="button" onClick={onClose} className="btn btn-secondary" disabled={isLoading}>
          İptal
        </button>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              {product ? "Güncelleniyor..." : "Ekleniyor..."}
            </>
          ) : product ? (
            "Güncelle"
          ) : (
            "Ekle"
          )}
        </button>
      </div>
    </form>
  )
}
