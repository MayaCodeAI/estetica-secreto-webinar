import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Award, Users, Star } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";
// Importar a imagem do Dr. Johnny
import drJohnny from "@/assets/dr-johnny-combined.png";

export const AboutSection = () => {
  const {
    openModal
  } = useFormModal();
  
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sobre o <span className="text-purple-400">Dr. Johnny Secco</span>
            </h2>
            
            {/* Imagem do Dr. Johnny logo abaixo do título */}
            <div className="flex justify-center">
              <img 
                src={drJohnny} 
                alt="Dr. Johnny Secco" 
                className="w-80 h-60 object-cover rounded-2xl shadow-2xl border-2 border-purple-400/30"
              />
            </div>
            
            <p className="text-xl text-white/80">Dr. Johnny Secco é cirurgião-dentista formado pela Universidade Unipar – PR e referência nacional em gestão e crescimento de clínicas.</p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-white/90 leading-relaxed">Empresário visionário, é gestor de 26+ clínicas em diferentes estados e fundador da Hof Master, instituição que forma profissionais de alta performance no mercado estético.</p>
              
              <p className="text-lg text-white/90 leading-relaxed">Com mais de 15 milhões faturados, atua como embaixador da IbraMed, speaker da Lacutanê e parceiro de marcas líderes do setor.</p>
              
              <p className="text-lg text-white/90 leading-relaxed">É também cofundador do ecossistema DESTRAVE, que potencializa a gestão e a escalabilidade de clínicas em todo o Brasil.


Dr. Johnny une prática clínica, visão estratégica e espírito empreendedor para transformar o mercado estético e inspirar novos líderes.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">+15 Anos de Experiência</p>
                    <p className="text-white/70 text-sm">Em harmonização facial</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">+20.000 Procedimentos</p>
                    <p className="text-white/70 text-sm">Realizados com sucesso</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Especialista Reconhecido</p>
                    <p className="text-white/70 text-sm">Referência nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl shadow-purple-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Aprenda com quem realmente entende do assunto
              </h3>
              <p className="text-lg text-white/90">
                Esta é sua chance única de aprender diretamente com Dr. Johnny Secco
              </p>
              <Button onClick={openModal} className="py-4 px-8 text-lg shadow-lg shadow-purple-500/25 text-zinc-950 bg-slate-50 text-left font-bold">
                PARTICIPAR DO WORKSHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};