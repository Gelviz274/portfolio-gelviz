"use client";
import React from "react";
import DarkVeil from "@/components/Backgrounds/DarkVeil/DarkVeil";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ShinyText from "@/components/TextAnimations/ShinyText/ShinyText";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={1}
          resolutionScale={1}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-violet-900/20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
        <div className="relative space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/30 to-blue-600/30 border border-violet-500/30 backdrop-blur-sm"
          >
            <Briefcase className="w-4 h-4 mr-2 text-violet-300" />
            <ShinyText
              text="Disponible para trabajar"
              speed={1}
              className="font-semibold"
            />
          </motion.div>
          <div className="space-y-6">
            <motion.h1
              className="font-space-grotesk text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block text-white mb-2">
                ¡Hola! <span className="wave">👋</span>
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Soy Juan David Gelviz
              </span>
              <motion.span
                className="block text-2xl sm:text-3xl lg:text-3xl font-normal mt-4 bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ingeniero Informático
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed text-start font-space-grotesk"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Soy estudiante de Ingeniería Informática con un fuerte interés en
              la tecnología, especialmente en áreas como la inteligencia
              artificial y el análisis de datos. Actualmente lidero el
              desarrollo de Uni-nova, una plataforma educativa enfocada en
              compartir y descubrir proyectos universitarios innovadores.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              onClick={() => {
                const contactSection = document.getElementById("projects");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold px-8 py-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Ver Proyectos
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <a
              href="/CV JUAN GELVIZ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-3 rounded-xl border border-violet-500 text-white font-semibold hover:bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 transform  flex items-center"
            >
              <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Ver CV
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            bounce: 0.3,
          }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 opacity-70 blur-lg animate-gradient-xy" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />

            {/* Profile image container */}
            <div className="relative z-10 w-full h-full rounded-full p-1 bg-gradient-to-br from-blue-500/30 to-violet-600/30 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/myphoto.jpg"
                  alt="Juan David Gelviz"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -right-2 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/20 animate-float" />
            <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-violet-500/20 backdrop-blur-sm border border-violet-400/20 animate-float animation-delay-2000" />
            <div className="absolute top-1/4 -right-6 w-8 h-8 rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-300/20 animate-float animation-delay-3000" />
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1],
        }}
      >
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#9CA3AF]" size={24} />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
