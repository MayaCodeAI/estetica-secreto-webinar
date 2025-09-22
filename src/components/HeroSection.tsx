import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";
// Imagens na pasta src (ajuste os nomes conforme seus arquivos)
import drJohnny from "@/assets/dr-johnny.png";
import logoSegredos from "@/assets/logo-segredos.png";

export const HeroSection = () => {
  const {
    openModal
  } = useFormModal();
  
  return <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20 overflow-hidden">
      {/* Background Dr. Johnny */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${drJohnny})`,
          backgroundPosition: 'right center',
          backgroundSize: '60% auto'
        }}
      />
      
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-purple-900/30" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-5 md:px-6 lg:px-8 py-4 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-3">
          {/* Logo pequeno no topo */}
          <div className="flex justify-center mb-4">
            <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-[180px] object-cover" />
          </div>
          
          {/* Mobile Content */}
          <div className="space-y-3 text-center">
            <h1 style={{
              fontSize: 'clamp(1.2rem, 4vw, 2.2rem)'
            }} className="font-bold leading-[1.1] text-white">
              O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
            </h1>
            
            <p className="text-sm text-white/90 leading-relaxed px-2">Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.</p>
            
            {/* Botão VERDE */}
            <div className="mt-6">
              <Button onClick={openModal} className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold text-base shadow-lg shadow-green-500/25 transition-all duration-200">
                CADASTRE-SE GRATUITAMENTE
              </Button>
            </div>
            
            {/* Data e Horário juntos ABAIXO do botão */}
            <div className="mt-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3">
              <p className="text-base font-bold text-white">
                Dia 07 de Outubro, às 20:00h
              </p>
              <p className="text-xs text-white/70">2025 • Terça-feira • Horário de Brasília</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 min-h-screen items-center">
          {/* Content Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Logo no topo desktop */}
            <div className="mb-8">
              <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-md object-cover" />
            </div>
            
            <div className="space-y-4">
              <h1 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)'
              }} className="font-bold leading-tight text-white">
                O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
              </h1>
              
              <p className="text-base text-white/80 leading-relaxed">
                Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
              </p>
            </div>

            {/* Botão VERDE */}
            <Button onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-green-500/25 transition-all duration-200">
              CADASTRE-SE GRATUITAMENTE
            </Button>

            {/* Data e Horário juntos ABAIXO do botão */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center max-w-md">
              <p className="text-xl font-bold text-white mb-2">
                Dia 07 de Outubro, às 20:00h
              </p>
              <p className="text-white/70">2025 • Terça-feira • Horário de Brasília</p>
            </div>
          </div>

          {/* Right Section - espaço para o background do Dr. Johnny */}
          <div className="lg:col-span-4">
            {/* Este espaço é preenchido pelo background do Dr. Johnny */}
          </div>
        </div>
      </div>
    </section>;
};