import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Globe, Heart } from "lucide-react";

const AboutPreview = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in God's unconditional love and strive to share it with everyone."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful relationships and supporting one another in faith."
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Helping people discover their God-given purpose and calling in life."
    },
    {
      icon: Globe,
      title: "Mission",
      description: "Reaching our community and the world with the gospel of Jesus Christ."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To reach the unreached with the love of Christ, nurture believers in their faith journey, 
                  and equip them to serve God and their community with purpose and passion.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a thriving church community where people encounter God, grow in faith, 
                  build lasting relationships, and make a positive impact in Warakapola and beyond.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/about#leadership">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;