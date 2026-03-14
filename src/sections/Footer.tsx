import { Coffee, Instagram, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Меню', href: '#menu' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2420] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-script text-4xl text-[#C75B39] mb-4">Анима</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Уютное кафе с итальянской кухней в Калининграде. Завтраки, пицца, паста и многое другое.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#C75B39] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#C75B39] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C75B39] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Дачная улица, 5, 1 этаж<br />
                  Калининград, 236003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C75B39] flex-shrink-0" />
                <a
                  href="tel:+79114590734"
                  className="text-white/70 hover:text-[#C75B39] transition-colors"
                >
                  +7 911 459-07-34
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-[#C75B39] flex-shrink-0" />
                <span className="text-white/70">
                  Ежедневно 09:00 — 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Анима. Все права защищены.
          </p>
          <p className="text-white/50 text-sm">
            Сделано с ❤️ в Калининграде
          </p>
        </div>
      </div>
    </footer>
  );
}
