import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'breakfast',
    label: 'Завтраки',
    items: [
      {
        name: 'Скрэмбл на бриошь',
        description: 'Воздушный скрэмбл с беконом, вялеными томатами и фирменным соусом на домашней бриоши',
        price: '460 ₽',
        image: '/images/menu-scramble.jpg',
      },
      {
        name: 'Шакшука',
        description: 'Два яйца в сочном томатном соусе с перцем, луком и хрустящими тостами',
        price: '460 ₽',
        image: '/images/menu-shakshuka.jpg',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Паста',
    items: [
      {
        name: 'Паста Карбонара',
        description: 'Классическая итальянская паста с беконом, яйцом, пармезаном и чёрным перцем',
        price: '600 ₽',
        image: '/images/menu-carbonara.jpg',
      },
      {
        name: 'Паста Болоньезе',
        description: 'Спагетти в густом мясном соусе с томатами и ароматными специями',
        price: '590 ₽',
        image: '/images/menu-carbonara.jpg',
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Пицца',
    items: [
      {
        name: 'Маргарита',
        description: 'Классическая пицца с томатным соусом, моцареллой и свежим базиликом',
        price: '690 ₽',
        image: '/images/menu-margherita.jpg',
      },
      {
        name: 'Пепперони',
        description: 'Пикантная пицца с колбасой пепперони, халапеньо, красным луком и орегано',
        price: '1 120 ₽',
        image: '/images/menu-pepperoni.jpg',
      },
    ],
  },
  {
    id: 'soups',
    label: 'Супы',
    items: [
      {
        name: 'Томатный суп',
        description: 'Насыщенный суп из томатов со сливками, свежей кинзой и базиликом',
        price: '350 ₽',
        image: '/images/menu-soup.jpg',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Напитки',
    items: [
      {
        name: 'Флэт Уайт',
        description: 'Двойной эспрессо с молоком и нежной микропеной',
        price: '280 ₽',
        image: '/images/menu-flatwhite.jpg',
      },
    ],
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-display text-xl font-semibold text-[#2C2420] group-hover:text-[#C75B39] transition-colors">
            {item.name}
          </h3>
          <span className="font-display text-xl font-bold text-[#C75B39]">{item.price}</span>
        </div>
        <p className="text-[#6B5D54] text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export function Menu() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const [activeTab, setActiveTab] = useState('breakfast');

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-20 lg:py-32 bg-[#F5F0E8] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C75B39]/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D5A4A]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C75B39] font-medium text-sm uppercase tracking-wider">
            Меню
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#2C2420] mt-2 mb-4">
            Наши <span className="text-[#C75B39]">блюда</span>
          </h2>
          <p className="text-[#6B5D54] text-lg max-w-2xl mx-auto">
            Готовим с душой из свежих ингредиентов. Попробуйте наши фирменные блюда!
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div
            className={`flex justify-center mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TabsList className="bg-white/80 backdrop-blur-sm p-2 rounded-full flex flex-wrap justify-center gap-1 shadow-lg">
              {menuData.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 rounded-full font-medium text-sm transition-all data-[state=active]:bg-[#C75B39] data-[state=active]:text-white data-[state=inactive]:text-[#6B5D54] data-[state=inactive]:hover:bg-[#F5F0E8]"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <MenuCard key={item.name} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Full menu hint */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6B5D54]">
            Полное меню доступно в кафе и по запросу в мессенджерах
          </p>
        </div>
      </div>
    </section>
  );
}
