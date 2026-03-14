import { useEffect, useState } from 'react';
import './App.css';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Menu } from './sections/Menu';
import { Reviews } from './sections/Reviews';
import { Contacts } from './sections/Contacts';
import { Footer } from './sections/Footer';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Меню', href: '#menu' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Fixed Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-script text-3xl text-[#C75B39]"
            >
              Анима
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-[#C75B39] ${
                    isScrolled ? 'text-[#2C2420]' : 'text-[#2C2420]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="tel:+79114590734">
                <Button
                  className={`rounded-full transition-all ${
                    isScrolled
                      ? 'bg-[#C75B39] hover:bg-[#A84A2D] text-white'
                      : 'bg-[#C75B39] hover:bg-[#A84A2D] text-white'
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#2C2420]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#2C2420]/10 pt-4 animate-fade-in-up">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left font-medium text-[#2C2420] hover:text-[#C75B39] transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <a href="tel:+79114590734">
                  <Button className="w-full bg-[#C75B39] hover:bg-[#A84A2D] text-white rounded-full mt-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Contacts />
      </main>

      <Footer />

      {/* Floating CTA for mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <a href="tel:+79114590734">
          <Button className="bg-[#C75B39] hover:bg-[#A84A2D] text-white rounded-full shadow-xl px-6 py-6">
            <Phone className="w-5 h-5 mr-2" />
            Позвонить
          </Button>
        </a>
      </div>
    </div>
  );
}

export default App;
