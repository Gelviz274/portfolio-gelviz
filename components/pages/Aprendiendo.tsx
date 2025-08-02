"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import PixelCard from "../Components/PixelCard/PixelCard";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiJupyter,
  SiOpencv,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";

// Datos de las tecnologías con un ángulo de inicio para distribuirlas de forma uniforme
const aiTools = [
  { name: "Python", icon: AiOutlinePython, style: "top-[10%] left-[45%]", delay: 0.1 },
  { name: "TensorFlow", icon: SiTensorflow, style: "top-[25%] right-[10%]", delay: 0.2 },
  { name: "PyTorch", icon: SiPytorch, style: "top-[50%] left-[10%]", delay: 0.3 },
  { name: "scikit-learn", icon: SiScikitlearn, style: "top-[40%] right-[20%]", delay: 0.4 },
  { name: "Jupyter", icon: SiJupyter, style: "bottom-[35%] left-[30%]", delay: 0.5 },
  { name: "NumPy", icon: SiNumpy, style: "bottom-[20%] left-[10%]", delay: 0.6 },
  { name: "Pandas", icon: SiPandas, style: "top-[60%] right-[5%]", delay: 0.7 },
  { name: "OpenCV", icon: SiOpencv, style: "top-[15%] left-[15%]", delay: 0.8 },
];

// Radio de la órbita en píxeles
const ORBIT_RADIUS = 125;

function OrbitingTool({ icon: Icon, name, startAngle }: { icon: typeof AiOutlinePython; name: string; startAngle: number }) {
  // Motion value para el ángulo
  const angle = useMotionValue(startAngle);

  // Convertimos ángulo a coordenadas cartesianas
  const x = useTransform(angle, (a) => Number((ORBIT_RADIUS * Math.cos((a * Math.PI) / 180)).toFixed(2)));
  const y = useTransform(angle, (a) => Number((ORBIT_RADIUS * Math.sin((a * Math.PI) / 180)).toFixed(2)));

  // Animación infinita del ángulo (una vuelta completa)
  React.useEffect(() => {
    const controls = animate(angle, startAngle + 360, {
      ease: "linear",
      duration: 20, // segundos por vuelta
      repeat: Infinity,
    });
    return controls.stop;
  }, [angle, startAngle]);

  return (
    <motion.div
      style={{ x, y }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="bg-[#131313] rounded-xl px-3 py-2 flex items-center gap-2 shadow-md hover:scale-110 transition-transform duration-200">
        <Icon className="text-morado text-base" />
        <span className="text-white text-xs font-medium whitespace-nowrap">{name}</span>
      </div>
    </motion.div>
  );
}

function Aprendiendo() {
  return (
    <PixelCard className="relative w-full h-96 p-6 overflow-hidden" variant="morado">
      {/* Círculo central de enfoque */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="rounded-full border border-[#333] bg-[#0F0F0F] w-28 h-28 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white text-xs font-semibold text-center"
          >
            Aprendiendo y explorando el <br /> aprendizaje automático
          </motion.h2>
        </div>
      </motion.div>

      {/* Tecnologías flotando alrededor */}
      {aiTools.map((tool, index) => (
        <OrbitingTool
          key={tool.name}
          icon={tool.icon}
          name={tool.name}
          startAngle={index * (360 / aiTools.length)}
        />
      ))}


    </PixelCard>
  );
}

export default Aprendiendo;
