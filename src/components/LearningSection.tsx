import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Calendar, DollarSign, Repeat } from "lucide-react";

const learningPoints = [
  {
    icon: Users,
    text: "Como encantar o paciente já no primeiro contato, sem falar só de preço"
  },
  {
    icon: TrendingUp,
    text: "O jeito certo de apresentar seus procedimentos para o paciente querer e não só \"pensar depois\""
  },
  {
    icon: CheckCircle,
    text: "Como transformar atendimentos em vendas de verdade, mesmo com agenda cheia e pouco tempo"
  },
  {
    icon: Repeat,
    text: "O segredo para fazer o paciente voltar mais vezes e indicar amigos sem pedir"
  },
  {
    icon: DollarSign,
    text: "Por que muitas clínicas perdem dinheiro sem perceber e como evitar isso no dia a dia"
  },
  {
    icon: Calendar,
    text: "Passos simples para ter uma agenda sempre cheia e lucrativa"
  }
];

export const LearningSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O que você aprenderá neste{" "}
              <span className="text-primary">Workshop</span>
            </h2>
          </div>

          {/* Learning Points */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {learningPoints.map((point, index) => (
              <Card key={index} className="border-border hover:shadow-medical transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-medical flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-foreground text-lg leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-medical text-white border-0 shadow-form">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Se sua clínica está estagnada mesmo com um bom serviço…
                </h3>
                <p className="text-xl text-white/90">
                  Você tem um gargalo comercial!
                </p>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Clique no botão abaixo para garantir sua vaga e transformar cada 
                  contato em um procedimento na sua agenda
                </p>
                <Button 
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-lg"
                >
                  PARTICIPAR DO WORKSHOP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};