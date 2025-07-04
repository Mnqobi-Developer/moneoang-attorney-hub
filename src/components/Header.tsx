
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-legal-navy">
              Moneoang SM Attorneys Inc
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-legal-gold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-legal-gold transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-legal-gold transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-legal-gold transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-legal-gold transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>076 720 4211</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>litigation@moneoangattorneysinc.co.za</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-legal-gold"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>076 720 4211</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy"
                >
                  Free Consultation
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
