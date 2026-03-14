import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Coffee, Truck, Dog, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Завтраки весь день',
    description: 'Скрэмбл, шакшука и другие завтраки доступны до закрытия',
  },
  {
    icon: Clock,
    title: 'Бизнес-ланч',
    description: 'С 12:00 до 16:00 — сытные обеды от 300 ₽',
  },
  {
    icon: Truck,
    title: 'Доставка и навынос',
    description: 'Заберите с собой или закажите доставку',
  },
  {
    icon: Dog,
    title: 'Dog friendly',
    description: 'Приходите с питомцами — мы их любим!',
  },
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C75B39]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D5A4A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#C75B39]/20 rounded-3xl" />
              <img
                src="/images/about-breakfast.jpg"
                alt="Завтрак в Анима"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-[#C75B39]/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-[#C75B39] fill-[#C75B39]" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[#2C2420]">4.9</p>
                  <p className="text-sm text-[#6B5D54]">Рейтинг на Яндексе</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-[#C75B39] font-medium text-sm uppercase tracking-wider">
              О нас
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#2C2420] mt-2 mb-6">
              Место, где встречаются <span className="text-[#C75B39]">вкус</span> и{' '}
              <span className="text-[#2D5A4A]">уют</span>
            </h2>
            <p className="text-[#6B5D54] text-lg leading-relaxed mb-8">
              Анима — это место, где встречаются вкусная еда, тёплая атмосфера и искреннее
              гостеприимство. Мы готовим с душой: от утреннего скрэмбла до вечерней пиццы.
              Приходите завтракать, обедать и ужинать — у нас всегда рады вам!
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="bg-[#F5F0E8] p-3 rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#C75B39]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#2C2420] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#6B5D54]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
