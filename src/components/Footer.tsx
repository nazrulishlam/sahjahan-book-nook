import { BookOpen, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bookstore-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Sahjahan Book House</span>
            </div>
            <p className="text-bookstore-beige">
              Your trusted source for books in Pandua, Hooghly.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-bookstore-beige hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#books" className="text-bookstore-beige hover:text-white transition-colors">
                  Books
                </a>
              </li>
              <li>
                <a href="#contact" className="text-bookstore-beige hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                  Grammar Books
                </a>
              </li>
              <li>
                <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                  English Books
                </a>
              </li>
              <li>
                <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                  Novels
                </a>
              </li>
              <li>
                <a href="#" className="text-bookstore-beige hover:text-white transition-colors">
                  Academic Books
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-bookstore-beige">
              <li>Saturday - Thursday</li>
              <li>10:00 AM - 8:00 PM</li>
              <li>Friday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-bookstore-beige">
          <p>&copy; 2024 Sahjahan Book House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
