import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-light.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-accent/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Chefonic Logo" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-playfair text-accent font-bold tracking-wider leading-tight">
                CHEFONIC
              </span>
              <span className="text-xs text-muted-foreground font-light">
                Beyond Catering, Into Luxury
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('stations')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Live Stations
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Contact
            </button>
          </nav>

          <Button 
            variant="hero" 
            size="default"
            onClick={() => scrollToSection('contact')}
            className="hidden sm:flex"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
