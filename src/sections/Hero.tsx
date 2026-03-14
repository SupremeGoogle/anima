import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F0E8] via-[#FAF7F2] to-[#F0E8DC]">
      {/* Decorative floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C75B39]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2D5A4A]/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#C75B39]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-cafe.jpg"
          alt="Анима кафе интерьер"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8]/80 via-[#F5F0E8]/60 to-[#F5F0E8]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Brand */}
          <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl text-[#C75B39] mb-4 drop-shadow-sm">
            Анима
          </h1>
          
          {/* Tagline */}
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#2C2420] mb-6">
            Уютное кафе в сердце Калининграда
          </p>
          
          {/* Features */}
          <p className="font-body text-lg sm:text-xl text-[#6B5D54] mb-8">
            Итальянская кухня · Завтраки · Пицца · Паста
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-[#C75B39]" />
              <span className="text-sm text-[#2C2420]">09:00 — 21:00</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-[#C75B39]" />
              <span className="text-sm text-[#2C2420]">Дачная ул., 5</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Phone className="w-4 h-4 text-[#C75B39]" />
              <span className="text-sm text-[#2C2420]">+7 911 459-07-34</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContacts}
              className="bg-[#C75B39] hover:bg-[#A84A2D] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Заказать онлайн
            </Button>
            <Button
              onClick={scrollToMenu}
              variant="outline"
              className="border-2 border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Посмотреть меню
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={scrollToMenu}
            className="flex flex-col items-center text-[#6B5D54] hover:text-[#C75B39] transition-colors"
          >
            <span className="text-sm mb-2">Листайте вниз</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
