const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📸' },
    { name: 'Facebook', url: '#', icon: '👍' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'LinkedIn', url: '#', icon: '💼' }
  ];

  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Catering', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">☕</span>
              </div>
              <span className="font-playfair font-semibold text-xl">
                Brew Haven
              </span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Where every cup tells a story. Crafting exceptional coffee experiences 
              since 2018.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <p>📍 123 Coffee Street<br />Downtown District, CD 12345</p>
              <p>☎️ (555) 123-BREW</p>
              <p>✉️ hello@brewhaven.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h4 className="font-playfair text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-background/80">
              <p>Mon - Fri: 6:00 AM - 8:00 PM</p>
              <p>Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 7:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Brew Haven. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;