import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Award, Users, Star } from "lucide-react";
import { useFormModal } from "@/hooks/useFormModal";

export const AboutSection = () => {
  const { openModal } = useFormModal();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sobre o <span className="text-purple-400">Dr. Johnny Secco</span>
            </h2>
            <p className="text-xl text-white/80">
              Especialista reconhecido em harmonização facial com mais de 15 anos de experiência
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-white/90 leading-relaxed">
                Dr. Johnny Secco é uma das principais referências em harmonização facial no Brasil, 
                com mais de 15 anos de experiência e milhares de procedimentos realizados.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Formado em Medicina pela Universidade Federal de São Paulo, é especialista em 
                dermatologia e procedimentos estéticos minimamente invasivos.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Pioneiro em técnicas avançadas de preenchimento facial e aplicação de toxina botulínica, 
                Dr. Johnny já treinou centenas de profissionais em todo o país.
              </p>
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
                    <p className="text-white font-semibold">+10.000 Procedimentos</p>
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
              <Button 
                onClick={openModal}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-purple-500/25"
              >
                PARTICIPAR DO WORKSHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};