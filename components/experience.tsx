"use client"

import { Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp A.Ş.",
      period: "2022 - Devam Ediyor",
      description:
        "React ve Next.js kullanarak büyük ölçekli web uygulamaları geliştiriyorum. Takım liderliği yaparak junior geliştiricilere mentorluk veriyorum.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Startup ortamında hem frontend hem backend geliştirme yaparak ürünün sıfırdan geliştirilmesinde aktif rol aldım.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "WebAjans Ltd.",
      period: "2019 - 2020",
      description: "Müşteri projelerinde responsive web siteleri ve e-ticaret platformları geliştirdim.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
    },
    {
      title: "Junior Developer",
      company: "CodeFactory",
      period: "2018 - 2019",
      description: "Kariyerime başladığım ilk şirket. Temel web teknolojilerini öğrenerek küçük projeler geliştirdim.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Deneyimim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-20 bg-gray-50 p-6 rounded-xl shadow-lg w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
