
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Received!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        caseType: '',
        message: '',
        urgency: 'normal'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const caseTypes = [
    'Civil Litigation',
    'Criminal Litigation',
    'Family Law',
    'Immigration Law',
    'Unlawful Arrest',
    'Debt Collection',
    'RAF Claims',
    'Tribal Authority\'s Law',
    'Estate Administration',
    'Labour Law',
    'Contract Drafting',
    'General Consultation'
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-legal-navy to-legal-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Contact Our Legal Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your legal matter? Get in touch with our experienced attorneys 
            for professional legal advice and representation.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="xl:col-span-1 space-y-6">
            <Card className="bg-white/10 border-legal-gold/30 text-white">
              <CardHeader>
                <CardTitle className="font-playfair text-legal-gold text-lg sm:text-xl">Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    No 1 Bankuna Street<br />
                    Nkowankowa-A<br />
                    Letaba 0870
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Phone Numbers</h4>
                  <p className="text-gray-300 text-sm sm:text-base">076 720 4211</p>
                  <p className="text-gray-300 text-sm sm:text-base">072 920 0198</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-300 break-all text-sm sm:text-base">
                    litigation@moneoangattorneysinc.co.za
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-legal-gold mb-2 text-sm sm:text-base">Office Hours</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Emergency Only
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-legal-gold/20 border-legal-gold text-white">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-playfair font-semibold text-legal-gold mb-3 text-sm sm:text-base">
                  Emergency Legal Assistance
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mb-4">
                  For urgent legal matters requiring immediate attention, 
                  call our emergency hotline.
                </p>
                <Badge className="bg-red-600 text-white text-xs sm:text-sm">24/7 Emergency: 076 720 4211</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="font-playfair text-xl sm:text-2xl text-legal-navy">
                  Request Legal Consultation
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm sm:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-2 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        required
                        className="mt-2 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2 text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="caseType" className="text-sm sm:text-base">Legal Matter Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('caseType', value)}>
                        <SelectTrigger className="mt-2 text-sm sm:text-base">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          {caseTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency" className="text-sm sm:text-base">Urgency Level</Label>
                      <Select 
                        value={formData.urgency} 
                        onValueChange={(value) => handleInputChange('urgency', value)}
                      >
                        <SelectTrigger className="mt-2 text-sm sm:text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="normal">Normal - Standard consultation</SelectItem>
                          <SelectItem value="high">High - Urgent matter</SelectItem>
                          <SelectItem value="emergency">Emergency - Immediate assistance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm sm:text-base">Describe Your Legal Matter *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your legal matter. Include relevant dates, parties involved, and specific questions you have."
                      required
                      className="mt-2 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                    />
                  </div>

                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <strong>Confidentiality Notice:</strong> All information shared through this form 
                      is treated with strict confidentiality and attorney-client privilege applies 
                      once we begin representing you.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold text-sm sm:text-base py-3 sm:py-4"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message & Request Consultation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
