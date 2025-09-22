import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";
// Imagens na pasta assets
import drJohnny from "@/assets/dr-johnny.png";
import logoSegredos from "@/assets/logo-segredos.png";

export const HeroSection = () => {
  const {
    openModal
  } = useFormModal();
  
  return <section className="relative bg-gradient-to-br from-background via-background to-purple-900/20 overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-purple-900/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Logo pequeno no topo */}
          <div className="flex justify-center mb-4">
            <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-[160px] object-contain" />
          </div>
          
          {/* Layout com Dr. Johnny à direita do conteúdo */}
          <div className="relative">
            {/* Dr. Johnny posicionado à direita */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-60 z-0">
              <img 
                src={drJohnny} 
                alt="Dr. Johnny Secco" 
                className="w-full h-full object-cover object-left"
                style={{
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                }}
              />
            </div>
            
            {/* Conteúdo sobreposto */}
            <div className="relative z-10 space-y-4">
              <div className="w-3/4 pr-2">
                <h1 style={{
                  fontSize: 'clamp(1.1rem, 4vw, 2rem)'
                }} className="font-bold leading-[1.05] text-white mb-3">
                  O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
                </h1>
                
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
                </p>
              </div>
              
              {/* Botão VERDE */}
              <div className="w-full">
                <Button onClick={openModal} className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-lg shadow-green-500/25 transition-all duration-200">
                  CADASTRE-SE GRATUITAMENTE
                </Button>
              </div>
              
              {/* Data e Horário */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-xl p-3 w-full">
                <p className="text-sm font-bold text-white">
                  Dia 07 de Outubro, às 20:00h
                </p>
                <p className="text-xs text-white/70">2025 • Terça-feira • Horário de Brasília</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block min-h-screen">
          <div className="grid lg:grid-cols-12 gap-8 min-h-screen items-center">
            {/* Content Section */}
            <div className="lg:col-span-7 space-y-6">
              {/* Logo no topo desktop */}
              <div className="mb-6">
                <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-sm object-contain" />
              </div>
              
              <div className="space-y-4">
                <h1 style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)'
                }} className="font-bold leading-tight text-white">
                  O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
                </h1>
                
                <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                  Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
                </p>
              </div>

              {/* Botão VERDE */}
              <Button onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-green-500/25 transition-all duration-200">
                CADASTRE-SE GRATUITAMENTE
              </Button>

              {/* Data e Horário */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center max-w-md">
                <p className="text-xl font-bold text-white mb-2">
                  Dia 07 de Outubro, às 20:00h
                </p>
                <p className="text-white/75">2025 • Terça-feira • Horário de Brasília</p>
              </div>
            </div>

            {/* Dr. Johnny Section - Mais proeminente */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative">
                <img 
                  src={drJohnny} 
                  alt="Dr. Johnny Secco" 
                  className="w-full max-w-md object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};