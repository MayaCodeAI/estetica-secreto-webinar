import { GraduationCap, Zap, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormModal } from "@/hooks/useFormModal";

const learningPoints = [{
  icon: Users,
  text: "Como encantar o paciente já no primeiro contato, sem falar só de preço"
}, {
  icon: Zap,
  text: "O jeito certo de apresentar seus procedimentos para o paciente querer e não só 'pensar depois'"
}, {
  icon: Award,
  text: "Como transformar atendimentos em vendas de verdade, mesmo com agenda cheia e pouco tempo"
}, {
  icon: TrendingUp,
  text: "O segredo para fazer o paciente voltar mais vezes e indicar amigos sem pedir"
}, {
  icon: Heart,
  text: "Por que muitas clínicas perdem dinheiro sem perceber e como evitar isso no dia a dia"
}, {
  icon: GraduationCap,
  text: "Passos simples para ter uma agenda sempre cheia e lucrativa"
}];

export const LearningSection = () => {
  const {
    openModal
  } = useFormModal();
  return <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              O que você vai <span className="text-purple-400">aprenderá neste Workshop:</span>
            </h2>
            
          </div>

          {/* Learning Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {learningPoints.map((point, index) => <div key={index} className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/40">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-white text-base leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>)}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 text-center text-white shadow-2xl shadow-purple-500/20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Se sua clínica está estagnada mesmo com um bom serviço… Você tem um gargalo comercial!</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">Clique no botão abaixo para garantir sua vaga e transformar cada contato em um procedimento na sua agenda</p>
              <Button onClick={openModal} className="w-full font-bold py-4 shadow-lg shadow-green-500/25 bg-green-500 hover:bg-green-600 text-white text-base">
                PARTICIPAR DO WORKSHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};