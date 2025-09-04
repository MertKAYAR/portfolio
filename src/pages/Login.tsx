"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/authStore"
import { LoadingSpinner } from "@/components/UI/LoadingSpinner"

interface LoginFormData {
  email: string
  password: string
}

export const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>()

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const onSubmit = async (data: LoginFormData) => {
    const success = await login(data.email, data.password)
    if (!success) {
      setError("root", { message: "Geçersiz e-posta veya şifre" })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Paneli</h2>
          <p className="mt-2 text-center text-sm text-gray-600">E-ticaret yönetim sistemi</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="label">E-posta</label>
              <input
                type="email"
                {...register("email", {
                  required: "E-posta gereklidir",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Geçerli bir e-posta adresi girin",
                  },
                })}
                className="input"
                placeholder="admin@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="label">Şifre</label>
              <input
                type="password"
                {...register("password", { required: "Şifre gereklidir" })}
                className="input"
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
          </div>

          {errors.root && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
              {errors.root.message}
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 text-blue-600 px-4 py-3 rounded-md text-sm">
            <p>
              <strong>Demo Giriş Bilgileri:</strong>
            </p>
            <p>E-posta: admin@example.com</p>
            <p>Şifre: admin123</p>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Giriş yapılıyor...
              </>
            ) : (
              "Giriş Yap"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
