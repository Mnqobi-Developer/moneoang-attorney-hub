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
      console.log('Submitting form:', formData);
      
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact Form Submission - ${formData.caseType}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Case Type: ${formData.caseType}
Urgency: ${formData.urgency}

Message:
${formData.message}
      `);
      
      window.location.href = `mailto:litigation@moneoangattorneysinc.co.za?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening Email Client",
        description: "We've opened your default email client to send the message.",
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
      console.error('Error opening email client:', error);
      toast({
        title: "Error Opening Email Client",
        description: "Please try again or contact us directly at litigation@moneoangattorneysinc.co.za",
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
    <section id="contact" className="py-20 bg-gradient-to-br from-legal-navy to-legal-navy-light">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Our Legal Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your legal matter? Get in touch with our experienced attorneys 
            for professional legal advice and representation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/10 border-legal-gold/30 text-white">
              <CardHeader>
                <CardTitle className="font-playfair text-legal-gold">Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-legal-gold mb-2">Address</h4>
                  <p className="text-gray-300">
                    No 1 Bankuna Street<br />
                    Nkowankowa-A<br />
                    Letaba 0870
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-gold mb-2">Phone Numbers</h4>
                  <p className="text-gray-300">076 720 4211</p>
                  <p className="text-gray-300">072 920 0198</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-gold mb-2">Email</h4>
                  <p className="text-gray-300 break-all">
                    litigation@moneoangattorneysinc.co.za
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-legal-gold mb-2">Office Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Emergency Only
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-legal-gold/20 border-legal-gold text-white">
              <CardContent className="p-6">
                <h4 className="font-playfair font-semibold text-legal-gold mb-3">
                  Emergency Legal Assistance
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  For urgent legal matters requiring immediate attention, 
                  call our emergency hotline.
                </p>
                <Badge className="bg-red-600 text-white">24/7 Emergency: 076 720 4211</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-legal-navy">
                  Request Legal Consultation
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-2"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        required
                        className="mt-2"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="caseType">Legal Matter Type *</Label>
                      <Select 
                        onValueChange={(value) => handleInputChange('caseType', value)}
                        disabled={isSubmitting}
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          {caseTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select 
                        value={formData.urgency} 
                        onValueChange={(value) => handleInputChange('urgency', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="mt-2">
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
                    <Label htmlFor="message">Describe Your Legal Matter *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your legal matter. Include relevant dates, parties involved, and specific questions you have."
                      required
                      className="mt-2 min-h-[120px]"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Confidentiality Notice:</strong> All information shared through this form 
                      is treated with strict confidentiality and attorney-client privilege applies 
                      once we begin representing you.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Opening Email Client...' : 'Send Message via Email'}
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
