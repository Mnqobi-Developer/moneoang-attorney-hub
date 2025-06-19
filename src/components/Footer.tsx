
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalServices = [
    'Civil Litigation',
    'Criminal Litigation',
    'Family Law',
    'Immigration Law',
    'Estate Planning',
    'Labour Law'
  ];

  return (
    <footer className="bg-legal-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/05c09952-d8e3-4cad-81b0-1558bb9d5302.png" 
                alt="Moneoang SM Attorneys Inc Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <h3 className="font-playfair font-bold text-white text-lg leading-none">
                  MONEOANG S.M
                </h3>
                <span className="text-legal-gold text-sm font-medium">ATTORNEYS INC</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional legal services in Letaba. Committed to providing solutions 
              to your legal problems with integrity and excellence.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-legal-gold">Boramelao • Vaylmeri • Prokureurs</p>
              <p className="text-sm">Multilingual legal services available</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-legal-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-legal-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-legal-gold mb-6">Legal Services</h4>
            <ul className="space-y-3">
              {legalServices.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-legal-gold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-white mb-2">Address</h5>
                <p className="text-gray-300 text-sm">
                  No 1 Bankuna Street<br />
                  Nkowankowa-A<br />
                  Letaba 0870
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Phone</h5>
                <p className="text-gray-300 text-sm">076 720 4211</p>
                <p className="text-gray-300 text-sm">072 920 0198</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Email</h5>
                <p className="text-gray-300 text-sm break-all">
                  litigation@moneoangattorneysinc.co.za
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-legal-gold/30 mt-12 pt-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-white mb-4">
            Need Legal Assistance?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't wait - contact our experienced legal team today for professional advice 
            and representation for your legal matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-legal-navy">
              Emergency Legal Help
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-legal-gold/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            <p>&copy; {currentYear} Moneoang SM Attorneys Inc. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-legal-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-legal-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-legal-gold transition-colors">Professional Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
