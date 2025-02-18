import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-bookstore-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-bookstore-navy mb-6">Contact Us</h2>
            <p className="text-bookstore-text mb-8">
              Have a question about book availability or want to get in touch? Fill out the form below
              or use our contact information.
            </p>
            <div className="space-y-4">
              <Card className="p-4 flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-bookstore-navy" />
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Address</h3>
                  <p className="text-bookstore-text">Joypur Road, Near Water Tank, Pandua, Hooghly</p>
                </div>
              </Card>
              <Card className="p-4 flex items-start space-x-4">
                <Phone className="h-6 w-6 text-bookstore-navy" />
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Phone</h3>
                  <p className="text-bookstore-text">+91 9475063722</p>
                </div>
              </Card>
              <Card className="p-4 flex items-start space-x-4">
                <Mail className="h-6 w-6 text-bookstore-navy" />
                <div>
                  <h3 className="font-semibold text-bookstore-navy">Email</h3>
                  <p className="text-bookstore-text">nazrulpandua@gmail.com</p>
                </div>
              </Card>
            </div>
          </div>
          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-white" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-white" />
              </div>
              <div>
                <Input placeholder="Subject" className="bg-white" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-white"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-bookstore-navy hover:bg-bookstore-navy/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
