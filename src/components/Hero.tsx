import { Button } from "@/components/ui/button";
import { ChevronDown, UtensilsCrossed } from "lucide-react";
import chefonicLogo from "@/assets/chefonic-logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-luxury-black overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Animated Gold Shimmer Background */}
      <div className="absolute inset-0 gold-shimmer opacity-10" />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 gradient-dark opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-20 sm:pb-24">
        <div className="animate-fade-in-up space-y-4 sm:space-y-6 md:space-y-8">
          {/* Logo Image - Responsive sizing */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <img 
              src={chefonicLogo} 
              alt="Chefonic Logo" 
              className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain animate-[fadeIn_1.2s_ease-out] brightness-110 contrast-110"
            />
          </div>
          
          {/* Main Logo/Brand Name - Responsive text sizes */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair text-luxury-gold font-bold tracking-[0.15em] sm:tracking-[0.2em] matte brightness-110 overflow-hidden leading-tight">
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.1s_both]">C</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.2s_both]">H</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.3s_both]">E</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.4s_both]">F</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.5s_both]">O</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.6s_both]">N</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.7s_both]">I</span>
            <span className="inline-block animate-[letterServe_0.8s_ease-out_0.8s_both]">C</span>
          </h1>
          
          {/* Decorative Catering Icon - Responsive sizing */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 animate-[slideUp_1s_ease-out] hover:animate-[swayLeftRight_3s_ease-in-out_infinite]">
            <div className="h-[1px] sm:h-[2px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-luxury-gold"></div>
            <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-luxury-gold animate-[swayLeftRight_3s_ease-in-out_infinite]" strokeWidth={1.5} />
            <div className="h-[1px] sm:h-[2px] w-12 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-luxury-gold"></div>
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in mt-6 sm:mt-8" style={{ animationDelay: '0.3s' }}>
          {/* Tagline in Ivory - Responsive text */}
          <p className="text-luxury-ivory text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] sm:tracking-[0.15em] leading-relaxed px-2">
            Beyond Catering, Into Luxury
          </p>
          
          <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg font-light tracking-wide sm:tracking-wider max-w-2xl mx-auto px-4">
            More than a service - it’s statement.
          </p>
          
          {/* CTA Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 sm:pt-6 md:pt-8 px-4 sm:px-0">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto text-sm sm:text-base px-6 py-5 sm:py-6"
            >
              Plan Your Celebration
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              onClick={() => scrollToSection('stations')}
              className="w-full sm:w-auto text-sm sm:text-base px-6 py-5 sm:py-6 text-luxury-ivory hover:text-luxury-gold border-2 border-luxury-gold/40 hover:border-luxury-gold hover:shadow-gold-glow"
            >
              Explore Our Stations
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on very small screens */}
        <button 
          onClick={() => scrollToSection('about')}
          className="hidden sm:block absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-luxury-gold animate-bounce cursor-pointer hover:text-luxury-gold-bright transition-smooth hover:shadow-gold-glow"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="sm:w-10 sm:h-10" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
