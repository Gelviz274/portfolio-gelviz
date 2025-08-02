"use client";
import { motion } from "framer-motion";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BsDatabase } from "react-icons/bs";
import { TbSql } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
const tecnologiasDB = [
  { name: "Firebase", icon: TbBrandFirebase, style: "top-[15%] left-[10%]", delay: 0 },
  { name: "PostgreSQL", icon: SiPostgresql, style: "top-[10%] right-[10%]", delay: 0.2 },
  { name: "SQL", icon: TbSql, style: "top-[40%] left-[20%]", delay: 0.4 },
  { name: "MySQL", icon: SiMysql, style: "top-[45%] right-[15%]", delay: 0.6 },
  { name: "SQL Server", icon: DiMsqlServer, style: "top-[25%] right-[35%]", delay: 0.6 },
];

const FloatingTech = () => {
  return (
    <motion.div
      className="relative bg-[#0A0A0A] rounded-3xl p-6 min-h-72 w-full overflow-hidden flex flex-col justify-between"
      whileHover={{
        boxShadow: "0 0 0 2px #8A2BE2",
        transition: { duration: 0.3 },
      }}
    >
      {/* Icono grande y textos abajo */}
      <div className="absolute bottom-6 left-6 flex items-start gap-4">
        <BsDatabase className="text-morado text-5xl" />
        <div>
          <h2 className="text-white font-bold text-lg">Bases de datos</h2>
          <p className="text-gray-400 text-sm">
            Gestión y análisis de datos estructurados <br /> y no estructurados.
          </p>
        </div>
      </div>

      {/* Tecnologías flotantes */}
      {tecnologiasDB.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${tech.style} bg-[#131313] rounded-full px-4 py-2 flex items-center gap-2 shadow-md cursor-default`}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tech.delay,
              },
              opacity: { duration: 0.4, delay: tech.delay },
            }}
            whileHover={{
              y: -15,
              scale: 1.1,
              backgroundColor: "#1f1f1f",
              transition: { duration: 0.3 },
            }}
          >
            <Icon className="text-morado text-lg" />
            <span className="text-white text-sm font-medium">{tech.name}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FloatingTech;
