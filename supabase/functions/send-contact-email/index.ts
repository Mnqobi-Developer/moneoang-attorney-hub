
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
  urgency: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Send email to company
    const companyEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["litigation@moneoangattorneysinc.co.za"],
      subject: `New Contact Form Submission - ${formData.caseType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Case Type:</strong> ${formData.caseType}</p>
        <p><strong>Urgency:</strong> ${formData.urgency}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This email was sent from the contact form on your website.</em></p>
      `,
    });

    // Send confirmation email to client
    const clientEmailResponse = await resend.emails.send({
      from: "Moneoang SM Attorneys Inc <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting Moneoang SM Attorneys Inc",
      html: `
        <h2>Thank you for contacting us, ${formData.name}!</h2>
        <p>We have received your inquiry about <strong>${formData.caseType}</strong> and will get back to you within 24 hours.</p>
        
        <h3>Your submission details:</h3>
        <p><strong>Case Type:</strong> ${formData.caseType}</p>
        <p><strong>Urgency Level:</strong> ${formData.urgency}</p>
        <p><strong>Your Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><strong>Contact Information:</strong></p>
        <p>Phone: 076 720 4211 / 072 920 0198</p>
        <p>Email: litigation@moneoangattorneysinc.co.za</p>
        <p>Address: No 1 Bankuna Street, Nkowankowa-A, Letaba 0870</p>
        
        <p>Best regards,<br>Moneoang SM Attorneys Inc</p>
      `,
    });

    console.log("Company email sent:", companyEmailResponse);
    console.log("Client confirmation email sent:", clientEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
