"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// Actualizo los href para que coincidan con los IDs reales de las secciones
const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar qué sección está actualmente visible
      const sections = navItems.map(item => item.href.substring(1))
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.substring(1) // Eliminar el # del href
    const element = document.getElementById(id)
    
    if (element) {
      // Usar scrollIntoView con opciones para un desplazamiento suave
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(href)
    }
    
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl ${
        isScrolled ? "bg-[#0B0B0E]/80 backdrop-blur-md" : "bg-[#0B0B0E]/50 backdrop-blur-sm"
      } rounded-full border border-white/10`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-space-grotesk text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
              Juan David Gelviz
              <span className="hidden sm:block text-xs text-[#9CA3AF] font-normal">Ingeniero Informático</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`text-[#E5E5E5] hover:text-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden ${
                  activeSection === item.href ? "bg-white/10 text-white" : ""
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-[#8A2BE2]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            ))}

            {/* Contact button with infinite animation */}
            <Button
              onClick={() => scrollToSection("#contact")}
              className={`ml-4 contact-button-infinite text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-110 relative overflow-hidden group border-2 border-transparent hover:border-white/20 ${
                activeSection === "#contact" ? "border-white/20" : ""
              }`}
            >
              <span className="relative z-10">Contáctame</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#E5E5E5] hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0B0B0E]/95 backdrop-blur-md border-b border-white/10 rounded-b-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left text-[#E5E5E5] hover:text-white hover:bg-white/10 justify-start ${
                    activeSection === item.href ? "bg-white/10 text-white" : ""
                  }`}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className={`w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:from-[#0099CC] hover:to-[#7B1FA2] text-white font-semibold mt-4 ${
                  activeSection === "#contact" ? "ring-2 ring-white/30" : ""
                }`}
              >
                Contáctame
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
