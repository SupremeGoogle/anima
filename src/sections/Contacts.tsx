import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Send,
  PhoneCall,
  CreditCard,
  Dog,
  Laptop,
  Package
} from 'lucide-react';

const features = [
  { icon: Dog, text: 'Можно с собакой' },
  { icon: Laptop, text: 'Можно с ноутбуком' },
  { icon: Package, text: 'Заказ навынос' },
  { icon: CreditCard, text: 'Оплата картой' },
];

const messengers = [
  { name: 'WhatsApp', icon: PhoneCall, color: '#25D366', href: 'https://wa.me/79114590734' },
  { name: 'Telegram', icon: Send, color: '#0088cc', href: 'https://t.me/+79114590734' },
];

export function Contacts() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="contacts"
      className="py-20 lg:py-32 bg-[#F5F0E8] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D5A4A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C75B39]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C75B39] font-medium text-sm uppercase tracking-wider">
            Контакты
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#2C2420] mt-2 mb-4">
            Приходите в <span className="text-[#C75B39]">гости</span>!
          </h2>
          <p className="text-[#6B5D54] text-lg max-w-2xl mx-auto">
            Ждём вас каждый день с 9:00 до 21:00
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-[#C75B39]/10 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C75B39]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2C2420] mb-1">
                    Адрес
                  </h3>
                  <p className="text-[#6B5D54]">Дачная улица, 5, 1 этаж</p>
                  <p className="text-[#6B5D54]">Ленинградский район, Калининград, 236003</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-[#2D5A4A]/10 p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#2D5A4A]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2C2420] mb-1">
                    Часы работы
                  </h3>
                  <p className="text-[#6B5D54]">Ежедневно с 09:00 до 21:00</p>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-sm text-[#2D5A4A]">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Сейчас открыто
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
                <div className="bg-[#C75B39]/10 p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#C75B39]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2C2420] mb-1">
                    Телефон
                  </h3>
                  <a 
                    href="tel:+79114590734" 
                    className="text-[#6B5D54] hover:text-[#C75B39] transition-colors text-lg"
                  >
                    +7 911 459-07-34
                  </a>
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-semibold text-[#2C2420] mb-4">
                Заказать онлайн
              </h3>
              <div className="flex gap-3">
                {messengers.map((messenger) => (
                  <a
                    key={messenger.name}
                    href={messenger.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <messenger.icon 
                      className="w-5 h-5" 
                      style={{ color: messenger.color }}
                    />
                    <span className="font-medium text-[#2C2420]">{messenger.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full"
                >
                  <feature.icon className="w-4 h-4 text-[#C75B39]" />
                  <span className="text-sm text-[#2C2420]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Map placeholder */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#2D5A4A]/20 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/contact-exterior.jpg"
                  alt="Анима кафе снаружи"
                  className="w-full object-cover aspect-video"
                />
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-display text-2xl mb-2">Ждём вас!</p>
                    <p className="text-white/80">Дачная улица, 5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a
                href="https://yandex.ru/maps/-/CHQ1z0KK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full border-[#2C2420] text-[#2C2420] hover:bg-[#2C2420] hover:text-white rounded-full py-6"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Построить маршрут
                </Button>
              </a>
              <a href="tel:+79114590734">
                <Button
                  className="w-full bg-[#C75B39] hover:bg-[#A84A2D] text-white rounded-full py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
