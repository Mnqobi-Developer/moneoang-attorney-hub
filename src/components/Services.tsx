import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'litigation', name: 'Litigation' },
    { id: 'family', name: 'Family Law' },
    { id: 'immigration', name: 'Immigration' },
    { id: 'estate', name: 'Estate Planning' },
    { id: 'business', name: 'Business Law' }
  ];

  const services = [
    {
      id: 1,
      title: 'Civil Litigation',
      description: 'Comprehensive representation in civil disputes, contract breaches, and commercial litigation.',
      category: 'litigation',
      features: ['Contract disputes', 'Commercial litigation', 'Debt recovery', 'Property disputes']
    },
    {
      id: 2,
      title: 'Criminal Litigation',
      description: 'Expert criminal defense representation for all types of criminal charges.',
      category: 'litigation',
      features: ['Criminal defense', 'Bail applications', 'Court representation', 'Legal advice']
    },
    {
      id: 3,
      title: 'Family Law',
      description: 'Sensitive and professional handling of family-related legal matters.',
      category: 'family',
      features: ['Divorce proceedings', 'Child custody', 'Maintenance', 'Domestic violence']
    },
    {
      id: 4,
      title: 'Immigration Law',
      description: 'Complete immigration services for individuals and families.',
      category: 'immigration',
      features: ['Visa applications', 'Permanent residence', 'Citizenship', 'Work permits']
    },
    {
      id: 5,
      title: 'Unlawful Arrest',
      description: 'Protection of your constitutional rights in cases of unlawful detention.',
      category: 'litigation',
      features: ['Rights protection', 'Compensation claims', 'Police misconduct', 'Urgent relief']
    },
    {
      id: 6,
      title: 'Debt Collection',
      description: 'Efficient debt recovery services for businesses and individuals.',
      category: 'business',
      features: ['Debt recovery', 'Payment plans', 'Legal notices', 'Court proceedings']
    },
    {
      id: 7,
      title: 'RAF Claims',
      description: 'Road Accident Fund claims for motor vehicle accident victims.',
      category: 'litigation',
      features: ['Accident claims', 'Medical assessments', 'Compensation', 'Court representation']
    },
    {
      id: 8,
      title: 'Tribal Authority\'s Law',
      description: 'Specialized knowledge in traditional and customary law matters.',
      category: 'family',
      features: ['Customary law', 'Traditional marriages', 'Tribal disputes', 'Cultural rights']
    },
    {
      id: 9,
      title: 'Administration of Deceased Estates',
      description: 'Professional estate administration and winding up services.',
      category: 'estate',
      features: ['Estate planning', 'Will execution', 'Probate', 'Asset distribution']
    },
    {
      id: 10,
      title: 'Labour Law & Arbitration',
      description: 'Employment law matters and dispute resolution.',
      category: 'business',
      features: ['Employment disputes', 'CCMA representation', 'Labour advice', 'Arbitration']
    },
    {
      id: 11,
      title: 'Drafting of Wills & Contracts',
      description: 'Professional legal document preparation and review.',
      category: 'estate',
      features: ['Will drafting', 'Contract preparation', 'Legal review', 'Document notarization']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-legal-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-legal-navy mb-4 sm:mb-6">
            Our Legal Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to meet your specific needs. 
            Our experienced attorneys provide expert representation across multiple practice areas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5
                ${selectedCategory === category.id 
                  ? 'bg-legal-gold hover:bg-legal-gold/90 text-legal-navy' 
                  : 'border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white'
                }
              `}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <CardTitle className="font-playfair text-lg sm:text-xl text-legal-navy leading-tight">
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-legal-gold/20 text-legal-navy text-xs flex-shrink-0">
                    {categories.find(cat => cat.id === service.category)?.name}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-legal-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-legal-navy hover:bg-legal-navy-light text-white text-sm sm:text-base py-2 sm:py-3">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-legal-navy p-6 sm:p-8 rounded-2xl text-white">
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300">
              Contact us today for a consultation. We're here to help solve your legal problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold text-sm sm:text-base py-3 sm:py-4">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal-navy text-sm sm:text-base py-3 sm:py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
