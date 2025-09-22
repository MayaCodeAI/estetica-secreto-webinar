import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";
// Usando caminhos diretos em vez de imports problemáticos
const drJohnny = "https://res.cloudinary.com/dq9cckhd4/image/upload/v1758570124/dr-jonny_aucmxa.webp";
const logoSegredos = "https://res.cloudinary.com/dq9cckhd4/image/upload/v1758570127/logo-isolada_j8vbcj.webp";

export const HeroSection = () => {
  const {
    openModal
  } = useFormModal();
  
  return <section className="relative bg-gradient-to-br from-background via-background to-purple-900/20 overflow-hidden">
      {/* Dr. Johnny como background centralizado com fade */}
      <div className="absolute inset-0 flex items-start justify-center pt-4 lg:hidden">
        <div className="relative">
          <img 
            src={drJohnny} 
            alt="Dr. Johnny Secco" 
            className="w-full max-w-sm object-cover opacity-100"
            style={{
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 85%)'
            }}
          />
        </div>
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60 lg:bg-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 relative z-10">
        {/* Mobile Layout - EXATAMENTE COMO ESTAVA */}
        <div className="lg:hidden">
          {/* Logo centralizada - mais próxima da headline */}
          <div className="flex justify-center mb-2 pt-8">
            <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-[220px] object-contain" />
          </div>
          
          {/* Conteúdo centralizado - layout mais compacto */}
          <div className="space-y-3 text-center">
            <h1 style={{
              fontSize: 'clamp(1.3rem, 5.5vw, 2.4rem)'
            }} className="font-bold leading-[1.05] text-white">
              O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
            </h1>
            
            <p className="text-sm text-white/90 leading-relaxed px-3">
              Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
            </p>
            
            {/* Botão VERDE */}
            <div className="pt-3">
              <Button onClick={openModal} className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-lg shadow-green-500/25 transition-all duration-200">
                CADASTRE-SE GRATUITAMENTE
              </Button>
            </div>
            
            {/* Data e Horário */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-400/40 rounded-xl p-3">
              <p className="text-sm font-bold text-white">
                Dia 07 de Outubro, às 20:00h
              </p>
              <p className="text-xs text-white/80">Terça-feira • Horário de Brasília</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - NOVO DESIGN OTIMIZADO */}
        <div className="hidden lg:block">
          <div className="min-h-screen flex flex-col">
            {/* Logo centralizada no topo */}
            <div className="flex justify-center py-8">
              <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-md object-contain" />
            </div>
            
            {/* Layout Principal: Texto à esquerda, Imagem à direita */}
            <div className="flex-1 grid grid-cols-12 gap-8 items-center">
              {/* Coluna da Esquerda - Conteúdo Textual */}
              <div className="col-span-7 space-y-8 pr-8">
                <h1 style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)'
                }} className="font-bold leading-tight text-white">
                  O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
                </h1>
                
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                  Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
                </p>

                {/* Botão VERDE */}
                <div className="pt-2">
                  <Button onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-10 text-lg shadow-lg shadow-green-500/25 transition-all duration-200 hover:scale-105">
                    CADASTRE-SE GRATUITAMENTE
                  </Button>
                </div>

                {/* Data e Horário */}
                <div className="bg-black/50 backdrop-blur-sm border border-purple-400/50 rounded-2xl p-6 max-w-md">
                  <p className="text-xl font-bold text-white mb-2">
                    Dia 07 de Outubro, às 20:00h
                  </p>
                  <p className="text-white/80 text-base">2025 • Terça-feira • Horário de Brasília</p>
                </div>
              </div>

              {/* Coluna da Direita - Imagem do Dr. Johnny */}
              <div className="col-span-5 flex justify-center items-center">
                <div className="relative">
                  {/* Glow effect atrás da imagem */}
                  <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-110"></div>
                  
                  {/* Imagem principal */}
                  <img 
                    src={drJohnny} 
                    alt="Dr. Johnny Secco" 
                    className="relative w-full max-w-lg object-cover drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(147, 51, 234, 0.3))'
                    }}
                  />
                  
                  {/* Elementos decorativos */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-400 rounded-full opacity-40 animate-pulse delay-700"></div>
                  <div className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-300 rounded-full opacity-50 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};