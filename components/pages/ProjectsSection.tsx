"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiTailwindcss,
  SiReact,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandFirebase, TbBrandTypescript, TbBrandKotlin } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { RiNextjsLine } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { DiDjango } from "react-icons/di";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
// Mapping of icon components to their display names
const techNames: Record<string, string> = {
  RiNextjsLine: "Next.js",
  SiTailwindcss: "Tailwind CSS",
  TypeScriptIcon: "TypeScript",
  SiReact: "React",
  TbBrandFirebase: "Firebase",
  SiPython: "Python",
  SiDjango: "Django",
  SiPostgresql: "PostgreSQL",
  SiFastapi: "FastAPI",
  SiKotlin: "Kotlin",
};

const projects = [
  {
    title: "Uni-nova (2025)",
    description:
      "Red social educativa para compartir proyectos universitarios. Incluye perfiles, autenticación, likes, comentarios y más.",
    images: ["/CapUni-nova.png", "/CapUni-novaBL.png"],
    techs: [RiNextjsLine, SiTailwindcss, TbBrandTypescript, SiReact, TbBrandFirebase],
    codeUrl: "private",
    demoUrl: "https://uninova.vercel.app",
    descriptionDialog:
      "Uni-nova es una red social educativa creada para impulsar el talento universitario. Permite a estudiantes de todo el país compartir sus proyectos académicos, recibir retroalimentación, conectar con otros estudiantes y descubrir ideas innovadoras clasificadas por universidad, carrera y semestre.\n\nLa plataforma integra funcionalidades como comentarios, guardado de proyectos, me gusta, perfiles personalizados y más. Además, sirve como vitrina para mostrar el trabajo real que se desarrolla en las universidades, promoviendo la colaboración y la inspiración académica.\n\nUni-nova fue galardonado como el Mejor Proyecto de Investigación en los Días ESEIT 2025-2, destacándose por su impacto, escalabilidad y valor para la comunidad universitaria.",

    ano: "2025",
  },
  {
    title: "Uni-nova (2024)",
    description:
      "Red social educativa para compartir proyectos universitarios. Incluye perfiles, autenticación, likes, comentarios y más.",
    images: ["/uninovahome.png", "/uninovalogin.png", "/uninovaregister.png"],
    techs: [AiOutlinePython, DiDjango, SiPostgresql],  
    codeUrl: "https://github.com/Gelviz274/Uni-nova",
    demoUrl: undefined,
    descriptionDialog:
      "Red social educativa para compartir proyectos universitarios. Incluye perfiles, autenticación, likes, comentarios y más.",
    ano: "2024",
  },
  {
    title: "HackerScape",
    description:
      "Aplicación interactiva para enseñar seguridad digital: contraseñas seguras, phishing, y más.",
    images: ["/HackerScape/Home.jpg", "/HackerScape/login.jpg", "/HackerScape/register.jpg"],
    techs: [TbBrandKotlin, TbBrandFirebase],
    codeUrl: "https://github.com/Gelviz274/HackerScape",
    demoUrl: undefined,
    descriptionDialog:
      "HackerScape es una plataforma gamificada de ciberseguridad donde los usuarios aprenden y demuestran habilidades técnicas a través de retos interactivos y escenarios reales. ",
    ano: "2025",
  },
] as const;

function ProjectsSection() {
  // Create a new plugin instance for each carousel
  const createAutoplayPlugin = () =>
    Autoplay({ delay: 4000, stopOnInteraction: true });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden py-20 px-4 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Mis Proyectos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explora mis proyectos más recientes y descubre mi enfoque en el
            desarrollo de soluciones innovadoras.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md hover:shadow-purple-500/20 transition-all"
            >
              {/* Carousel only for images */}
              <div className="relative">
                <Carousel plugins={[createAutoplayPlugin()]} className="w-full">
                  <CarouselContent>
                    {proj.images.map((img, idx) => (
                      <CarouselItem key={idx} className="relative h-48">
                        <Image
                          src={img}
                          alt={proj.title}
                          fill
                          className="object-cover rounded-t-xl"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 border-none text-white" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 border-none text-white" />
                </Carousel>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.techs.map((Icon, idx) => (
                    <Icon key={idx} className="text-morado text-xl" />
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {proj.codeUrl && !proj.codeUrl.includes("private") && (
                    <a
                      href={proj.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-white/10 text-white hover:bg-white/20"
                    >
                      <FaGithub />
                      <span>Código</span>
                    </a>
                  )}
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-md"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  )}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="pointer-events-auto">
                        Ver Detalles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl bg-[#0A0A0A] text-white">
                      <DialogHeader className="border-b border-neutral-600 px-6 py-4 text-base">
                        <DialogTitle>{proj.title}</DialogTitle>
                        <DialogDescription>Año: {proj.ano}</DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-8 px-6 py-6 max-h-[85vh] overflow-y-auto">
                        {/* Enhanced Image Gallery - Centrado y más ancho */}
                        <div className="w-full relative group mx-auto">
                          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-sm shadow-2xl shadow-purple-500/10 transition-all duration-300 hover:shadow-purple-500/20">
                            <Carousel
                              plugins={[createAutoplayPlugin()]}
                              opts={{ loop: true, align: "start" }}
                              className="w-full h-full"
                            >
                              <CarouselContent className="h-full">
                                {proj.images.map((img, idx) => (
                                  <CarouselItem
                                    key={idx}
                                    className="relative w-full aspect-video p-1"
                                  >
                                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                                      <Image
                                        src={img}
                                        alt={`${proj.title} - Imagen ${
                                          idx + 1
                                        }`}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-101"
                                        priority={idx === 0}
                                        quality={100}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white/90 text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                                          {idx + 1} / {proj.images.length}
                                        </span>
                                      </div>
                                    </div>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black text-white border-2 border-white/20 hover:border-purple-400 transition-all duration-200 z-30 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black/50 rounded-full flex items-center justify-center shadow-lg" />
                              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black text-white border-2 border-white/20 hover:border-purple-400 transition-all duration-200 z-30 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black/50 rounded-full flex items-center justify-center shadow-lg" />
                            </Carousel>
                          </div>
                        </div>
                        
                        {/* INFORMACIÓN DEBAJO DEL CARRUSEL */}
                        <div className="flex flex-col w-full gap-6">
                          {/* Descripción */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Descripción
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {proj.descriptionDialog
                                .split("\n")
                                .map((line, index) => (
                                  <span key={index}>
                                    {line}
                                    <br />
                                  </span>
                                ))}
                            </p>
                          </div>

                          {/* Tecnologías */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Tecnologías Usadas
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {proj.techs.map((Tech, idx) => {
                                const techName = Tech.name || "";
                                return (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm text-white/90"
                                  >
                                    <Tech className="w-4 h-4 text-morado" />
                                    <span>
                                      {techNames[techName] ||
                                        techName.replace("Si", "")}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Enlaces */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              Enlaces
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {proj.codeUrl &&
                                !proj.codeUrl.includes("private") && (
                                  <a
                                    href={proj.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-white/10 hover:bg-white/20 transition"
                                  >
                                    <FaGithub className="w-4 h-4" />
                                    <span>Código Fuente</span>
                                  </a>
                                )}
                              {proj.demoUrl && (
                                <a
                                  href={proj.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white transition"
                                >
                                  <FaExternalLinkAlt className="w-4 h-4" />
                                  <span>Ver Demo</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
