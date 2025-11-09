const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-luxury-black relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 gold-shimmer opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair text-luxury-gold animate-fade-in matte tracking-wide px-4">
            The Chefonic Experience
          </h2>
          
          {/* Gold Divider */}
          <div className="divider-gold w-24 sm:w-32 mx-auto" />
          
          <div className="space-y-4 sm:space-y-6 text-luxury-ivory text-sm xs:text-base sm:text-lg leading-relaxed animate-fade-in-up px-4">
            <p className="text-luxury-champagne font-light tracking-wide">
              At <span className="text-luxury-gold font-semibold">Chefonic</span>, we go beyond catering. 
              Every menu, every plate, every live station is a curated performance blending aroma, 
              artistry, and emotion.
            </p>
            
            <p className="text-luxury-ivory/90 font-light tracking-wide">
              We transform celebrations into unforgettable culinary journeys where guests don't just 
              taste food—they witness its creation, feel its passion, and savor every moment of the experience.
            </p>
            
            {/* Stats Section - Responsive grid */}
            <div className="pt-8 sm:pt-12 grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-2 sm:space-y-3 group">
                <div className="text-luxury-gold text-4xl sm:text-5xl font-playfair font-bold group-hover:scale-110 transition-smooth">5000+</div>
                <div className="divider-gold w-12 sm:w-16 mx-auto opacity-60" />
                <p className="text-luxury-champagne/70 text-xs sm:text-sm tracking-wider uppercase font-light">Events Curated</p>
              </div>
              <div className="space-y-2 sm:space-y-3 group">
                <div className="text-luxury-gold text-4xl sm:text-5xl font-playfair font-bold group-hover:scale-110 transition-smooth">50+</div>
                <div className="divider-gold w-12 sm:w-16 mx-auto opacity-60" />
                <p className="text-luxury-champagne/70 text-xs sm:text-sm tracking-wider uppercase font-light">Live Stations</p>
              </div>
              <div className="space-y-2 sm:space-y-3 group">
                <div className="text-luxury-gold text-4xl sm:text-5xl font-playfair font-bold group-hover:scale-110 transition-smooth">100%</div>
                <div className="divider-gold w-12 sm:w-16 mx-auto opacity-60" />
                <p className="text-luxury-champagne/70 text-xs sm:text-sm tracking-wider uppercase font-light">Vegetarian Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
