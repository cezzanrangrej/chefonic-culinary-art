import { Card } from "@/components/ui/card";
import { ChefHat, Flame, Sparkles, UtensilsCrossed } from "lucide-react";

const stations = [
  {
    icon: Flame,
    title: "Indian Live Stations",
    cuisine: "🇮🇳 Indian Culinary Theatre",
    items: [
      "Indian Barbecue",
      "Amritsari Kulcha Counter",
      "Parathas Junction",
      "Live Tawas",
      "Live Dosa Station",
      "Art of Chaat"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Oriental Live Stations",
    cuisine: "🥢 Asian Flavours",
    items: [
      "Noodles Bar",
      "Teppanyaki Grills",
      "Live Sushi Counter",
      "Mongolian Stir-Fry",
      "Dim Sum Bar"
    ]
  },
  {
    icon: ChefHat,
    title: "Italian Live Stations",
    cuisine: "🇮🇹 Italian Artistry",
    items: [
      "Pasta Station",
      "Risotto Bar",
      "Live Wood-Fired Pizza"
    ]
  },
  {
    icon: Sparkles,
    title: "Mexican Kitchen",
    cuisine: "🌮 Mexican Fiesta",
    items: [
      "Enchiladas",
      "Tortillas",
      "Burritos"
    ]
  },
  {
    icon: Flame,
    title: "Lebanese Experience",
    cuisine: "🇱🇧 Middle Eastern Delights",
    items: [
      "Live Shawarma",
      "Authentic Falafel",
      "Pita Wraps & Mezze"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Vietnamese Counter",
    cuisine: "🇻🇳 Vietnamese Kitchen",
    items: [
      "Live Vietnamese Dim Sums",
      "Live Vietnamese Bubble Tea",
      "Xoi Xeo Sticky Rice" ]
  },
  {
    icon: Sparkles,
    title: "Live Dessert Theatres",
    cuisine: "🍰 Sweet Performances",
    items: [
      "Liquid Nitrogen Ice Cream",
      "Chocolate Fondue Fountain",
      "Kunafa Counter",
      "Waffle Bar"
    ]
  }
];

const LiveStations = () => {
  return (
    <section id="stations" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-luxury-ivory relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-transparent via-luxury-champagne to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair text-luxury-black animate-fade-in matte tracking-wide px-4">
            Live Stations
          </h2>
          
          {/* Gold Divider */}
          <div className="divider-gold w-24 sm:w-32 mx-auto" />
          
          <p className="text-lg xs:text-xl sm:text-2xl text-luxury-gold font-playfair animate-fade-in tracking-wide px-4">
            Where Dining Becomes Theatre
          </p>
          <p className="text-sm xs:text-base text-luxury-charcoal/70 max-w-2xl mx-auto animate-fade-in-up font-light tracking-wide leading-relaxed px-4">
            Interactive culinary theatres and artful presentations that transform your event 
            into an unforgettable gastronomic experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stations.map((station, index) => (
            <Card 
              key={index}
              className="p-5 sm:p-6 md:p-8 bg-white hover:shadow-gold transition-smooth hover-scale border-2 border-luxury-champagne hover:border-luxury-gold/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-smooth shrink-0">
                    <station.icon className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-playfair text-luxury-black font-semibold tracking-wide">
                    {station.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-luxury-gold font-medium tracking-wider">
                  {station.cuisine}
                </p>
                
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-luxury-charcoal/70 font-light">
                  {station.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-luxury-gold mt-0.5 sm:mt-1 shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStations;
