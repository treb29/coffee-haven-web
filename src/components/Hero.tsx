import { Button } from '@/components/ui/button';
import heroImage from '@/assets/coffee-hero.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="section-fade-in">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Where Every Cup
              <span className="block text-gradient">
                Tells a Story
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Experience the perfect blend of artisanal craftsmanship and cozy atmosphere. 
              Our carefully sourced beans are roasted to perfection, creating moments of pure bliss in every sip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="coffee-button text-primary-foreground font-semibold px-8 py-3 rounded-lg"
              >
                Explore Our Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transition-all"
              >
                Visit Us Today
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="section-fade-in">
            <div className="relative">
              <div className="coffee-hero rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Artisanal coffee cup with beautiful latte art"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;