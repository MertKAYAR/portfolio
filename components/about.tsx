"use client"

import { MapPin, Calendar, Mail, Phone } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hakkımda</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Merhaba! Ben Mert KAYAR, 5 yıllık deneyime sahip bir yazılım mühendisiyim. Modern web teknolojileri
              kullanarak kullanıcı odaklı, ölçeklenebilir ve performanslı uygulamalar geliştirmeyi seviyorum.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              React, Node.js ve Python teknolojilerinde uzmanlaşmış durumda olup, sürekli öğrenmeye ve kendimi
              geliştirmeye odaklanıyorum. Takım çalışmasına yatkın, problem çözme odaklı bir yaklaşımım var.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Boş zamanlarımda açık kaynak projelere katkıda bulunuyor, yeni teknolojileri öğreniyor ve fotoğrafçılık
              ile ilgileniyorum.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <img
                  src="/Hakkımda/my1.jpg?height=320&width=320"
                  alt="Mert KAYAR"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Doğum Tarihi</h3>
            <p className="text-gray-600">3 Aralık 2005</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Konum</h3>
            <p className="text-gray-600">Çorum, Türkiye</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
            <p className="text-gray-600">mertkayar120@gmail.com</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
            <p className="text-gray-600">+90 531 779 50 15</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
