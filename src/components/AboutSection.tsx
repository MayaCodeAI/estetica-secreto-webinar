import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Users, TrendingUp, Globe, Star } from "lucide-react";
import drJohnnyImage from "@/assets/dr-johnny-secco.png";

const achievements = [
  {
    icon: Building,
    label: "26+ Clínicas",
    description: "Gestor de clínicas em diferentes estados"
  },
  {
    icon: TrendingUp,
    label: "R$ 15+ Milhões",
    description: "Faturamento total gerado"
  },
  {
    icon: Users,
    label: "20.000+ Vendas",
    description: "Procedimentos estéticos vendidos"
  },
  {
    icon: Award,
    label: "Múltiplas Parcerias",
    description: "Embaixador IbraMed, Speaker Lacutanê"
  }
];

export const AboutSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Quem é o{" "}
              <span className="text-primary">Dr. Johnny Secco</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-medical rounded-lg transform rotate-3"></div>
                <img 
                  src={drJohnnyImage} 
                  alt="Dr. Johnny Secco" 
                  className="relative w-full max-w-md mx-auto object-cover rounded-lg shadow-image border-2 border-primary/20"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Dr. Johnny Secco é cirurgião-dentista formado pela Universidade Unipar – PR 
                  e referência nacional em gestão e crescimento de clínicas.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Empresário visionário, é gestor de 26+ clínicas em diferentes estados e 
                  fundador da Hof Master, instituição que forma profissionais de alta 
                  performance no mercado estético.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Com mais de 15 milhões faturados, atua como embaixador da IbraMed, 
                  speaker da Lacutanê e parceiro de marcas líderes do setor.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  É também cofundador do ecossistema DESTRAVE, que potencializa a gestão 
                  e a escalabilidade de clínicas em todo o Brasil.
                </p>
                
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Dr. Johnny une prática clínica, visão estratégica e espírito empreendedor 
                  para transformar o mercado estético e inspirar novos líderes.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-primary/20 hover:shadow-medical hover:shadow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="space-y-2">
                        <div className="w-10 h-10 mx-auto rounded-full bg-gradient-medical flex items-center justify-center">
                          <achievement.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm font-bold text-primary">
                          {achievement.label}
                        </div>
                        <div className="text-xs text-foreground/70">
                          {achievement.description}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA */}
              <Card className="bg-gradient-medical text-white border-0 shadow-medical">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 text-white" />
                      <span className="font-bold">Transforme sua clínica hoje!</span>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <Button 
                      size="lg"
                      onClick={scrollToForm}
                      className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-4"
                    >
                      PARTICIPAR DO WORKSHOP
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};