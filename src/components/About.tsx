const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-luxury-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-accent animate-fade-in">
            The Chefonic Experience
          </h2>
          
          <div className="space-y-6 text-luxury-ivory/90 text-base sm:text-lg leading-relaxed animate-fade-in-up">
            <p>
              At <span className="text-accent font-semibold">Chefonic</span>, we go beyond catering. 
              Every menu, every plate, every live station is a curated performance blending aroma, 
              artistry, and emotion.
            </p>
            
            <p>
              We transform celebrations into unforgettable culinary journeys where guests don't just 
              taste food—they witness its creation, feel its passion, and savor every moment of the experience.
            </p>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-accent text-4xl font-playfair">500+</div>
                <p className="text-luxury-ivory/70 text-sm">Events Curated</p>
              </div>
              <div className="space-y-2">
                <div className="text-accent text-4xl font-playfair">50+</div>
                <p className="text-luxury-ivory/70 text-sm">Live Stations</p>
              </div>
              <div className="space-y-2">
                <div className="text-accent text-4xl font-playfair">100%</div>
                <p className="text-luxury-ivory/70 text-sm">Vegetarian Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
