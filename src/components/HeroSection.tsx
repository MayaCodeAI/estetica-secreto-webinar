import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                SEGREDOS COMERCIAIS DA ESTÉTICA COM{" "}
                <span className="text-primary-light">DR. JOHNNY SECCO</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                O que as melhores clínicas estão fazendo para encantar, converter e 
                fidelizar pacientes todos os dias!
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Um workshop ao vivo, com técnicas comerciais reveladas por quem está 
                por trás delas e responsável por mais de 20.000 vendas de procedimentos 
                estéticos no Brasil.
              </p>
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-light" />
                <span className="font-semibold">07 de Outubro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-light" />
                <span className="font-semibold">20:00h</span>
              </div>
            </div>

            {/* CTA for mobile */}
            <div className="lg:hidden">
              <Button 
                size="lg" 
                className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg py-6"
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                PARTICIPAR DO WORKSHOP
              </Button>
            </div>
          </div>

          {/* Image and Form */}
          <div className="space-y-8">
            {/* Doctor Image */}
            <div className="flex justify-center">
              <img 
                src={drJohnnyImage} 
                alt="Dr. Johnny Secco" 
                className="w-full max-w-md object-cover rounded-lg shadow-medical"
              />
            </div>

            {/* Registration Form */}
            <Card id="registration-form" className="shadow-form border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      Cadastre-se abaixo gratuitamente:
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Vagas limitadas</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Digite seu melhor e-mail"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-medical hover:opacity-90 font-bold text-lg py-6 shadow-medical"
                    >
                      GARANTIR MINHA VAGA GRATUITA
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};