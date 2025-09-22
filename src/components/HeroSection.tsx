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
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/85 to-purple-900/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header com logo à esquerda e Dr. Johnny à direita */}
          <div className="flex items-start justify-between pt-4 mb-6">
            {/* Logo à esquerda */}
            <div className="w-1/2 pr-4">
              <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-[160px] object-contain" />
            </div>
            
            {/* Dr. Johnny à direita */}
            <div className="w-1/2 flex justify-end">
              <img 
                src={drJohnny} 
                alt="Dr. Johnny Secco" 
                className="w-full max-w-[180px] object-cover opacity-90"
              />
            </div>
          </div>
          
          {/* Conteúdo centralizado */}
          <div className="space-y-3 text-center">
            <h1 style={{
              fontSize: 'clamp(1.1rem, 4.5vw, 2rem)'
            }} className="font-bold leading-[1.05] text-white">
              O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
            </h1>
            
            <p className="text-xs text-white/90 leading-relaxed px-3">
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
              <p className="text-xs text-white/80">2025 • Terça-feira • Horário de Brasília</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="min-h-screen flex flex-col justify-center">
            {/* Logo centralizada no topo */}
            <div className="flex justify-center mb-12">
              <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-lg object-contain" />
            </div>
            
            {/* Conteúdo principal centralizado */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)'
              }} className="font-bold leading-tight text-white">
                O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
              </h1>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
              </p>

              {/* Botão VERDE centralizado */}
              <div className="pt-6">
                <Button onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 text-xl shadow-lg shadow-green-500/25 transition-all duration-200">
                  CADASTRE-SE GRATUITAMENTE
                </Button>
              </div>

              {/* Data e Horário centralizado */}
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/40 rounded-2xl p-8 max-w-lg mx-auto">
                <p className="text-2xl font-bold text-white mb-3">
                  Dia 07 de Outubro, às 20:00h
                </p>
                <p className="text-white/80 text-lg">2025 • Terça-feira • Horário de Brasília</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};