
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Team = () => {
  const attorney = {
    id: 1,
    name: 'S.M. Moneoang',
    title: 'Principal Attorney & Founder',
    specialties: ['Civil Litigation', 'Criminal Law', 'Constitutional Law', 'Personal Injury', 'RAF Claims', 'Labour Law'],
    experience: '15+ years',
    education: 'LLB (University of the Witwatersrand), Admitted Attorney of the High Court',
    languages: ['English', 'Afrikaans', 'Sepedi', 'Tsonga'],
    description: 'Principal attorney and founder of Moneoang S.M. Attorneys Inc. with extensive experience in litigation and a passion for justice. Specializes in complex civil and criminal matters, with a particular focus on constitutional law and personal injury claims.',
    achievements: [
      'High Court Advocate',
      'Legal Aid Board Panel Attorney', 
      'Community Legal Clinic Volunteer',
      'RAF Claims Specialist',
      'Constitutional Law Expert'
    ]
  };

  return (
    <section id="team" className="py-20 bg-legal-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Meet Our Principal Attorney
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by an experienced attorney with a deep understanding of our 
            community's needs and a commitment to delivering exceptional legal services with integrity and professionalism.
          </p>
        </div>

        {/* Attorney Profile */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="w-32 h-32 bg-legal-gold/20 rounded-full flex items-center justify-center">
                    <span className="font-playfair text-4xl font-bold text-legal-navy">
                      SM
                    </span>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div className="text-center lg:text-left">
                    <h3 className="font-playfair text-3xl font-bold text-legal-navy mb-2">
                      {attorney.name}
                    </h3>
                    <p className="text-legal-gold font-semibold text-xl mb-2">
                      {attorney.title}
                    </p>
                    <Badge className="bg-legal-navy text-white">
                      {attorney.experience} Experience
                    </Badge>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-legal-navy mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="border-legal-gold text-legal-navy">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {attorney.description}
                  </p>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Education */}
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2">Education & Qualifications</h4>
                  <p className="text-sm text-gray-600">
                    {attorney.education}
                  </p>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {attorney.languages.map((language, index) => (
                      <span key={index} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-6">
                <h4 className="font-semibold text-legal-navy mb-2">Notable Achievements</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {attorney.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Button */}
              <div className="mt-8">
                <Button className="w-full lg:w-auto bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold">
                  Schedule a Consultation with Mr. Moneoang
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Firm Values */}
        <div className="bg-legal-navy p-8 rounded-2xl text-white text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Mr. Moneoang is committed to providing exceptional legal services with integrity, 
            professionalism, and a deep understanding of our clients' needs. With years of experience 
            and a passion for justice, we ensure the best possible outcomes for every case.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="font-semibold text-legal-gold mb-2">Multilingual Service</h4>
              <p className="text-sm text-gray-300">
                Serving our diverse community in English, Afrikaans, Sepedi, and Tsonga.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-legal-gold mb-2">Continuous Learning</h4>
              <p className="text-sm text-gray-300">
                Staying updated with the latest legal developments and best practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-legal-gold mb-2">Community Focus</h4>
              <p className="text-sm text-gray-300">
                Deep roots in the community with a commitment to accessible legal services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
