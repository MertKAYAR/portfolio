"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { User, Lock, Bell, Store } from "lucide-react"
import { useAuthStore } from "@/store/authStore"
import { LoadingSpinner } from "@/components/UI/LoadingSpinner"

interface ProfileFormData {
  name: string
  email: string
  phone: string
}

interface PasswordFormData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export const Settings: React.FC = () => {
  const { user, updateProfile } = useAuthStore()

  const profileForm = useForm<ProfileFormData>({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: "+90 555 123 4567",
    },
  })

  const passwordForm = useForm<PasswordFormData>()

  const onProfileSubmit = async (data: ProfileFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    updateProfile(data)
    alert("Profil bilgileri güncellendi!")
  }

  const onPasswordSubmit = async (data: PasswordFormData) => {
    if (data.newPassword !== data.confirmPassword) {
      alert("Yeni şifreler eşleşmiyor!")
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Şifre başarıyla güncellendi!")
    passwordForm.reset()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>
        <p className="text-gray-600">Hesap ve sistem ayarlarınızı yönetin</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="card">
          <div className="flex items-center mb-6">
            <User className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Profil Bilgileri</h2>
          </div>

          <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
            <div>
              <label className="label">Ad Soyad</label>
              <input
                type="text"
                {...profileForm.register("name", { required: "Ad soyad gereklidir" })}
                className="input"
              />
              {profileForm.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">{profileForm.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="label">E-posta</label>
              <input
                type="email"
                {...profileForm.register("email", { required: "E-posta gereklidir" })}
                className="input"
              />
              {profileForm.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{profileForm.formState.errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="label">Telefon</label>
              <input type="tel" {...profileForm.register("phone")} className="input" />
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={profileForm.formState.isSubmitting}>
              {profileForm.formState.isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Güncelleniyor...
                </>
              ) : (
                "Profili Güncelle"
              )}
            </button>
          </form>
        </div>

        {/* Password Settings */}
        <div className="card">
          <div className="flex items-center mb-6">
            <Lock className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Şifre Değiştir</h2>
          </div>

          <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
            <div>
              <label className="label">Mevcut Şifre</label>
              <input
                type="password"
                {...passwordForm.register("currentPassword", { required: "Mevcut şifre gereklidir" })}
                className="input"
              />
              {passwordForm.formState.errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">{passwordForm.formState.errors.currentPassword.message}</p>
              )}
            </div>

            <div>
              <label className="label">Yeni Şifre</label>
              <input
                type="password"
                {...passwordForm.register("newPassword", {
                  required: "Yeni şifre gereklidir",
                  minLength: { value: 6, message: "Şifre en az 6 karakter olmalıdır" },
                })}
                className="input"
              />
              {passwordForm.formState.errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">{passwordForm.formState.errors.newPassword.message}</p>
              )}
            </div>

            <div>
              <label className="label">Yeni Şifre Tekrar</label>
              <input
                type="password"
                {...passwordForm.register("confirmPassword", { required: "Şifre tekrarı gereklidir" })}
                className="input"
              />
              {passwordForm.formState.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{passwordForm.formState.errors.confirmPassword.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={passwordForm.formState.isSubmitting}>
              {passwordForm.formState.isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Güncelleniyor...
                </>
              ) : (
                "Şifreyi Güncelle"
              )}
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="card">
          <div className="flex items-center mb-6">
            <Bell className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Bildirim Ayarları</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">E-posta Bildirimleri</p>
                <p className="text-sm text-gray-500">Yeni siparişler için e-posta al</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">SMS Bildirimleri</p>
                <p className="text-sm text-gray-500">Önemli güncellemeler için SMS al</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Push Bildirimleri</p>
                <p className="text-sm text-gray-500">Tarayıcı bildirimleri</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Store Settings */}
        <div className="card">
          <div className="flex items-center mb-6">
            <Store className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Mağaza Ayarları</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="label">Mağaza Adı</label>
              <input type="text" defaultValue="E-Commerce Store" className="input" />
            </div>

            <div>
              <label className="label">Para Birimi</label>
              <select className="input">
                <option value="TRY">Türk Lirası (₺)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>

            <div>
              <label className="label">Zaman Dilimi</label>
              <select className="input">
                <option value="Europe/Istanbul">İstanbul (UTC+3)</option>
                <option value="UTC">UTC (UTC+0)</option>
                <option value="America/New_York">New York (UTC-5)</option>
              </select>
            </div>

            <button className="btn btn-primary w-full">Mağaza Ayarlarını Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  )
}
