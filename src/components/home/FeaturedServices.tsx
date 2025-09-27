import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, BookOpen, Calendar } from "lucide-react";

const FeaturedServices = () => {
  const services = [
    {
      icon: Users,
      title: "Sunday Worship",
      description: "Join us for inspiring worship, powerful sermons, and community fellowship every Sunday.",
      time: "9:00 AM & 6:00 PM",
      link: "/worship",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Heart,
      title: "Prayer Meeting",
      description: "Come together for prayer, intercession, and spiritual encouragement every Wednesday.",
      time: "7:00 PM",
      link: "/worship#prayer",
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Dive deeper into God's word with our weekly Bible study groups for all ages.",
      time: "Various Times",
      link: "/ministries#bible-studies",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Calendar,
      title: "Youth Ministry",
      description: "Dynamic programs for young people to grow in faith, friendship, and purpose.",
      time: "Saturdays 5:00 PM",
      link: "/ministries#youth",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience worship, fellowship, and spiritual growth through our various programs and services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {service.time}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              New to Our Church?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to welcome you! Learn what to expect, meet our team, and plan your first visit with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/im-new">
                  I'm New Here
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;