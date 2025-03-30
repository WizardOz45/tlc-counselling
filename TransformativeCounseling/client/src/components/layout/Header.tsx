import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { basePath } from "../../basePath";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all ${
        scrolled ? "shadow py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl md:text-2xl font-heading font-semibold tracking-tight cursor-pointer">
            TLC Counselling
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
            >
              <span className={`font-medium hover:text-[#8A9A5B] transition-all cursor-pointer ${location === item.href ? 'text-[#8A9A5B]' : ''}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              >
                <span 
                  className={`block font-medium hover:text-[#8A9A5B] transition-all py-2 cursor-pointer ${location === item.href ? 'text-[#8A9A5B]' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
