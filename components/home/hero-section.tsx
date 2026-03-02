import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/togglemode";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <ModeToggle />

      <div className="wrapper">
        <div className="flex flex-col items-center justify-center py-12 lg:py-24 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Bem Vindo ao DevShare, compartilhe seus projetos ou suas ideias com
            pessoas de qualquer lugar!
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Uma plataforma aberta onde desenvolvedores de diversos níveis
            compartilham projetos reais, destacam suas stacks e documentam o que
            aprenderam no processo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button>
              <Link href="/submit-project" className="w-full h-full">
                Compartilhar Projeto
              </Link>
            </Button>

             <Button variant="outline">
              <Link href="/explore-projects" className="w-full h-full">
                Explorar Projetos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}