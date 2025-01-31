import { Button } from "./ui/button";
import { MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-bookstore-navy text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
            Discover Your Next Favorite Book at Sahjahan Book House
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-bookstore-beige">
            Your premier destination for books in Pandua, Hooghly. Browse through our extensive collection
            of academic books, novels, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-bookstore-beige text-bookstore-navy hover:bg-white">
              Browse Books
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-bookstore-beige pt-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Joypur Road, Near Water Tank, Pandua, Hooghly</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>Open: 10:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;