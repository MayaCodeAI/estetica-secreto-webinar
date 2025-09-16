import { GraduationCap, Zap, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormModal } from "@/hooks/useFormModal";
const learningPoints = [{
  icon: Users,
  text: "Técnicas avançadas de aplicação de preenchimento facial para resultados naturais"
}, {
  icon: Zap,
  text: "Protocolos de toxina botulínica para harmonização completa do rosto"
}, {
  icon: Award,
  text: "Anatomia facial detalhada e pontos seguros de aplicação"
}, {
  icon: TrendingUp,
  text: "Como avaliar e planejar tratamentos personalizados para cada paciente"
}, {
  icon: Heart,
  text: "Gestão de complicações e como evitar resultados indesejados"
}, {
  icon: GraduationCap,
  text: "Dicas de mercado e como se posicionar como especialista na área"
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
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Um workshop completo com as técnicas mais avançadas de harmonização facial
            </p>
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
              <h3 className="text-3xl font-bold">
                Quer dominar as técnicas mais avançadas?
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Este workshop é sua oportunidade de aprender com quem realmente entende do assunto
              </p>
              <Button onClick={openModal} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 text-lg shadow-lg shadow-purple-500/25">
                PARTICIPAR DO WORKSHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};