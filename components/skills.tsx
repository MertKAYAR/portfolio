"use client"

import { Code, Database, Globe, Smartphone } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "C#", level: 95 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "C++", level: 50 },
        { name: "REST API", level: 70 },
      ],
    },
    {
      title: "Araçlar & Diğer",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Jest", level: 80 },
        { name: "Figma", level: 85 },
      ],
    },
    {
      title: "Mobil",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Yeteneklerim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
