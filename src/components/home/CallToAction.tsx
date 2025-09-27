import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 teal-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're exploring faith for the first time or looking for a church home, 
              we'd love to walk alongside you on your spiritual journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              >
                <Link to="/im-new">
                  Plan Your Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/connect">
                  Get Connected
                </Link>
              </Button>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Connect */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-white/80 mb-6">
                Connect with others, join a small group, or get involved in our ministries. 
                Find your place in our church family.
              </p>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/connect">
                  Get Involved
                </Link>
              </Button>
            </div>

            {/* Give */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
              <p className="text-white/80 mb-6">
                Your generosity helps us reach more people, support our community, 
                and advance God's kingdom locally and globally.
              </p>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/give">
                  Give Online
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">
              Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <a href="tel:+94-77-XXX-XXXX" className="text-white hover:text-white/80 transition-colors">
                📞 +94 77 XXX XXXX
              </a>
              <a href="mailto:info@aogwarakapola.lk" className="text-white hover:text-white/80 transition-colors">
                ✉️ info@aogwarakapola.lk
              </a>
              <Link to="/contact" className="text-white hover:text-white/80 transition-colors">
                📍 Visit Us in Warakapola
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;