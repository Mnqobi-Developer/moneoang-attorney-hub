
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Cases Won' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards and maintain complete transparency in all our dealings.'
    },
    {
      title: 'Excellence',
      description: 'Our commitment to legal excellence ensures the best possible outcomes for our clients.'
    },
    {
      title: 'Dedication',
      description: 'We are dedicated to fighting for justice and protecting our clients\' rights and interests.'
    },
    {
      title: 'Accessibility',
      description: 'Legal services should be accessible to everyone. We offer flexible payment options and multilingual support.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            About Moneoang SM Attorneys Inc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established as a premier legal practice in Letaba, we provide comprehensive legal services 
            with a commitment to excellence, integrity, and client satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-legal-gold/10 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <span className="font-playfair text-2xl font-bold text-legal-navy">
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-playfair text-3xl font-bold text-legal-navy mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Moneoang SM Attorneys Inc was founded with a vision to provide exceptional legal services 
                to the communities of Letaba and surrounding areas. Our practice has grown from a small 
                local firm to a respected legal institution known for its professional excellence and 
                commitment to justice.
              </p>
              <p>
                We understand that legal matters can be overwhelming and stressful. That's why we've 
                built our practice around the principle of putting our clients first. Every case we handle 
                receives our full attention and expertise, regardless of its size or complexity.
              </p>
              <p>
                Our multilingual team is fluent in English, Afrikaans, and several African languages, 
                ensuring that language is never a barrier to accessing quality legal representation. 
                We serve clients from all walks of life with equal dedication and respect.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-3xl font-bold text-legal-navy mb-6">
              Our Mission
            </h3>
            <div className="bg-legal-gold/10 p-6 rounded-lg mb-6">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "To provide accessible, professional, and effective legal solutions while upholding 
                the highest standards of legal ethics and client service. We are committed to being 
                your trusted legal partner in achieving justice and protecting your rights."
              </p>
            </div>
            
            <div className="space-y-3">
              <Badge className="bg-legal-navy text-white">Multilingual Service</Badge>
              <Badge className="bg-legal-gold text-legal-navy ml-2">Community Focused</Badge>
              <Badge className="bg-legal-navy text-white ml-2">Professional Excellence</Badge>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="font-playfair text-3xl font-bold text-legal-navy text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-legal-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-legal-gold rounded-full"></div>
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-legal-navy mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-legal-navy to-legal-navy-light p-8 rounded-2xl text-white">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Experience the Difference
            </h3>
            <p className="text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their legal matters. 
              Let us help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-8 py-3 rounded-lg transition-colors">
                Schedule a Meeting
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-legal-navy px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
