"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"

const Education = () => {
  const education = [
    {
      degree: "Yazılım Mühendisliği Lisans",
      school: "Samsun Üniversitesi",
      period: "2023 - 2027",
      description: "Yazılım geliştirme, algoritma ve veri yapıları konularında güçlü bir temel edindim.",
      gpa: "3.6/4.0",
    },
    // {
    //   degree: "Bilgisayar Mühendisliği Yüksek Lisans",
    //   school: "İstanbul Teknik Üniversitesi",
    //   period: "2018 - 2020",
    //   description:
    //     'Makine Öğrenmesi ve Yapay Zeka alanında uzmanlaştım. Tez konusu: "Web Uygulamalarında Performans Optimizasyonu"',
    //   gpa: "3.8/4.0",
    // },
  ]

  const certifications = [
    {
      name: "Algoritma ve Veri Yapıları İleri Seviye",
      issuer: "BTK Akademi",
      date: "2025",
    },
    {
      name: "UYgulamalarla Nesne Yönelimli Programlama",
      issuer: "BTK Akademi",
      date: "2025",
    },
    
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Eğitim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Akademik Eğitim
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold mb-2">{edu.school}</p>
                      <p className="text-gray-600 mb-3">{edu.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-blue-600" />
              Sertifikalar
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Ek Yetenekler</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">İngilizce</span>
                  <span className="text-blue-600 font-semibold">Orta Seviye</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-gray-700">Almanca</span>
                  <span className="text-blue-600 font-semibold">Orta Seviye</span>
                </div> */}
                <div className="flex justify-between">
                  <span className="text-gray-700">Proje Yönetimi</span>
                  <span className="text-blue-600 font-semibold">Scrum Master</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
