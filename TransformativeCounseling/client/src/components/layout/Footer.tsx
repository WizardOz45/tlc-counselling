import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";
import { basePath } from "../../basePath";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">TLC Counselling</h3>
            <p className="mb-6">
              Transforming Lives Collaboratively through Dr. Tracy Lee Kalebs' compassionate, professional counselling services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#8A9A5B] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#8A9A5B] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#8A9A5B] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Resources</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Individual Therapy</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Couples Counselling</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Trauma-Informed Care</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Cognitive Behavioral Therapy</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Mindfulness-Based Therapy</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A9A5B] transition-all">
                  <span className="cursor-pointer">Online Counselling</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Information */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 flex-shrink-0" size={18} />
                <span>
                  123 Healing Way, Suite 201
                  <br />
                  Serenity Heights, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <span>contact@tlccounselling.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Transforming Lives Collaboratively Counselling. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="text-white hover:text-[#8A9A5B] transition-all mx-2">
              <span className="cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms" className="text-white hover:text-[#8A9A5B] transition-all mx-2">
              <span className="cursor-pointer">Terms of Service</span>
            </Link>
            <Link href="/accessibility" className="text-white hover:text-[#8A9A5B] transition-all mx-2">
              <span className="cursor-pointer">Accessibility</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
