
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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <div className="bg-legal-gold p-2 rounded-md">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-legal-navy" />
            </div>
            <h1 className="text-sm sm:text-lg md:text-xl font-playfair font-bold text-legal-navy truncate">
              <span className="hidden sm:inline">Moneoang SM Attorneys Inc</span>
              <span className="sm:hidden">Moneoang S.M<br />Attorneys Inc</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-legal-gold transition-colors text-sm xl:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-legal-gold transition-colors text-sm xl:text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-legal-gold transition-colors text-sm xl:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-legal-gold transition-colors text-sm xl:text-base"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-legal-gold transition-colors text-sm xl:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-4">
            <div className="flex items-center space-x-2 text-xs 2xl:text-sm text-gray-600">
              <Phone className="w-3 h-3 2xl:w-4 2xl:h-4" />
              <span>076 720 4211</span>
            </div>
            <div className="flex items-center space-x-2 text-xs 2xl:text-sm text-gray-600 max-w-48 truncate">
              <Mail className="w-3 h-3 2xl:w-4 2xl:h-4 flex-shrink-0" />
              <span className="truncate">litigation@moneoangattorneysinc.co.za</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy text-xs 2xl:text-sm px-3 2xl:px-4 py-2"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-legal-gold p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left py-2"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-legal-gold transition-colors text-left py-2"
              >
                Contact
              </button>
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>076 720 4211</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">litigation@moneoangattorneysinc.co.za</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy text-sm py-3"
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
