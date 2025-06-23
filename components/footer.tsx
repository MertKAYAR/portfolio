"use client"

import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <span className="text-xl font-bold">Mert KAYAR</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Yazılım Mühendisi olarak modern web teknolojileri ile kullanıcı odaklı çözümler geliştiriyorum.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <div className="space-y-2">
              {[
                { label: "Hakkımda", id: "about" },
                { label: "Yetenekler", id: "skills" },
                { label: "Projeler", id: "projects" },
                { label: "İletişim", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">mertkayar120@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+90 531 779 50 15</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/MertKAYAR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mertkayar120@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center">
              © {currentYear} Mert KAYAR. Tüm hakları saklıdır.
              <Heart className="w-4 h-4 text-red-500 mx-2" />
              ile yapıldı.
            </p>

            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              Yukarı Çık
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
