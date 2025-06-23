"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const menuItems = [
    { label: "Hakkımda", id: "about" },
    { label: "Yetenekler", id: "skills" },
    { label: "Deneyim", id: "experience" },
    { label: "Eğitim", id: "education" },
    { label: "Projeler", id: "projects" },
    { label: "İletişim", id: "contact" },
  ]

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-slate-100">Mert KAYAR</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X size={24} className="text-gray-900 dark:text-slate-100" />
                ) : (
                  <Menu size={24} className="text-gray-900 dark:text-slate-100" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700">
            <div className="px-4 py-2 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-slate-100 mb-6">
              Merhaba, ben{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mert KAYAR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Yazılım Mühendisi — Modern web teknolojileri ile kullanıcı odaklı çözümler geliştiriyorum
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/MertKAYAR"
                className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:mertkayar120@gmail.com"
                className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={28} />
              </a>
              <a
                href="tel:+905551234567"
                className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone size={28} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Projelerimi İncele
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-8 py-3 text-lg"
              >
                İletişime Geç
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
