"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Doç. Dr. Muammer Türkoğlu",
      position: "Bölüm Başkanı",
      image: "testimonials/muammer.turkoglu.png?height=80&width=80",
      rating: 5,
      text: "Mert ile çalışmak gerçekten harika bir deneyimdi. Teknik yetenekleri ve problem çözme becerisi olağanüstü. Projelerimizde her zaman güvenilir ve yaratıcı çözümler sundu.",
    },
    {
      name: "Arş. Gör. İlker Gür",
      position: "Proje Yöneticisi, Öğretim Elemanı",
      image: "testimonials/ilker.gür.png?height=80&width=80",
      rating: 5,
      text: "Mert'nin takım çalışmasına olan katkısı ve liderlik yetenekleri takdire şayan. Karmaşık projeleri zamanında ve kaliteli bir şekilde teslim etti.",
    },
    {
      name: "Dr. Öğr. Üyesi Emel Soylu",
      position: "Bölüm Başkan Yardımcısı",
      image: "testimonials/emel.soylu.png?height=80&width=80",
      rating: 5,
      text: "Müşteri odaklı yaklaşımı ve teknik uzmanlığı sayesinde projelerimiz her zaman beklentilerin üzerinde sonuçlar verdi. Kesinlikle tavsiye ederim.",
    },
    {
      name: "Doç. Dr. Zafer Cömert",
      position: "Öğretim Üyesi",
      image: "testimonials/zafer.comert.png?height=80&width=80",
      rating: 5,
      text: "Mert ile tasarım ve geliştirme sürecinde çalışmak çok keyifliydi. Tasarımları mükemmel bir şekilde kodlayarak hayata geçirdi.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Referanslar</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
