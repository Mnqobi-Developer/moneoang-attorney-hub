
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <header className="fixed top-0 w-full z-50 bg-legal-navy shadow-lg border-b border-legal-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-legal-gold rounded-lg flex items-center justify-center">
              <span className="text-legal-navy font-bold text-lg sm:text-xl">?</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-playfair font-bold text-white text-sm sm:text-lg leading-none">
                MONEOANG S.M
              </h1>
              <span className="text-legal-gold text-xs sm:text-sm font-medium">ATTORNEYS INC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-legal-gold transition-colors duration-300 font-semibold text-sm tracking-wide uppercase relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-legal-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/admin">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-legal-gold hover:bg-white/10 transition-all duration-300"
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                variant="outline"
                className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-navy font-semibold transition-all duration-300"
              >
                <User className="w-4 h-4 mr-2" />
                Client Portal
              </Button>
            </Link>
            <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:text-legal-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-legal-navy border-l border-legal-gold/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-legal-gold transition-colors duration-300 font-semibold text-lg tracking-wide uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-legal-gold/20">
                  <Link to="/admin">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:text-legal-gold hover:bg-white/10"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Admin Dashboard
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-navy font-semibold"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Client Portal
                    </Button>
                  </Link>
                  <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-bold shadow-lg">
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
