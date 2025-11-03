import { Card } from "@/components/ui/card";
import { ChefHat, Flame, Sparkles, UtensilsCrossed } from "lucide-react";

const stations = [
  {
    icon: Flame,
    title: "Indian Live Stations",
    cuisine: "🇮🇳 Indian Culinary Theatre",
    items: [
      "Indian Barbecue Station",
      "Dosa Counter with Fresh Chutneys",
      "Parathas Junction",
      "Live Chaat Corner",
      "Pani Puri Bar",
      "Tandoor Experience"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Oriental Live Stations",
    cuisine: "🥢 Asian Flavours",
    items: [
      "Teppanyaki Theatre",
      "Sushi & Sashimi Bar",
      "Dim Sum Station",
      "Ramen Counter",
      "Wok Station",
      "Bao Bun Bar"
    ]
  },
  {
    icon: ChefHat,
    title: "Italian Live Stations",
    cuisine: "🇮🇹 Italian Artistry",
    items: [
      "Fresh Pasta Station",
      "Risotto Counter",
      "Wood-Fired Pizza",
      "Bruschetta Bar",
      "Tiramisu Station"
    ]
  },
  {
    icon: Sparkles,
    title: "Mexican Kitchen",
    cuisine: "🌮 Mexican Fiesta",
    items: [
      "Taco Bar",
      "Burrito Counter",
      "Enchiladas Station",
      "Nachos Supreme",
      "Guacamole Theatre"
    ]
  },
  {
    icon: Flame,
    title: "Lebanese Experience",
    cuisine: "🇱🇧 Middle Eastern Delights",
    items: [
      "Shawarma Station",
      "Falafel Counter",
      "Mezze Platter Bar",
      "Hummus & Baba Ganoush",
      "Fresh Pita Corner"
    ]
  },
  {
    icon: UtensilsCrossed,
    title: "Vietnamese Counter",
    cuisine: "🇻🇳 Vietnamese Kitchen",
    items: [
      "Pho Bar",
      "Banh Mi Station",
      "Spring Roll Theatre",
      "Vietnamese Coffee Bar"
    ]
  },
  {
    icon: Sparkles,
    title: "Live Dessert Theatres",
    cuisine: "🍰 Sweet Performances",
    items: [
      "Liquid Nitrogen Ice Cream",
      "Chocolate Fondue Fountain",
      "Kunafa Counter",
      "Crepe Station",
      "Waffle Bar",
      "Live Gulab Jamun Making"
    ]
  }
];

const LiveStations = () => {
  return (
    <section id="stations" className="py-20 sm:py-32 bg-luxury-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-primary animate-fade-in">
            Live Stations
          </h2>
          <p className="text-xl sm:text-2xl text-accent font-playfair animate-fade-in">
            Where Dining Becomes Theatre
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Interactive culinary theatres and artful presentations that transform your event 
            into an unforgettable gastronomic experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stations.map((station, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-elegant transition-smooth hover-scale border-border/50 hover:border-accent/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <station.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-playfair text-primary font-semibold">
                    {station.title}
                  </h3>
                </div>
                
                <p className="text-sm text-accent font-medium">
                  {station.cuisine}
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {station.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
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
