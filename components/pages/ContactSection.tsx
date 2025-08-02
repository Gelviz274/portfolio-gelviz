"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      subtitle: 'Respuesta inmediata',
      href: 'https://wa.me/573102103293',
      color: 'from-purple-500 to-blue-500',
      hoverColor: 'hover:shadow-purple-500/25'
    },
    {
      icon: Mail,
      label: 'Email',
      subtitle: 'Conversación profesional',
      href: 'mailto:jgelvizjaimes13@gmail.com',
      color: 'from-blue-500 to-purple-500',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      subtitle: 'Red profesional',
      href: 'https://www.linkedin.com/in/juan-david-gelviz/',
      color: 'from-purple-500 to-blue-500',
      hoverColor: 'hover:shadow-purple-500/25'
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20 px-6" id="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Floating particles */}
        {isClient && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300 font-medium">Conectemos</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 leading-tight">
            Hablemos
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Convierte tu visión en realidad. Elige tu canal preferido y 
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold"> comencemos a crear algo extraordinario</span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                  hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2
                  ${method.hoverColor} hover:shadow-2xl`}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${method.color} opacity-0 
                  group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Card content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} 
                    flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Text content */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent 
                    group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                    {method.label}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {method.subtitle}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Contactar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover ripple effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 
                    group-hover:opacity-10 scale-0 group-hover:scale-100 transition-all duration-500 rounded-3xl`}></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
            border border-purple-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">Disponible para nuevos proyectos</span>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ContactSection;