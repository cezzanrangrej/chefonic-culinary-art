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
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-luxury-black relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 gold-shimmer opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair text-luxury-gold animate-fade-in matte tracking-wide px-4">
            Our Signature Services
          </h2>
          
          {/* Gold Divider */}
          <div className="divider-gold w-24 sm:w-32 mx-auto" />
          
          <p className="text-sm xs:text-base text-luxury-champagne/80 max-w-2xl mx-auto animate-fade-in-up font-light tracking-wide leading-relaxed px-4">
            Curated experiences for every celebration, crafted with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`p-5 sm:p-6 md:p-8 lg:p-10 ${service.bg} ${service.textColor || 'text-luxury-black'} border-2 ${service.bg === 'bg-luxury-ivory' ? 'border-luxury-gold/30' : 'border-luxury-gold/20'} hover:border-luxury-gold shadow-card hover:shadow-gold-glow transition-smooth hover-scale group`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-smooth shrink-0`}>
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-luxury-gold" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-playfair font-bold tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-base xs:text-lg text-luxury-gold font-playfair italic tracking-wide">
                    {service.tagline}
                  </p>
                </div>
                
                <p className={`text-sm xs:text-base leading-relaxed font-light tracking-wide ${service.textColor ? 'opacity-90' : 'text-luxury-charcoal/80'}`}>
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in px-4">
          <Button 
            variant="luxury" 
            size="xl"
            onClick={scrollToContact}
            className="shadow-gold-glow hover:shadow-gold w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
          >
            Begin Your Chefonic Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
