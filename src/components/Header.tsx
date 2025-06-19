
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/05c09952-d8e3-4cad-81b0-1558bb9d5302.png" 
              alt="Moneoang SM Attorneys Inc Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="font-playfair font-bold text-legal-navy text-lg leading-none">
                MONEOANG S.M
              </h1>
              <span className="text-legal-gold text-sm font-medium">ATTORNEYS INC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-legal-navy hover:text-legal-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white"
            >
              <User className="w-4 h-4 mr-2" />
              Client Portal
            </Button>
            <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-legal-navy hover:text-legal-gold transition-colors duration-200 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Client Portal
                  </Button>
                  <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
