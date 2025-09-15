import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsFormOpen(false);
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                SEGREDOS COMERCIAIS DA ESTÉTICA COM{" "}
                <span className="bg-gradient-gold-text bg-clip-text text-transparent font-extrabold drop-shadow-lg">
                  DR. JOHNNY SECCO
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
                O que as <span className="text-accent-gold font-bold">melhores clínicas</span> estão fazendo para encantar, converter e 
                fidelizar pacientes todos os dias!
              </p>
              
              <p className="text-lg text-white/85 leading-relaxed">
                Um <span className="text-accent-gold font-semibold">workshop ao vivo</span>, com <span className="text-accent-gold font-semibold">técnicas comerciais</span> reveladas por quem está 
                por trás delas e responsável por mais de <span className="text-accent-gold font-bold">20.000 vendas</span> de procedimentos 
                estéticos no Brasil.
              </p>
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-accent-gold" />
                <span className="font-semibold">07 de Outubro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-accent-gold" />
                <span className="font-semibold">20:00h</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full bg-gradient-gold hover:opacity-90 text-accent-gold-foreground font-bold text-lg py-6 shadow-gold border-2 border-accent-gold/20">
                    🎯 GARANTIR MINHA VAGA GRATUITA
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                      Cadastre-se gratuitamente
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Vagas limitadas</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="modal-name" className="text-sm font-medium">
                          Nome completo
                        </Label>
                        <Input id="modal-name" type="text" placeholder="Digite seu nome completo" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} className="h-12 text-base" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="modal-email" className="text-sm font-medium">
                          E-mail
                        </Label>
                        <Input id="modal-email" type="email" placeholder="Digite seu melhor e-mail" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} className="h-12 text-base" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="modal-phone" className="text-sm font-medium">
                          Telefone
                        </Label>
                        <Input id="modal-phone" type="tel" placeholder="(00) 00000-0000" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} className="h-12 text-base" required />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-gradient-medical hover:opacity-90 font-bold text-lg py-6 shadow-medical">
                        CONFIRMAR INSCRIÇÃO
                      </Button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Image with badges */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="relative">
              {/* Doctor Image */}
              <div className="relative group">
                <img src={drJohnnyImage} alt="Dr. Johnny Secco - Especialista em Estética e Gestão de Clínicas" className="w-full max-w-sm mx-auto lg:max-w-md object-cover rounded-2xl shadow-image border-4 border-white/20 group-hover:scale-105 transition-transform duration-300" />
                
                {/* Achievement badges */}
                <div className="absolute -top-4 -right-4 lg:-right-8">
                  <Badge className="bg-gradient-gold text-accent-gold-foreground font-bold shadow-gold border-accent-gold/20">
                    <Award className="w-4 h-4 mr-1" />
                    26+ Clínicas
                  </Badge>
                </div>
                
                <div className="absolute -bottom-4 -left-4 lg:-left-8">
                  <Badge className="bg-gradient-gold text-accent-gold-foreground font-bold shadow-gold border-accent-gold/20">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +20.000 Vendas
                  </Badge>
                </div>
              </div>
              
              {/* Secondary CTA for desktop */}
              <div className="hidden lg:block mt-6">
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};