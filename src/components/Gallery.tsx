import { useState } from "react";
import { X, Utensils } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image', src: string } | null>(null);

  // Gallery items - all photos
  const galleryItems = [
    {
      type: 'image' as const,
      thumbnail: '2.JPG',
      src: '2.JPG',
      alt: 'Live Cooking Station'
    },
    {
      type: 'image' as const,
      thumbnail: '7.JPG',
      src: '7.JPG',
      alt: 'Elegant Table Setting'
    },
    {
      type: 'image' as const,
      thumbnail: '3.JPG',
      src: '3.JPG',
      alt: 'Gourmet Plating'
    },
    {
      type: 'image' as const,
      thumbnail: '4.JPG',
      src: '4.JPG',
      alt: 'Event Setup'
    },
    {
      type: 'image' as const,
      thumbnail: '5.JPG',
      src: '5.JPG',
      alt: 'Fine Dining Experience'
    },
    {
      type: 'image' as const,
      thumbnail: '8.PNG',
      src: '8.PNG',
      alt: 'Behind the Scenes'
    },
    {
      type: 'image' as const,
      thumbnail: '1.JPG',
      src: '1.JPG',
      alt: 'Dessert Station'
    },
    {
      type: 'image' as const,
      thumbnail: '6.JPG',
      src: '6.JPG',
      alt: 'Wedding Catering'
    },
    {
      type: 'image' as const,
      thumbnail: '12.jpg',
      src: '12.jpg',
      alt: 'Chef Preparing Cuisine'
    },
    {
      type: 'image' as const,
      thumbnail: '10.jpg',
      src: '10.jpg',
      alt: 'Luxury Catering Display'
    },
    {
      type: 'image' as const,
      thumbnail: '99.jpg',
      src: '99.jpg',
      alt: 'Buffet Presentation'
    },
    {
      type: 'image' as const,
      thumbnail: '11.jpg',
      src: '11.jpg',
      alt: 'Gourmet Food Service'
    },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-luxury-black relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 gold-shimmer opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair text-luxury-gold animate-fade-in matte tracking-wide px-4">
            Visual Journey
          </h2>
          
          {/* Gold Divider */}
          <div className="divider-gold w-24 sm:w-32 mx-auto" />
          
          <p className="text-sm xs:text-base text-luxury-champagne/80 max-w-2xl mx-auto animate-fade-in-up font-light tracking-wide leading-relaxed px-4">
            Experience the artistry, passion, and elegance that define every Chefonic celebration
          </p>
        </div>

        {/* Gallery Grid - Responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer border-2 border-luxury-gold/20 hover:border-luxury-gold transition-smooth"
              onClick={() => setSelectedMedia({ type: item.type, src: item.src })}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>

        {/* Signature Tableware Button - Responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 animate-fade-in px-4">
          <a 
            href="https://drive.google.com/drive/folders/1--519S7lgYho0sQZWpJF5XJFr2cve_7K?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button 
              variant="luxury"
              size="xl"
              className="group relative overflow-hidden shadow-gold-glow hover:shadow-gold px-6 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="relative shrink-0">
                  {/* Table Icon with Utensils */}
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-luxury-black group-hover:scale-110 transition-transform"
                  >
                    {/* Table Top */}
                    <rect x="3" y="8" width="18" height="2" rx="1" fill="currentColor" />
                    {/* Table Legs */}
                    <line x1="6" y1="10" x2="6" y2="20" />
                    <line x1="18" y1="10" x2="18" y2="20" />
                    {/* Decorative Plate on Table */}
                    <circle cx="12" cy="6" r="2" />
                  </svg>
                  <Utensils className="w-3 h-3 sm:w-4 sm:h-4 text-luxury-black absolute -top-1 -right-1" strokeWidth={2.5} />
                </div>
                <span className="font-playfair text-sm xs:text-base sm:text-lg lg:text-xl tracking-wider">
                  Tap Here for Signature Tableware
                </span>
              </div>
            </Button>
          </a>
        </div>
      </div>

      {/* Media Viewer Dialog - Responsive */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl lg:max-w-5xl w-full p-2 sm:p-4 md:p-0 bg-luxury-black border-2 border-luxury-gold/30">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-luxury-gold transition-smooth z-50"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>
          
          <img
            src={selectedMedia?.src || ''}
            alt="Gallery"
            className="w-full h-auto max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
