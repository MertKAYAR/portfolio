import Header from "@/components/header"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Blog from "@/components/blog"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
