"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineInsights } from "react-icons/md";
import { PowerBI } from "../icons";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";

const dataTools = [
  { 
    name: "DB", 
    icon:   GoDatabase, 
    description: "Gestión de bases de datos relacionales y no relacionales",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    position: 0
  },
  { 
    name: "PowerBI", 
    icon: PowerBI, 
    description: "Dashboards interactivos",
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
    position: 1
  },
  { 
    name: "Excel", 
    icon: PiMicrosoftExcelLogoFill, 
    description: "Análisis de datos",
    color: "bg-green-500",
    textColor: "text-green-500",
    position: 2
  },
];

function VisualizacionDeDatos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTool = dataTools[activeIndex];
  const Icon = activeTool.icon;

  return (
    <motion.div 
      whileHover={{
        boxShadow: "0 0 0 2px #8A2BE2",
        transition: { duration: 0.3 },
      }}
      className="relative bg-[#0A0A0A] rounded-2xl p-6 h-full w-full overflow-hidden shadow-inner shadow-black/30 transition-all duration-300 group"
    >
      {/* Fondo con patrón de puntos */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full grid grid-cols-10 gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-white"
              animate={{
                opacity: Math.random() > 0.7 ? [0.3, 1, 0.3] : 0.3,
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Título principal y descripción */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <MdOutlineInsights className="text-morado text-xl" />
          <h2 className="text-white font-bold text-base">Visualización de datos</h2>
        </div>
          
      </div>

      {/* Selector de tecnologías */}
      <div className="flex justify-between mb-3 relative z-10">
        {dataTools.map((tool, index) => (
          <motion.button
            key={index}
            className={`flex flex-col items-center px-2 py-1 rounded-lg transition-all ${index === activeIndex ? 'bg-[#1A1A1A]' : 'hover:bg-[#1A1A1A]/50'}`}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tool.icon className={`text-lg ${index === activeIndex ? tool.textColor : 'text-gray-400'}`} />
            <span className={`text-xs mt-1 font-medium ${index === activeIndex ? 'text-white' : 'text-gray-400'}`}>
              {tool.name}
            </span>
            {index === activeIndex && (
              <motion.div 
                className={`h-0.5 w-full ${tool.color} rounded-full mt-1`}
                layoutId="underline"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative h-[calc(100%-100px)] bg-[#0F0F0F] rounded-xl p-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col justify-between"
          >
            {/* Icono grande */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div 
                className={`p-6 rounded-full ${activeTool.color}/10 border border-${activeTool.color}/20`}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Icon className={`text-5xl ${activeTool.textColor}`} />
              </motion.div>
            </div>

            {/* Descripción */}
            <div className="mt-4 text-center">
              <h3 className={`font-medium ${activeTool.textColor}`}>{activeTool.name}</h3>
              <p className="text-gray-400 text-xs mt-1">{activeTool.description}</p>
            </div>

            {/* Indicador de experiencia */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">Experiencia</span>
                <span className="text-white">Avanzado</span>
              </div>
              <div className="h-1 bg-gray-800 rounded-full w-full overflow-hidden">
                <motion.div 
                  className={`h-full ${activeTool.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: activeTool.name === "DB" ? "50%" : activeTool.name === "PowerBI" ? "50%" : "80%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decoración de fondo */}
        <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-full blur-3xl -mb-10 -mr-10 opacity-20 ${activeTool.color}`}></div>
      </div>
    </motion.div>
  );
}

export default VisualizacionDeDatos;
