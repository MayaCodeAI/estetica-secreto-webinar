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
  
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-purple-900/20 overflow-hidden">
      {/* Background overlay e grid - mantidos */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 relative z-10">
        {/* Mobile Layout - MANTIDO EXATAMENTE IGUAL */}
        <div className="lg:hidden">
          {/* Dr. Johnny como background centralizado com fade - APENAS MOBILE */}
          <div className="absolute inset-0 flex items-start justify-center pt-4">
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

        {/* Desktop Layout - NOVO LAYOUT LADO A LADO */}
        <div className="hidden lg:block">
          <div className="min-h-screen flex flex-col">
            {/* Logo no topo centralizada */}
            <div className="flex justify-center pt-8 mb-16">
              <img src={logoSegredos} alt="Segredos Comerciais da Estética" className="w-full max-w-md object-contain" />
            </div>
            
            {/* Grid com 2 colunas - conteúdo e imagens */}
            <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center">
              {/* Coluna Esquerda - Conteúdo */}
              <div className="space-y-8">
                <h1 style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3.2rem)'
                }} className="font-bold leading-tight text-white">
                  O que as melhores clínicas estão fazendo para <span className="text-purple-400">encantar, converter e fidelizar</span> pacientes todos os dias!
                </h1>
                
                <p className="text-lg text-white/90 leading-relaxed">
                  Um workshop ao vivo, com técnicas comerciais reveladas por quem está por trás delas e responsável por mais de 20.000 vendas de procedimentos estéticos no Brasil.
                </p>

                {/* Botão VERDE */}
                <div className="pt-2">
                  <Button onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 text-lg shadow-lg shadow-green-500/25 transition-all duration-200">
                    CADASTRE-SE GRATUITAMENTE
                  </Button>
                </div>

                {/* Data e Horário */}
                <div className="bg-black/40 backdrop-blur-sm border border-purple-400/40 rounded-xl p-6 max-w-sm">
                  <p className="text-xl font-bold text-white mb-2">
                    Dia 07 de Outubro, às 20:00h
                  </p>
                  <p className="text-white/80">Terça-feira • Horário de Brasília</p>
                </div>
              </div>

              {/* Coluna Direita - Imagem do Dr. Johnny */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src={drJohnny} 
                    alt="Dr. Johnny Secco" 
                    className="w-full max-w-md object-cover"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 90%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 90%)'
                    }}
                  />
                  {/* Efeito de brilho sutil atrás da imagem */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl transform scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};