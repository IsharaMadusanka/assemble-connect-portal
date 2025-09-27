import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 overlay-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <p className="text-primary text-lg font-medium mb-4 animate-fade-in">
            Welcome to
          </p>
          
          {/* Church Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-fg mb-6 animate-slide-up">
            Assemble Of God
            <span className="block text-primary">Warakapola</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-hero-fg/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Come as you are. Find hope, community, and purpose in God's love.
            Join us for worship, fellowship, and spiritual growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/im-new">
                <Calendar className="mr-2 h-5 w-5" />
                Plan Your Visit
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-hero-fg/10 border-hero-fg/30 text-hero-fg hover:bg-hero-fg hover:text-hero-bg"
            >
              <Link to="/worship#livestream">
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Link>
            </Button>
          </div>
          
          {/* Service Times Info */}
          <div className="inline-flex items-center space-x-6 text-hero-fg/80 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Sundays: 9:00 AM & 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Warakapola, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-fg/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hero-fg/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;