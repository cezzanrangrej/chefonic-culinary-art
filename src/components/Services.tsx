import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase, PartyPopper, Crown } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    tagline: "Where Love Meets Flavour",
    description: "Personalized menus, destination setups, and chef-led creations that make your special day truly unforgettable. Every dish tells your love story.",
    bg: "bg-luxury-ivory",
    iconBg: "bg-accent/10"
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    tagline: "Impress with Taste",
    description: "Vegetarian fine dining with precision service and brand-enhancing menus. Elevate your corporate gatherings with sophistication.",
    bg: "bg-luxury-black",
    textColor: "text-luxury-ivory",
    iconBg: "bg-accent/20"
  },
  {
    icon: PartyPopper,
    title: "Theme Parties",
    tagline: "Your Imagination, Our Expertise",
    description: "From bohemian brunches to glamorous soirées—tailored food art that brings your vision to life with creative flair.",
    bg: "bg-luxury-ivory",
    iconBg: "bg-accent/10"
  },
  {
    icon: Crown,
    title: "Niche Events",
    tagline: "Exclusivity Redefined",
    description: "Elite gatherings with custom menu design. For those who seek the extraordinary and demand perfection in every detail.",
    bg: "bg-luxury-charcoal",
    textColor: "text-luxury-ivory",
    iconBg: "bg-accent/20"
  }
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-32 bg-luxury-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-accent animate-fade-in">
            Our Signature Services
          </h2>
          <p className="text-luxury-ivory/80 max-w-2xl mx-auto animate-fade-in-up">
            Curated experiences for every celebration, crafted with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`p-8 sm:p-10 ${service.bg} ${service.textColor || 'text-primary'} border-none shadow-elegant hover:shadow-gold transition-smooth hover-scale`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-full ${service.iconBg} flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold">
                    {service.title}
                  </h3>
                  <p className="text-accent text-lg font-playfair italic">
                    {service.tagline}
                  </p>
                </div>
                
                <p className={`text-base leading-relaxed ${service.textColor ? 'opacity-90' : 'text-muted-foreground'}`}>
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            variant="luxury" 
            size="xl"
            onClick={scrollToContact}
            className="shadow-gold"
          >
            Begin Your Chefonic Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
