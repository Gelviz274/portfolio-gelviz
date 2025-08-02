"use client";
import React from "react";

import FloatingTech from "@/components/BentoGrid/tecflotantes";
import DesarrolloWeb from "@/components/BentoGrid/DesarrolloWeb";
// Importacion de iconos

import HerrameietasYDevOps from "./HerrameietasYDevOps";
import VisualizacionDeDatos from "./VisualizacionDeDatos";
import Aprendiendo from "./Aprendiendo";

export default function MySkilsSection() {
  return (
    <section className="bg-black py-20 flex flex-col items-center" id="skills">
      <div className="reveal-up text-center ">
        <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold mb-4 text-white">
          Mis{" "}
          <span className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>
        <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
          Procesos estructurados y metodologías probadas para garantizar el
          éxito en proyectos de Data Science
        </p>
      </div>
      <div className="flex flex-col justify-center items-center max-w-7xl mt-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DesarrolloWeb />

          <FloatingTech />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Card Herramientas & DevOps */}
          <HerrameietasYDevOps />

          {/* Card Visualización de Datos */}
          <VisualizacionDeDatos />

          {/* Card vacía o futura sección */}
          <Aprendiendo />
        </div>
      </div>
    </section>
  );
}
