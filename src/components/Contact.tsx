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
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <Phone size={20} />
                  <span>+91 98765 43210</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:info@chefonic.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <Mail size={20} />
                  <span>info@chefonic.com</span>
                </a>
                <a href="https://instagram.com/chefonic_catering" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-smooth">
                  <Instagram size={20} />
                  <span>@chefonic_catering</span>
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
