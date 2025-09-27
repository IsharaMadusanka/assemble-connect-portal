import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users, Coffee, Heart, HelpCircle, Calendar, Phone } from "lucide-react";

const ImNew = () => {
  const serviceInfo = [
    {
      name: "Sunday Morning Worship",
      time: "9:00 AM",
      duration: "1.5 hours",
      description: "Contemporary worship with inspiring music and practical teaching",
      audience: "All ages welcome"
    },
    {
      name: "Sunday Evening Service",
      time: "6:00 PM", 
      duration: "1 hour",
      description: "More intimate service with prayer and Bible study",
      audience: "All ages welcome"
    },
    {
      name: "Wednesday Prayer Meeting",
      time: "7:00 PM",
      duration: "1 hour", 
      description: "Community prayer time and spiritual encouragement",
      audience: "All ages welcome"
    }
  ];

  const whatToExpect = [
    {
      icon: Users,
      title: "Warm Welcome",
      description: "Our greeting team will welcome you at the door and help you find your way around."
    },
    {
      icon: Coffee,
      title: "Fellowship Time", 
      description: "Enjoy coffee and light refreshments before and after the service."
    },
    {
      icon: Heart,
      title: "Inspiring Worship",
      description: "Experience meaningful worship through contemporary music and heartfelt singing."
    },
    {
      icon: HelpCircle,
      title: "Practical Teaching",
      description: "Hear Bible-based messages that apply to everyday life and challenges."
    }
  ];

  const faqs = [
    {
      question: "What should I wear?",
      answer: "Come as you are! We dress casually to semi-formal. The most important thing is that you're comfortable."
    },
    {
      question: "What about my children?",
      answer: "Children are always welcome in our main service. We also have dedicated children's programs during Sunday morning service for ages 3-12."
    },
    {
      question: "Do I need to bring anything?",
      answer: "Just bring yourself! We provide Bibles, worship guides, and everything else you need. Feel free to bring a notebook if you like to take notes."
    },
    {
      question: "Where should I park?",
      answer: "We have free parking available in our church lot. Visitors can park in any unmarked space. Our ushers can help direct you."
    },
    {
      question: "How long are the services?",
      answer: "Sunday morning worship is about 1.5 hours, evening service is 1 hour, and Wednesday prayer meeting is 1 hour."
    },
    {
      question: "Will anyone pressure me to join or give money?",
      answer: "Absolutely not! We want you to feel comfortable exploring faith at your own pace. There's no pressure to join, give, or commit to anything."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-bg py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-hero-fg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome! We're So Glad You're Here
            </h1>
            <p className="text-xl md:text-2xl text-hero-fg/90 mb-8">
              Whether this is your first time visiting a church or you're looking for a new church home, 
              we'd love to help you feel comfortable and welcome.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Plan Your Visit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What to Expect When You Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We want your first visit to be comfortable and meaningful. Here's what you can expect when you join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whatToExpect.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section id="service-times" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Times & Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service time that works best for you. All are welcome at every service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceInfo.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      {service.audience}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {service.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Main Sanctuary, Warakapola</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+94 77 XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We know visiting a new church can raise questions. Here are answers to some common ones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 teal-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're here to help! Don't hesitate to reach out with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about#leadership">
                  Meet Our Pastor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImNew;