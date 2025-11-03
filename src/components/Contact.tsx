import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, Instagram } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon to craft your perfect celebration.");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 gold-shimmer opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-accent animate-fade-in">
              Let's Craft Your Celebration
            </h2>
            <p className="text-luxury-ivory/80 text-lg animate-fade-in-up">
              Begin your Chefonic experience — where every event goes Beyond Catering, Into Luxury
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-luxury-ivory text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-luxury-charcoal border-accent/30 text-luxury-ivory focus:border-accent transition-smooth"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-luxury-ivory text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-luxury-charcoal border-accent/30 text-luxury-ivory focus:border-accent transition-smooth"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-luxury-ivory text-sm font-medium">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-luxury-charcoal border-accent/30 text-luxury-ivory focus:border-accent transition-smooth"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="eventType" className="text-luxury-ivory text-sm font-medium">
                  Event Type *
                </label>
                <Input
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="bg-luxury-charcoal border-accent/30 text-luxury-ivory focus:border-accent transition-smooth"
                  placeholder="Wedding, Corporate, Theme Party..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-luxury-ivory text-sm font-medium">
                Tell us about your event *
              </label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-luxury-charcoal border-accent/30 text-luxury-ivory focus:border-accent transition-smooth min-h-32 resize-none"
                placeholder="Share your vision, guest count, date, and any special requirements..."
              />
            </div>

            <Button 
              type="submit" 
              variant="luxury" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Plan My Event
            </Button>
          </form>

          <div className="mt-16 pt-16 border-t border-accent/20">
            <div className="flex flex-col items-center space-y-8">
              <img 
                src={logoLight} 
                alt="Chefonic" 
                className="w-48 h-48 object-contain"
              />
              
              <div className="flex flex-wrap justify-center gap-8 text-luxury-ivory/80">
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <Phone size={20} />
                  <span>+91 XXXXX XXXXX</span>
                </a>
                <a href="mailto:info@chefonic.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <Mail size={20} />
                  <span>info@chefonic.com</span>
                </a>
                <a href="https://instagram.com/chefonic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <Instagram size={20} />
                  <span>@chefonic</span>
                </a>
              </div>

              <p className="text-accent font-playfair text-lg italic">
                Chefonic — The Art of Fine Catering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
