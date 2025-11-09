import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-luxury-black backdrop-blur-sm shadow-elegant border-b border-luxury-gold/20 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section - Responsive */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              src={logo} 
              alt="Chefonic Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto brightness-125 contrast-110" 
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-playfair text-luxury-gold font-bold tracking-[0.1em] sm:tracking-[0.15em] leading-tight matte brightness-110">
                CHEFONIC
              </span>
              <span className="text-[0.6rem] sm:text-xs text-white font-light tracking-wide hidden xs:block">
                Beyond Catering, Into Luxury
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-sm xl:text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('stations')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-sm xl:text-base"
            >
              Live Stations
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-sm xl:text-base"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-sm xl:text-base"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-sm xl:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Book Now Button */}
          <Button 
            variant="hero" 
            size="default"
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex border-luxury-gold hover:shadow-gold-glow text-sm"
          >
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-luxury-gold p-2 hover:bg-luxury-gold/10 rounded-md transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-luxury-charcoal border-t border-luxury-gold/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-left py-3 px-4 hover:bg-luxury-gold/10 rounded-md"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('stations')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-left py-3 px-4 hover:bg-luxury-gold/10 rounded-md"
            >
              Live Stations
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-left py-3 px-4 hover:bg-luxury-gold/10 rounded-md"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-left py-3 px-4 hover:bg-luxury-gold/10 rounded-md"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-luxury-ivory hover:text-luxury-gold transition-smooth font-light tracking-wide text-left py-3 px-4 hover:bg-luxury-gold/10 rounded-md"
            >
              Contact
            </button>
            <Button 
              variant="luxury" 
              size="default"
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2"
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
