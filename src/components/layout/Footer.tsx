import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-hero-fg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Church Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">AG</span>
              </div>
              <h3 className="text-xl font-bold">Assemble Of God Warakapola</h3>
            </div>
            <p className="text-hero-fg/80 mb-6 max-w-md">
              Join our church community for worship, fellowship, and spiritual growth. 
              We welcome everyone to experience God's love and find their purpose.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-hero-fg/80">Warakapola, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-hero-fg/80">+94 77 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-hero-fg/80">info@aogwarakapola.lk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/im-new" className="text-hero-fg/80 hover:text-primary transition-colors">I'm New</Link></li>
              <li><Link to="/about" className="text-hero-fg/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/worship" className="text-hero-fg/80 hover:text-primary transition-colors">Worship</Link></li>
              <li><Link to="/ministries" className="text-hero-fg/80 hover:text-primary transition-colors">Ministries</Link></li>
              <li><Link to="/events" className="text-hero-fg/80 hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/connect" className="text-hero-fg/80 hover:text-primary transition-colors">Connect</Link></li>
              <li><Link to="/give" className="text-hero-fg/80 hover:text-primary transition-colors">Give</Link></li>
            </ul>
          </div>

          {/* Service Times & Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Sunday Worship</p>
                  <p className="text-hero-fg/80 text-sm">9:00 AM & 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Wednesday Prayer</p>
                  <p className="text-hero-fg/80 text-sm">7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hero-fg/80 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hero-fg/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hero-fg/80 hover:text-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hero-fg/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hero-fg/60 text-sm">
            © {new Date().getFullYear()} Assemble Of God Warakapola. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-hero-fg/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-hero-fg/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;