"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">İletişim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
            Projeleriniz hakkında konuşmak veya işbirliği yapmak için benimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Mesaj Gönder</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100"
                  placeholder="Mesaj konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
              >
                {isSubmitting ? (
                  "Gönderiliyor..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Mesaj Gönder
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">İletişim Bilgileri</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-8">
                Projeleriniz için benimle iletişime geçmekten çekinmeyin. Size en kısa sürede dönüş yapacağım.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-100">E-posta</h4>
                  <p className="text-gray-600 dark:text-slate-300">mertkayar120@gmail.com</p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">24 saat içinde yanıt veriyorum</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-100">Telefon</h4>
                  <p className="text-gray-600 dark:text-slate-300">+90 531 779 50 15</p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Pazartesi - Cuma, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-100">Konum</h4>
                  <p className="text-gray-600 dark:text-slate-300">Çorum, Türkiye</p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Uzaktan çalışma imkanı</p>
                </div>
              </div>
            </div>

            {/* Clickable Map placeholder */}
            <div
              className="bg-gray-200 dark:bg-slate-700 h-64 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-200 border-2 border-dashed border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500"
              onClick={() => setShowMapModal(true)}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 dark:text-slate-500 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-slate-400 font-medium">Harita Görünümü</p>
                <p className="text-sm text-gray-400 dark:text-slate-500">Çorum, Türkiye</p>
                <p className="text-xs text-blue-500 dark:text-blue-400 mt-2 font-medium">📍 Tıklayın</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Modal */}
        {showMapModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100">Konum Bilgisi</h3>
                </div>
                <button
                  onClick={() => setShowMapModal(false)}
                  className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center py-6">
                <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                  Konum Henüz Belirlenmedi
                </h4>
                <p className="text-gray-600 dark:text-slate-300 mb-3">
                  Konum bilgilerimiz henüz tam olarak belirlenmemiştir.
                </p>
                <p className="text-sm text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                  🗺️ Harita görünümü yakında eklenecektir. Şu an için iletişim bilgilerini kullanabilirsiniz.
                </p>
              </div>

              <Button
                onClick={() => setShowMapModal(false)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Anladım
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
