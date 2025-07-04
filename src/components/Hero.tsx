
import { Button } from '@/components/ui/button';
import { Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    '/lovable-uploads/6bbbd66e-2a23-433b-95de-706cda27b90f.png',
    '/lovable-uploads/dee916a2-190c-4d38-ab8e-b61995a6bb67.png'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Swiper */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Courthouse ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-legal-navy/80"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet and desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-1.5 md:p-2 rounded-full transition-all duration-200 hidden md:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-1.5 md:p-2 rounded-full transition-all duration-200 hidden md:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-legal-gold' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            Solution To Your{' '}
            <span className="text-legal-gold">Legal Problems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Expert legal representation in Letaba. Specializing in civil litigation, family law, immigration, and comprehensive legal services.
          </p>

          {/* Service Types */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <span className="bg-legal-gold/20 text-legal-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Boramelao
            </span>
            <span className="bg-legal-gold/20 text-legal-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Vaylmeri
            </span>
            <span className="bg-legal-gold/20 text-legal-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Prokureurs
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-auto w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-legal-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-auto w-full sm:w-auto"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Our Services
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center animate-fade-in px-4" style={{ animationDelay: '0.8s' }}>
            <div className="text-white">
              <h3 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Phone</h3>
              <p className="text-sm sm:text-base">076 720 4211</p>
              <p className="text-sm sm:text-base">072 920 0198</p>
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Email</h3>
              <p className="break-all text-xs sm:text-sm md:text-base">litigation@moneoangattorneysinc.co.za</p>
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Address</h3>
              <p className="text-sm sm:text-base">No 1 Bankuna Street</p>
              <p className="text-sm sm:text-base">Nkowankowa-A, Letaba 0870</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
