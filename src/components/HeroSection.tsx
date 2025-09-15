import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import drJohnnyImage from "@/assets/dr-johnny-secco.png";

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start min-h-screen">
          
          {/* Content - 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                SEGREDOS COMERCIAIS DA ESTÉTICA COM{" "}
                <span className="bg-gradient-gold-text bg-clip-text text-transparent font-extrabold">
                  DR. JOHNNY SECCO
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-medium">
                O que as <span className="text-primary font-bold">melhores clínicas</span> estão fazendo para encantar, converter e 
                fidelizar pacientes todos os dias!
              </p>
              
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Um <span className="text-primary font-semibold">workshop ao vivo</span>, com <span className="text-primary font-semibold">técnicas comerciais</span> reveladas por quem está 
                por trás delas e responsável por mais de <span className="text-primary font-bold">20.000 vendas</span> de procedimentos 
                estéticos no Brasil.
              </p>
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap gap-4 text-foreground">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold">07 de Outubro</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">20:00h</span>
              </div>
            </div>

            {/* Doctor Image - Mobile Only */}
            <div className="lg:hidden">
              <div className="relative group w-48 mx-auto">
                <img 
                  src={drJohnnyImage} 
                  alt="Dr. Johnny Secco - Especialista em Estética e Gestão de Clínicas" 
                  className="w-full object-cover rounded-2xl shadow-image border-2 border-primary/30"
                />
                
                {/* Achievement badges - Mobile */}
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-gradient-gold text-accent-gold-foreground font-bold text-xs">
                    <Award className="w-3 h-3 mr-1" />
                    26+ Clínicas
                  </Badge>
                </div>
                
                <div className="absolute -bottom-2 -left-2">
                  <Badge className="bg-gradient-gold text-accent-gold-foreground font-bold text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +20k Vendas
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form - 5 columns on large screens */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-8">
              {/* Doctor Image - Desktop Only */}
              <div className="hidden lg:block mb-6">
                <div className="relative group">
                  <img 
                    src={drJohnnyImage} 
                    alt="Dr. Johnny Secco - Especialista em Estética e Gestão de Clínicas" 
                    className="w-full max-w-sm mx-auto object-cover rounded-2xl shadow-image border-2 border-primary/30 group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Achievement badges - Desktop */}
                  <div className="absolute -top-4 -right-4">
                    <Badge className="bg-gradient-gold text-accent-gold-foreground font-bold shadow-gold">
                      <Award className="w-4 h-4 mr-1" />
                      26+ Clínicas
                    </Badge>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4">
                    <Badge className="bg-gradient-gold text-accent-gold-foreground font-bold shadow-gold">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +20.000 Vendas
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-form" id="registration-form">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                      Garantir Minha Vaga
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">Vagas limitadas</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome completo
                      </Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Digite seu nome completo" 
                        value={formData.name} 
                        onChange={e => handleInputChange("name", e.target.value)} 
                        className="h-12 text-base bg-background/50 border-primary/30 focus:border-primary" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mail
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Digite seu melhor e-mail" 
                        value={formData.email} 
                        onChange={e => handleInputChange("email", e.target.value)} 
                        className="h-12 text-base bg-background/50 border-primary/30 focus:border-primary" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Telefone
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        value={formData.phone} 
                        onChange={e => handleInputChange("phone", e.target.value)} 
                        className="h-12 text-base bg-background/50 border-primary/30 focus:border-primary" 
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-medical hover:opacity-90 font-bold text-lg py-6 shadow-medical"
                    >
                      🎯 CONFIRMAR INSCRIÇÃO GRATUITA
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Seus dados estão protegidos e não serão compartilhados.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};