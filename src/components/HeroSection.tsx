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
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header com logo e Dr. Johnny lado a lado */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo à esquerda */}
            <div className="w-1/2 pr-2">
              <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-[140px] object-contain" />
            </div>
            
            {/* Dr. Johnny à direita - como avatar circular */}
            <div className="w-1/2 flex justify-end">
              <div className="relative">
                <img 
                  src={drJohnny} 
                  alt="Dr. Johnny Secco" 
                  className="w-20 h-20 rounded-full object-cover border-2 border-purple-400/50"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
            </div>
          </div>
          
          {/* Conteúdo principal */}
          <div className="space-y-4 text-center">
            <h1 style={{
              fontSize: 'clamp(1.1rem, 4.5vw, 2rem)'
            }} className="font-bold leading-[1.05] text-white">
              O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
            </h1>
            
            <p className="text-sm text-white/90 leading-relaxed px-2">
              Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
            </p>
            
            {/* Botão VERDE */}
            <div className="mt-6">
              <Button onClick={openModal} className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold text-base shadow-lg shadow-green-500/25 transition-all duration-200">
                CADASTRE-SE GRATUITAMENTE
              </Button>
            </div>
            
            {/* Data e Horário */}
            <div className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
              <p className="text-base font-bold text-white">
                Dia 07 de Outubro, às 20:00h
              </p>
              <p className="text-xs text-white/70">2025 • Terça-feira • Horário de Brasília</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="min-h-screen flex flex-col justify-center">
            {/* Header com logo e Dr. Johnny */}
            <div className="flex items-start justify-between mb-8">
              {/* Logo */}
              <div>
                <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-md object-contain" />
              </div>
              
              {/* Dr. Johnny como hero image */}
              <div className="relative">
                <img 
                  src={drJohnny} 
                  alt="Dr. Johnny Secco" 
                  className="w-48 h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Dr. Johnny Secco</p>
                  <p className="text-white/80 text-sm">Especialista em Vendas</p>
                </div>
              </div>
            </div>
            
            {/* Conteúdo principal centralizado */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)'
              }} className="font-bold leading-tight text-white">
                O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
              </h1>
              
              <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
                Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
              </p>

              {/* Botão VERDE centralizado */}
              <div className="pt-4">
                <Button onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 text-xl shadow-lg shadow-green-500/25 transition-all duration-200">
                  CADASTRE-SE GRATUITAMENTE
                </Button>
              </div>

              {/* Data e Horário centralizado */}
              <div className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 max-w-lg mx-auto">
                <p className="text-2xl font-bold text-white mb-2">
                  Dia 07 de Outubro, às 20:00h
                </p>
                <p className="text-white/75">2025 • Terça-feira • Horário de Brasília</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};