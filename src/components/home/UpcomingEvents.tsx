import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Christmas Celebration Service",
      description: "Join us for a special Christmas service with carols, special music, and a message of hope.",
      date: "December 25, 2024",
      time: "9:00 AM",
      location: "Main Sanctuary",
      category: "Special Service",
      featured: true
    },
    {
      id: 2,
      title: "Youth Fellowship Night",
      description: "An evening of worship, games, and fellowship for young adults aged 16-30.",
      date: "December 28, 2024",
      time: "6:00 PM",
      location: "Youth Hall",
      category: "Youth Ministry",
      featured: false
    },
    {
      id: 3,
      title: "New Year Prayer Service",
      description: "Begin the new year with prayer, thanksgiving, and dedication to God.",
      date: "January 1, 2025",
      time: "7:00 PM",
      location: "Main Sanctuary",
      category: "Prayer Meeting",
      featured: true
    },
    {
      id: 4,
      title: "Bible Study Workshop",
      description: "Learn effective Bible study methods and deepen your understanding of Scripture.",
      date: "January 5, 2025",
      time: "10:00 AM",
      location: "Conference Room",
      category: "Bible Study",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our church community through our various events, services, and fellowship opportunities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${
                event.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant={event.featured ? "default" : "secondary"} 
                        className="text-xs"
                      >
                        {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge variant="outline" className="text-xs text-primary border-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link to={`/events/${event.id}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Button asChild size="lg">
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                View All Events
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/events#calendar">
                <Users className="mr-2 h-5 w-5" />
                Events Calendar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;