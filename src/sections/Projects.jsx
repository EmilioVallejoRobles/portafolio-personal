import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

// 🔥 IMPORTACIÓN DE IMÁGENES (CORRECTO PARA VITE + GITHUB PAGES)
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";

const projects = [
  {
    title: "Sistema de Control de Materiales Reciclados",
    description:
      "Sistema web desarrollado para registrar, controlar y administrar materiales reciclados, incluyendo inventario, entradas, salidas y reportes de gestión.",
    image: project1,
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Sistema de Punto de Venta",
    description:
      "Sistema de punto de venta desarrollado para Bar Catrina que permite gestionar ventas, productos, mesas, cortes de caja y generación de reportes para mejorar el control y administración del negocio.",
    image: project2,
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "SIAR - Sistema Inteligente de Alarmas para Negocios",
    description:
      "Sistema de seguridad basado en tecnología IoT diseñado para la protección de tiendas y pequeños negocios. Integra sensores de movimiento, monitoreo en tiempo real, registro de eventos y alertas automáticas para detectar accesos no autorizados.",
    image: project3,
    tags: ["IoT", "Arduino", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Aplicación de Control de Inventario",
    description:
      "Sistema para el seguimiento de productos, control de existencias, movimientos de almacén y generación de reportes en tiempo real.",
    image: project4,
    tags: ["JavaScript", "MongoDB", "Bootstrap"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">

      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-sm font-medium tracking-wider uppercase">
            Trabajo Destacado
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Proyectos{" "}
            <span className="font-serif italic font-normal text-white">
              De Mayor Impacto.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Explora algunos de mis proyectos más destacados, donde aplico tecnologías modernas para crear soluciones eficientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden"
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a href={project.link} className="p-3 glass rounded-full">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 glass rounded-full">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            Ver Todos los Proyectos
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};