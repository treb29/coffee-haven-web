import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Visit Us',
      details: [
        '123 Coffee Street',
        'Downtown District, CD 12345',
        'Near Central Park'
      ],
      icon: '📍'
    },
    {
      title: 'Hours',
      details: [
        'Monday - Friday: 6:00 AM - 8:00 PM',
        'Saturday: 7:00 AM - 9:00 PM',
        'Sunday: 7:00 AM - 7:00 PM'
      ],
      icon: '🕐'
    },
    {
      title: 'Contact',
      details: [
        'Phone: (555) 123-BREW',
        'Email: hello@brewhaven.com',
        'For catering: catering@brewhaven.com'
      ],
      icon: '☎️'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📸' },
    { name: 'Facebook', url: '#', icon: '👍' },
    { name: 'Twitter', url: '#', icon: '🐦' }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to serve you the perfect cup. Come experience our cozy atmosphere and exceptional coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="coffee-card text-center">
              <CardHeader>
                <div className="text-4xl mb-2">{info.icon}</div>
                <CardTitle className="font-playfair text-xl text-primary">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <Card className="coffee-card mb-12">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-muted-foreground font-medium">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Find us in the heart of downtown</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media & CTA */}
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
            Connect With Us
          </h3>
          <p className="text-muted-foreground mb-6">
            Follow us for daily coffee inspiration, events, and special offers
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href={social.url} className="flex items-center gap-2">
                  <span>{social.icon}</span>
                  {social.name}
                </a>
              </Button>
            ))}
          </div>

          <Button size="lg" className="coffee-button text-primary-foreground font-semibold px-8 py-3 rounded-lg">
            Reserve a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;