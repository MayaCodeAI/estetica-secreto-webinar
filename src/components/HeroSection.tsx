import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";
import drJohnnyCombined from "@/assets/dr-johnny-combined.png";
export const HeroSection = () => {
  const {
    openModal
  } = useFormModal();
  return <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20 overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-purple-900/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-5 md:px-6 lg:px-8 py-8 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Image - Combined Logo + Dr. Johnny */}
          <div className="flex justify-center">
            <img src={drJohnnyCombined} alt="Segredos Comerciais da Estética com Dr. Johnny Secco" className="w-full max-w-md object-cover" />
          </div>
          
          {/* Mobile Content */}
          <div className="space-y-6 text-center">
            <h1 style={{
            fontSize: 'clamp(1.5rem, 5vw, 3rem)'
          }} className="font-bold leading-[1.2] text-white">
              O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
            </h1>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed px-2">Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.</p>
            
            {/* Event Details - Mobile - Stacked */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <h3 className="text-sm font-semibold text-white">Data</h3>
                </div>
                <p className="text-xl font-bold text-purple-400">07 de Outubro</p>
                <p className="text-sm text-white/70">2025 • Terça-feira</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <h3 className="text-sm font-semibold text-white">Horário</h3>
                </div>
                <p className="text-xl font-bold text-purple-400">20:00h</p>
                <p className="text-sm text-white/70">Horário de Brasília</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button onClick={openModal} className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg shadow-lg shadow-purple-500/25 transition-all duration-200">CADASTRE-SE GRATUITAMENTE</Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 min-h-screen items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }} className="font-bold leading-tight text-white">
                O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
              </h1>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
              </p>
              
              
            </div>

            {/* Event Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Data</h3>
                </div>
                <p className="text-2xl font-bold text-purple-400">07 de Outubro</p>
                <p className="text-white/70">2025 • Terça-feira</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Horário</h3>
                </div>
                <p className="text-2xl font-bold text-purple-400">20:00h</p>
                <p className="text-white/70">Horário de Brasília</p>
              </div>
            </div>

            <Button onClick={openModal} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-purple-500/25 transition-all duration-200">CADASTRE-SE GRATUITAMENTE</Button>
          </div>

          {/* Right Section - Combined Logo + Dr. Johnny Image */}
          <div className="lg:col-span-5">
            <div className="text-center">
              <img src={drJohnnyCombined} alt="Segredos Comerciais da Estética com Dr. Johnny Secco" className="w-full max-w-xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};