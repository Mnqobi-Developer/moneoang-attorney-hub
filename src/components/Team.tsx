
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'S.M. Moneoang',
      title: 'Senior Partner & Founder',
      specialties: ['Civil Litigation', 'Criminal Law', 'Constitutional Law'],
      experience: '15+ years',
      education: 'LLB (University of the Witwatersrand), Admitted Attorney of the High Court',
      languages: ['English', 'Afrikaans', 'Sepedi', 'Tsonga'],
      description: 'Principal attorney with extensive experience in litigation and a passion for justice. Specializes in complex civil and criminal matters.',
      achievements: ['High Court Advocate', 'Legal Aid Board Panel Attorney', 'Community Legal Clinic Volunteer'],
      photo: '/lovable-uploads/1635f183-a069-48b6-b09f-48096390ee1d.png'
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
        <div className="flex justify-center">
          <div className="max-w-md w-full">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {/* Photo Section */}
                  <div className="relative h-80 sm:h-96">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-legal-gold/20 flex items-center justify-center">
                        <span className="font-playfair text-6xl font-bold text-legal-navy">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 bg-legal-navy text-white space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-legal-gold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-legal-gold font-semibold text-lg mb-3">
                        {member.title}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 bg-legal-gold rounded-full flex-shrink-0"></div>
                        <span className="text-white font-medium">
                          {member.experience} Experience
                        </span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-legal-gold mb-3">Specialties:</h4>
                      <p className="text-gray-300 mb-4">
                        {member.specialties.join(', ')}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {member.description}
                    </p>

                    {/* Education */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-legal-gold mb-2">Education & Qualifications</h4>
                      <p className="text-sm text-gray-300">
                        {member.education}
                      </p>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-legal-gold mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.languages.map((language, index) => (
                          <span key={index} className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-legal-gold mb-2">Notable Achievements</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
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
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
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
