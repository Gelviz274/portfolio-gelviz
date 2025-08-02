"use client";
import { UserMinus } from "lucide-react";
import React from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";
import { Vercel, GitLogo } from "../icons";

const tools = [
  { name: "Git", icon: GitLogo },
  { name: "GitHub", icon: FaGithub },
  { name: "Terminal", icon: FaTerminal },
  { name: "Vercel", icon: Vercel },
  { name: "VS Code", icon: BiLogoVisualStudio },
];

function HerrameietasYDevOps() {
  return (
    <motion.div whileHover={{
      boxShadow: "0 0 0 2px #8A2BE2",
      transition: { duration: 0.3 },
    }} className="bg-[#0A0A0A] rounded-2xl p-6 h-full flex flex-col justify-between shadow-inner shadow-black/30 transition-all duration-300 group">
      {/* Tecnologías */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {tools.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <div
              key={idx}
              className="bg-[#131313] hover:bg-[#1E1E1E] transition-colors duration-200 rounded-xl flex flex-col items-center justify-center p-3 gap-2 shadow-md hover:scale-105"
            >
              <Icon className="text-morado text-2xl" />
              <span className="text-xs text-white">{tool.name}</span>
            </div>
          );
        })}
      </div>

      {/* Título y descripción */}
      <div className="flex items-center gap-5 p-5">
        <UserMinus className="text-morado w-14 h-14" />
        <div>
          <h2 className="text-white font-semibold text-lg">Herramientas & DevOps</h2>
          <p className="text-gray-400 text-sm">
            Herramientas para optimizar el flujo de trabajo y la implementación.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HerrameietasYDevOps;
