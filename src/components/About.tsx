import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/assets/coffee-about.jpg';
import beansImage from '@/assets/coffee-beans.jpg';

const About = () => {
  const features = [
    {
      title: 'Ethically Sourced',
      description: 'Direct partnerships with farmers ensuring fair trade and sustainable practices.',
      icon: '🌱'
    },
    {
      title: 'Expert Roasting',
      description: 'Small-batch roasting techniques perfected over years of dedication.',
      icon: '🔥'
    },
    {
      title: 'Community Focused',
      description: 'A warm gathering place where neighbors become friends over great coffee.',
      icon: '❤️'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Coffee Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From bean to cup, every step is crafted with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Cozy coffee shop interior with warm atmosphere"
                className="w-full h-[500px] object-cover rounded-2xl coffee-card"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-3xl font-semibold text-foreground mb-6">
              Crafted with Love, Served with Care
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2018, Brew Haven began as a simple dream: to create a space where 
              exceptional coffee meets genuine community. We believe that every cup should be 
              an experience, not just a beverage.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our master roasters work with premium beans from sustainable farms worldwide, 
              ensuring that every sip supports both your taste buds and the communities that 
              grow our coffee.
            </p>

            {/* Bean image with overlay */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden coffee-card">
              <img
                src={beansImage}
                alt="Premium coffee beans"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <span className="text-primary-foreground font-playfair text-xl font-semibold bg-primary/80 px-6 py-2 rounded-lg">
                  Premium Quality Beans
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="coffee-card text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;