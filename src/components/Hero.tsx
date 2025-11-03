import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoDark from "@/assets/logo-dark.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-luxury-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gold-shimmer opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-dark opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <img 
            src={logoDark} 
            alt="Chefonic - Beyond Catering, Into Luxury" 
            className="w-full max-w-md mx-auto mb-8 animate-glow"
          />
        </div>
        
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-luxury-ivory text-lg sm:text-xl md:text-2xl font-light tracking-wider">
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
              className="w-full sm:w-auto text-luxury-ivory hover:text-accent border border-luxury-ivory/20 hover:border-accent"
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
