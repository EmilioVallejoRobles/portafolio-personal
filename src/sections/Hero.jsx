import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// 👇 IMPORTACIÓN DE IMÁGENES (IMPORTANTE PARA VITE + GH PAGES)
import heroBg from "@/assets/hero-bg.jpg";
import milo from "@/assets/milo.jpeg";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Proximo Ingeniero de Software
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Pasión por el <span className="text-primary">codigo,</span>
              <br />
              Amor por la
              <br />
              <span className="font-serif italic font-normal text-white">
                Innovación.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Hola, soy Emilio Vallejo Robles, desarrollador de software especializado en aplicaciones web modernas.
              Me apasiona crear sistemas eficientes, escalables y fáciles de usar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Contactame <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Descargar CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Sígueme:</span>

              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 glass rounded-full">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">

              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl" />

              <div className="relative glass rounded-3xl p-2">
                <img
                  src={milo}
                  alt="Emilio Vallejo"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm">Disponible</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass px-4 py-3 rounded-xl">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">Años</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 text-center text-muted-foreground">
          Tecnologías con las que trabajo
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-xs">Scroll</span>
          <ChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};