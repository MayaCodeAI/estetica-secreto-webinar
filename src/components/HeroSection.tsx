import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";
import teamPhoto from "@/assets/team-photo.png";

export const HeroSection = () => {
  const { openModal } = useFormModal();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20 overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-purple-900/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Image - Top */}
          <div className="flex justify-center pt-4">
            <img
              src={teamPhoto}
              alt="Equipe médica especializada"
              className="w-full max-w-sm rounded-2xl object-cover shadow-2xl shadow-purple-500/20 border border-purple-500/20"
            />
          </div>
          
          {/* Mobile Content */}
          <div className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              Workshop Gratuito:<br />
              <span className="text-purple-400">Protocolo Intensivo</span><br />
              de Harmonização Facial<br />
              com <span className="text-purple-400">Dr. Johnny Secco</span>
            </h1>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Descubra as técnicas mais avançadas de preenchimento facial e toxina botulínica 
              em um workshop intensivo e prático.
            </p>
            
            {/* Event Details - Mobile */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <h3 className="text-sm font-semibold text-white">Data</h3>
                </div>
                <p className="text-lg font-bold text-purple-400">15 de Nov</p>
                <p className="text-xs text-white/70">2024</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <h3 className="text-sm font-semibold text-white">Horário</h3>
                </div>
                <p className="text-lg font-bold text-purple-400">19h-22h</p>
                <p className="text-xs text-white/70">Brasília</p>
              </div>
            </div>
            
            <Button
              onClick={openModal}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 text-lg shadow-lg shadow-purple-500/25"
            >
              GARANTIR MINHA VAGA GRATUITA
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 min-h-screen items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl xl:text-6xl font-bold leading-tight text-white">
                Workshop Gratuito:<br />
                <span className="text-purple-400">Protocolo Intensivo</span><br />
                de Harmonização Facial<br />
                com <span className="text-purple-400">Dr. Johnny Secco</span>
              </h1>
              
              <p className="text-2xl text-white/90 leading-relaxed">
                Descubra as técnicas mais avançadas de preenchimento facial e toxina botulínica 
                em um workshop intensivo e prático.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Aprenda com um dos maiores especialistas em harmonização facial do Brasil. 
                Teoria, prática e todas as técnicas que você precisa dominar para se destacar 
                no mercado da estética.
              </p>
            </div>

            {/* Event Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Data</h3>
                </div>
                <p className="text-2xl font-bold text-purple-400">15 de Novembro</p>
                <p className="text-white/70">2024 • Quinta-feira</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Horário</h3>
                </div>
                <p className="text-2xl font-bold text-purple-400">19h às 22h</p>
                <p className="text-white/70">Horário de Brasília</p>
              </div>
            </div>

            <Button
              onClick={openModal}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-purple-500/25"
            >
              GARANTIR MINHA VAGA GRATUITA
            </Button>
          </div>

          {/* Right Section - Image */}
          <div className="lg:col-span-5">
            <div className="text-center">
              <img
                src={teamPhoto}
                alt="Equipe médica especializada"
                className="w-full max-w-lg rounded-2xl object-cover shadow-2xl shadow-purple-500/20 border border-purple-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};