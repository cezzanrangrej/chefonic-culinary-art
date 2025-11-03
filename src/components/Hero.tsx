import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gold-shimmer opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-dark opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up space-y-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-playfair text-accent font-bold tracking-wider animate-glow">
            CHEFONIC
          </h1>
          <div className="h-1 w-32 mx-auto gradient-gold animate-shimmer" />
        </div>
        
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-foreground text-lg sm:text-xl md:text-2xl font-light tracking-wider">
            Where Culinary Artistry Meets Live Performance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Plan Your Celebration
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              onClick={() => scrollToSection('stations')}
              className="w-full sm:w-auto text-foreground hover:text-accent border border-border hover:border-accent"
            >
              Explore Our Stations
            </Button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-accent animate-bounce cursor-pointer hover:text-luxury-ivory transition-smooth"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
