import { ContactForm } from "@/components/ContactForm";
import { Mail, Clock, Building } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Have a question or want to discuss a project? We're here to help and
            would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Mail className="w-6 h-6 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">
              eng.abdulwahab7@gmail.com
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Clock className="w-6 h-6 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Building className="w-6 h-6 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Software Company</h3>
            <p className="text-sm text-muted-foreground">
              Professional Software
              <br />
              Development Services
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
