"use client"

import { useState } from "react"
import { ExternalLink, Github, X, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Kampüs Kamera Görüntülerinin Yapay Zeka ile İndirgenmesi ve Özetlenmesi - TÜBİTAK 2209",
      description: "Modern ve kullanıcı dostu e-ticaret sitesi",
      longDescription:
        "Yapay zeka ve görüntü işleme teknikleri kullanarak, kampüs güvenlik kameralarından elde edilen büyük hacimli video verilerini anlamlı ve özet hale getiren bir sistem geliştirdik. Bu sistem, üniversite kampüslerinde hem veri depolama maliyetlerini azaltmakta hem de olay tespiti gibi analiz süreçlerini hızlandırmaktadır.",
      image: "/Projelerim/tubitak4lu.jpg?height=300&width=400",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow / PyTorch",
        "Yolov5 / EfficientNet",
        "FFmpeg",
        "Event-based Filtering",
        "Optical Flow",
        "MongoDB (Opsiyonel depolama için)",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/MertKAYAR",
      features: [
        "Olay tabanlı video kesit çıkarımı",
        "Görüntü verisi indirgeme (redundant veri temizleme)",
        "Hareket ve olay algılama (optik akış, derin öğrenme)",
        "Özet video üretimi",
        "Anonimleştirme (KVKK uyumlu)",
      ],
      teamMembers: [
        { name: "Mert KAYAR", role: "Proje Lideri & Backend Developer" },
        { name: "Faruk Emre ÖK", role: "AI/ML Developer" },
        { name: "Alperen ERİ", role: "Frontend Developer" },
        { name: "Zeynep Bakırman", role: "Frontend Developer" },
      ],
    },
    {
      id: 2,
      title: "Görev Yönetim Uygulaması",
      description: "Takım çalışması için görev takip sistemi",
      longDescription:
        "Takımların projelerini ve görevlerini kolayca yönetebileceği modern bir uygulama. Drag & drop özelliği, gerçek zamanlı güncellemeler ve detaylı raporlama.",
      image: "/Projelerim/GorevYonetimUygulamasi.jpg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/MertKAYAR",
      features: [
        "Drag & drop görev yönetimi",
        "Gerçek zamanlı güncellemeler",
        "Takım işbirliği",
        "Detaylı raporlama",
        "Zaman takibi",
      ],
      teamMembers: [
        { name: "Eren ALTAY", role: "Full Stack Developer" },
        
      ],
    },
    {
      id: 3,
      title: "Hava Durumu Uygulaması",
      description: "Gelişmiş hava durumu tahmin uygulaması",
      longDescription:
        "Konum bazlı hava durumu bilgileri, 7 günlük tahmin, hava kalitesi indeksi ve görsel grafikler içeren modern hava durumu uygulaması.",
      image: "/Projelerim/HavaDurmuUygulamasi.jpg?height=300&width=400",
      technologies: ["React Native", "Redux", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/MertKAYAR",
      features: [
        "Konum bazlı tahmin",
        "7 günlük hava durumu",
        "Hava kalitesi indeksi",
        "Görsel grafikler",
        "Push bildirimleri",
      ],
      teamMembers: [
        { name: "Celal Semih Kınalıoğlu", role: "Mobile Developer" },
        { name: "Taha BAYRAKTAR", role: "AI/ML Developer" },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">Projelerim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedProject(project.id)}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Detayları Gör
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-slate-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded text-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Canlı Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Kod
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {projects.find((p) => p.id === selectedProject) && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={projects.find((p) => p.id === selectedProject)!.image || "/placeholder.svg"}
                        alt={projects.find((p) => p.id === selectedProject)!.title}
                        className="w-full rounded-lg"
                      />
                    </div>

                    <div>
                      <p className="text-gray-600 dark:text-slate-300 mb-6">
                        {projects.find((p) => p.id === selectedProject)!.longDescription}
                      </p>

                      <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-3">Özellikler:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-slate-300 mb-6 space-y-1">
                        {projects
                          .find((p) => p.id === selectedProject)!
                          .features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                      </ul>

                      <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-3">Teknolojiler:</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects
                          .find((p) => p.id === selectedProject)!
                          .technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>

                      {/* Takım Üyeleri Bölümü */}
                      {projects.find((p) => p.id === selectedProject)!.teamMembers && (
                        <>
                          <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-3 flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            Takım Üyeleri:
                          </h4>
                          <div className="mb-6">
                            {projects
                              .find((p) => p.id === selectedProject)!
                              .teamMembers!.map((member, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-slate-600 last:border-b-0"
                                >
                                  <span className="font-medium text-gray-900 dark:text-slate-100">{member.name}</span>
                                  <span className="text-sm text-gray-600 dark:text-slate-400">{member.role}</span>
                                </div>
                              ))}
                          </div>
                        </>
                      )}

                      <div className="flex space-x-4">
                        <a
                          href={projects.find((p) => p.id === selectedProject)!.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Canlı Demo
                        </a>
                        <a
                          href={projects.find((p) => p.id === selectedProject)!.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Kaynak Kod
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
