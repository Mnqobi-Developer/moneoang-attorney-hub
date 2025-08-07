
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'S.M. Moneoang',
      title: 'Principal Attorney',
      specialties: ['Civil Litigation', 'Criminal Law', 'Constitutional Law'],
      experience: '15+ years',
      education: 'LLB (University of the Witwatersrand), Admitted Attorney of the High Court',
      languages: ['English', 'Afrikaans', 'Sepedi', 'Tsonga'],
      description: 'Principal attorney with extensive experience in litigation and a passion for justice. Specializes in complex civil and criminal matters.',
      achievements: ['High Court Advocate', 'Legal Aid Board Panel Attorney', 'Community Legal Clinic Volunteer'],
      photo: '/lovable-uploads/1635f183-a069-48b6-b09f-48096390ee1d.png'
    },
    {
      id: 2,
      name: 'T.R. Maluleke',
      title: 'Senior Associate',
      specialties: ['Family Law', 'Immigration Law', 'Estate Planning'],
      experience: '10+ years',
      education: 'LLB (University of Limpopo), Postgraduate Diploma in Immigration Law',
      languages: ['English', 'Afrikaans', 'Tsonga', 'Venda'],
      description: 'Dedicated family law specialist with a compassionate approach to sensitive legal matters. Expert in immigration procedures.',
      achievements: ['Family Mediation Certificate', 'Immigration Specialist Certification', 'Women\'s Rights Advocate']
    },
    {
      id: 3,
      name: 'P.K. Mathebula',
      title: 'Associate Attorney',
      specialties: ['Labour Law', 'Debt Collection', 'Commercial Law'],
      experience: '8+ years',
      education: 'LLB (University of Pretoria), Labour Law Certificate (UNISA)',
      languages: ['English', 'Afrikaans', 'Sepedi', 'Tsonga'],
      description: 'Labour law expert with extensive experience in employment disputes and commercial transactions.',
      achievements: ['CCMA Arbitrator', 'Commercial Litigation Specialist', 'Small Business Legal Advisor']
    },
    {
      id: 4,
      name: 'N.A. Chauke',
      title: 'Junior Attorney',
      specialties: ['RAF Claims', 'Personal Injury', 'Administrative Law'],
      experience: '5+ years',
      education: 'LLB (University of Venda), Certificate in Personal Injury Law',
      languages: ['English', 'Tsonga', 'Sepedi', 'Venda'],
      description: 'Rising star specializing in Road Accident Fund claims and personal injury litigation. Known for thorough case preparation.',
      achievements: ['RAF Claims Specialist', 'Personal Injury Advocate', 'Pro Bono Service Award']
    }
  ];

  return (
    <section id="team" className="py-20 bg-legal-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Meet Our Legal Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced attorneys combine legal expertise with a deep understanding of our 
            community's needs. Each team member brings unique skills and dedication to serving our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-legal-gold"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-legal-gold/20 rounded-full flex items-center justify-center">
                          <span className="font-playfair text-2xl font-bold text-legal-navy">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-legal-gold font-semibold text-lg mb-2">
                      {member.title}
                    </p>
                    <Badge className="bg-legal-navy text-white">
                      {member.experience} Experience
                    </Badge>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-legal-navy mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="border-legal-gold text-legal-navy">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Education */}
                  <div>
                    <h4 className="font-semibold text-legal-navy mb-2">Education & Qualifications</h4>
                    <p className="text-sm text-gray-600">
                      {member.education}
                    </p>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="font-semibold text-legal-navy mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.languages.map((language, index) => (
                        <span key={index} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-legal-navy mb-2">Notable Achievements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-legal-gold rounded-full mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <Button className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold">
                    Consult with {member.name.split(' ')[0]}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-legal-navy p-8 rounded-2xl text-white text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
            Our Team Commitment
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Every member of our team is committed to providing exceptional legal services with integrity, 
            professionalism, and a deep understanding of our clients' needs. We work collaboratively to 
            ensure the best possible outcomes for every case.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="font-semibold text-legal-gold mb-2">Multilingual Service</h4>
              <p className="text-sm text-gray-300">
                Our team speaks multiple languages to serve our diverse community effectively.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-legal-gold mb-2">Continuous Learning</h4>
              <p className="text-sm text-gray-300">
                We stay updated with the latest legal developments and best practices.
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
