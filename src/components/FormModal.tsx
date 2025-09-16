import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Inscrição realizada!",
      description: "Você receberá mais informações em breve.",
    });
    
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white">
            Garantir Minha Vaga <span className="text-purple-400">Gratuita</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white/90">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              className="bg-background/50 border-purple-500/30 text-white placeholder:text-white/50 focus:border-purple-400"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/90">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu melhor e-mail"
              className="bg-background/50 border-purple-500/30 text-white placeholder:text-white/50 focus:border-purple-400"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/90">WhatsApp</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(00) 00000-0000"
              className="bg-background/50 border-purple-500/30 text-white placeholder:text-white/50 focus:border-purple-400"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg shadow-lg shadow-purple-500/25"
          >
            GARANTIR MINHA VAGA AGORA
          </Button>
          
          <p className="text-xs text-white/60 text-center">
            Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};