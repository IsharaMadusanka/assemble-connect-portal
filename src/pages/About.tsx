import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Heart, Users, Globe, Mail, Phone } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Pastor John Silva",
      title: "Senior Pastor",
      description: "Pastor John has been leading our church for over 15 years with a heart for ministry and community service.",
      email: "pastor.john@aogwarakapola.lk",
      phone: "+94 77 XXX XXXX"
    },
    {
      name: "Rev. Mary Fernando",
      title: "Associate Pastor",
      description: "Rev. Mary leads our women's ministry and children's programs with passion and dedication.",
      email: "rev.mary@aogwarakapola.lk",
      phone: "+94 77 XXX XXXY"
    },
    {
      name: "Deacon Paul Rajesh",
      title: "Youth Pastor",
      description: "Deacon Paul ministers to our youth and young adults, helping them grow in faith and leadership.",
      email: "youth@aogwarakapola.lk",
      phone: "+94 77 XXX XXXZ"
    }
  ];

  const beliefs = [
    {
      title: "The Bible",
      description: "We believe the Bible is the inspired, infallible Word of God and our final authority for faith and practice."
    },
    {
      title: "Trinity",
      description: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit."
    },
    {
      title: "Salvation",
      description: "We believe salvation is by grace through faith in Jesus Christ alone, not by works."
    },
    {
      title: "Baptism",
      description: "We practice baptism by immersion as a public declaration of faith in Jesus Christ."
    },
    {
      title: "Holy Spirit",
      description: "We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues."
    },
    {
      title: "Second Coming",
      description: "We believe in the blessed hope of Christ's second coming and the resurrection of the dead."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-bg py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-hero-fg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our Church
            </h1>
            <p className="text-xl md:text-2xl text-hero-fg/90 mb-8">
              Learn about our mission, beliefs, history, and the people who make our church family special.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Mission */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To reach the unreached with the love of Christ, nurture believers in their faith journey, 
                and equip them to serve God and their community with purpose and passion. We are committed 
                to making disciples who make disciples, transforming lives and communities through the 
                power of the Gospel.
              </p>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a thriving church community where people encounter God, grow in faith, 
                build lasting relationships, and make a positive impact in Warakapola and beyond. 
                We envision a church that bridges generations, cultures, and backgrounds through 
                the unifying love of Jesus Christ.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Heart, title: "Love", description: "God's unconditional love in action" },
                { icon: Users, title: "Community", description: "Authentic relationships and fellowship" },
                { icon: Target, title: "Purpose", description: "Discovering God-given calling" },
                { icon: Globe, title: "Mission", description: "Reaching the world with the Gospel" }
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section id="faith" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Believe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fundamental beliefs are rooted in Scripture and guide our faith and practice as a church community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{belief.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Church History */}
      <section id="history" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our History
              </h2>
              <p className="text-lg text-muted-foreground">
                A journey of faith, growth, and community impact spanning decades.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary">1985</Badge>
                  <h3 className="text-2xl font-bold text-foreground">The Beginning</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Assemble Of God Warakapola was founded in 1985 by a small group of believers with a vision 
                  to spread the Gospel in the Warakapola region. Starting with just 15 members meeting in a 
                  rented hall, the church was built on prayer, faith, and a desire to serve the community.
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary">1992</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Growth & Expansion</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  By 1992, the congregation had grown to over 100 members. We purchased our first property 
                  and built a modest church building that could seat 150 people. This became the foundation 
                  for our ministry expansion into youth programs, women's fellowships, and community outreach.
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary">2010</Badge>
                  <h3 className="text-2xl font-bold text-foreground">New Sanctuary</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  With God's blessing and the congregation's sacrificial giving, we constructed our current 
                  sanctuary building. This modern facility can accommodate 400 people and includes dedicated 
                  spaces for children's ministry, youth activities, and community events.
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary">Today</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Continuing the Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Today, our church family has grown to over 300 active members representing diverse backgrounds 
                  and age groups. We continue to focus on worship, discipleship, fellowship, ministry, and 
                  evangelism while adapting to meet the needs of our changing community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our church with wisdom, compassion, and a heart for ministry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {leader.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {leader.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{leader.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 teal-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'd love to welcome you into our community of believers. Come as you are and discover 
              how God wants to use you to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/im-new">
                  Plan Your Visit
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;