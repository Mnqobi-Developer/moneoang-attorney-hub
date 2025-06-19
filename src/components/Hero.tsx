
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-legal-navy via-legal-navy-light to-legal-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Solution To Your{' '}
            <span className="text-legal-gold">Legal Problems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Expert legal representation in Letaba. Specializing in civil litigation, family law, immigration, and comprehensive legal services.
          </p>

          {/* Service Types */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="bg-legal-gold/20 text-legal-gold px-4 py-2 rounded-full text-sm font-medium">
              Boramelao
            </span>
            <span className="bg-legal-gold/20 text-legal-gold px-4 py-2 rounded-full text-sm font-medium">
              Vaylmeri
            </span>
            <span className="bg-legal-gold/20 text-legal-gold px-4 py-2 rounded-full text-sm font-medium">
              Prokureurs
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-8 py-4 text-lg h-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-legal-navy px-8 py-4 text-lg h-auto"
            >
              <User className="w-5 h-5 mr-2" />
              Our Services
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-white">
              <h3 className="font-semibold text-legal-gold mb-2">Phone</h3>
              <p>076 720 4211</p>
              <p>072 920 0198</p>
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-legal-gold mb-2">Email</h3>
              <p className="break-all">litigation@moneoangattorneysinc.co.za</p>
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-legal-gold mb-2">Address</h3>
              <p>No 1 Bankuna Street</p>
              <p>Nkowankowa-A, Letaba 0870</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
