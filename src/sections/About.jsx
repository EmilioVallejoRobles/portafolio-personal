import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description:
      "Desarrollo código organizado, mantenible y escalable para proyectos de calidad.",
  },
  {
    icon: Rocket,
    title: "Rendimiento",
    description:
      "Me enfoco en crear aplicaciones rápidas y optimizadas para una mejor experiencia de usuario.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Colaboro eficazmente para convertir ideas en soluciones funcionales.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Aprendo constantemente nuevas tecnologías y buenas prácticas de desarrollo.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
  Sobre Mí
</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo experiencias digitales excepcionales,
              <span className="font-serif italic font-normal text-white">
                {" "}
                un proyecto a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy estudiante de Desarrollo de Software con interés en la creación de
                aplicaciones web modernas, bases de datos y soluciones tecnológicas que
                ayuden a resolver problemas reales.
              </p>
              <p>
                Me gusta trabajar con tecnologías como React, JavaScript, Tailwind CSS,
                Node.js y MongoDB. Constantemente busco mejorar mis habilidades mediante
                proyectos personales y académicos.
              </p>
              <p>
                Además del desarrollo de software, me interesa la producción musical,
                el aprendizaje continuo y la exploración de nuevas herramientas
                tecnológicas.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi objetivo es desarrollar soluciones tecnológicas útiles, eficientes
                e innovadoras que generen un impacto positivo en las personas y las
                organizaciones."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
