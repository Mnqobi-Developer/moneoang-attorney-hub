
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Scale } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-legal-navy shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-legal-gold p-2 rounded-md">
              <Scale className="w-6 h-6 text-legal-navy" />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-playfair font-bold leading-tight">
                MONEOANG S.M
              </h1>
              <p className="text-xs text-legal-gold font-medium tracking-wider">
                ATTORNEYS INC
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-legal-gold transition-colors font-medium text-sm tracking-wide"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-legal-gold transition-colors font-medium text-sm tracking-wide"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-legal-gold transition-colors font-medium text-sm tracking-wide"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-white hover:text-legal-gold transition-colors font-medium text-sm tracking-wide"
            >
              TEAM
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-legal-gold transition-colors font-medium text-sm tracking-wide"
            >
              CONTACT
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>076 720 4211</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>litigation@moneoangattorneysinc.co.za</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-6 py-2 text-sm"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-legal-gold p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-legal-gold/30">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-legal-gold transition-colors text-left py-2 font-medium"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-legal-gold transition-colors text-left py-2 font-medium"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-legal-gold transition-colors text-left py-2 font-medium"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-white hover:text-legal-gold transition-colors text-left py-2 font-medium"
              >
                TEAM
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-legal-gold transition-colors text-left py-2 font-medium"
              >
                CONTACT
              </button>
              <div className="pt-4 border-t border-legal-gold/30 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <Phone className="w-4 h-4" />
                  <span>076 720 4211</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">litigation@moneoangattorneysinc.co.za</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold py-3"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
