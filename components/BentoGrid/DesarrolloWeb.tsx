import React from "react";
import { CCSSIcon, JavaScriptIcon, HTMLIcon } from "@/components/icons";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { IconWorld } from "@/components/icons";
import Autoplay from "embla-carousel-autoplay";
import { TbBrandTypescript } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function 
DesarrolloWeb() {
  const tecnologiasWeb = [
    { nombre: "HTML", icono: HTMLIcon },
    { nombre: "CSS", icono: CCSSIcon },
    { nombre: "JavaScript", icono: JavaScriptIcon },
    { nombre: "React", icono: FaReact },
    { nombre: "Next.js", icono: RiNextjsLine },
    { nombre: "TailwindCSS", icono: RiTailwindCssLine },
    { nombre: "Django", icono: DiDjango },
    { nombre: "TypeScript", icono: TbBrandTypescript },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <motion.div
      className=" bg-[#0A0A0A] rounded-2xl p-5 h-auto relative overflow-hidden flex flex-col justify-between "
      whileHover={{
        boxShadow: "0 0 0 2px #8A2BE2",
        transition: { duration: 0.3 },
      }}
    >
      {/* Carrusel automatico de Tecnologias */}
      <div className="w-full h-full relative pt-5">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {tecnologiasWeb.map((tecnologia) => (
              <CarouselItem
                key={tecnologia.nombre}
                className="flex justify-center items-center md:basis-1/2 lg:basis-1/4"
              >
                <div className="flex flex-col items-center justify-center w-28 h-28 bg-[#131313] rounded-2xl shadow-md">
                  <tecnologia.icono className={`text-5xl text-morado`} />
                  <span className="mt-2 text-base font-semibold text-white">
                    {tecnologia.nombre}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Degradado absoluto sobre el carrusel */}
        <div className="pointer-events-none absolute left-1 bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-[#0A0A0A]" />
      </div>
      <div className="flex items-center gap-5 p-5">
        <IconWorld className="text-morado w-14 h-14" />
        <div className="flex flex-col">
          <h2 className="text-white font-bold text-lg">Desarrollo Web</h2>
          <p className="text-gray-400 text-sm">
            Creacion de aplicaciones web interactivas y responsivas
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default DesarrolloWeb;
