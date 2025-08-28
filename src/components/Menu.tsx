import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Signature Coffees',
      items: [
        {
          name: 'Brew Haven Blend',
          description: 'Our signature medium roast with notes of chocolate and caramel',
          price: '$4.50'
        },
        {
          name: 'Ethiopian Single Origin',
          description: 'Bright and fruity with floral aromatics',
          price: '$5.25'
        },
        {
          name: 'Cold Brew Reserve',
          description: 'Smooth, rich cold brew steeped for 18 hours',
          price: '$4.75'
        }
      ]
    },
    {
      title: 'Specialty Drinks',
      items: [
        {
          name: 'Sage Latte',
          description: 'Espresso with steamed milk and a hint of sage syrup',
          price: '$5.50'
        },
        {
          name: 'Honey Lavender Cappuccino',
          description: 'Classic cappuccino with local honey and dried lavender',
          price: '$5.25'
        },
        {
          name: 'Seasonal Spice Mocha',
          description: 'Rich chocolate with warming spices and whipped cream',
          price: '$5.75'
        }
      ]
    }
  ];

  const pastries = [
    { name: 'Almond Croissant', price: '$3.50' },
    { name: 'Blueberry Muffin', price: '$2.75' },
    { name: 'Artisan Sourdough Toast', price: '$4.25' },
    { name: 'Seasonal Scone', price: '$3.25' }
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated selections featuring the finest ingredients and expert craftsmanship
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {menuCategories.map((category, index) => (
            <Card key={index} className="coffee-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pastries Section */}
        <Card className="coffee-card">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-primary">
              Fresh Pastries & Light Bites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pastries.map((pastry, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-foreground font-medium">{pastry.name}</span>
                  <span className="text-primary font-semibold">{pastry.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can't decide? Ask our baristas for recommendations based on your taste preferences.
          </p>
          <Button size="lg" className="coffee-button text-primary-foreground font-semibold px-8 py-3 rounded-lg">
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;