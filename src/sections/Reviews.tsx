import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  date: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: 'Пицца просто пушка. Кофе тоже отличный. Очень приветливый персонал. А ещё там очень вкусный хлеб. Короче, место рекомендую однозначно.',
    author: 'Юрий К.',
    date: '9 февраля 2026',
    rating: 5,
  },
  {
    text: 'Не дорого и вкусно! Чисто и тихо! Спасибо !!!',
    author: 'Ксения А.',
    date: '30 января 2026',
    rating: 5,
  },
  {
    text: 'Накормили в обед от души. Вкусно и приятно. Ела супчик пюре грибной, вкусно. Фрикадельки хороши, короче все съедобно, место приятное, чисто и светло.',
    author: 'Владислав П.',
    date: '25 января 2026',
    rating: 5,
  },
  {
    text: 'Боже, насколько это замечательное и уютное место. Прихожу сюда не первый раз и всегда после посещения остается приятное послевкусие.',
    author: 'Elena E.',
    date: '9 января 2026',
    rating: 5,
  },
  {
    text: 'Очень вкусная пицца, капучино и облепиховый чай. Уютно и тепло. Спасибо за атмосферу!',
    author: 'Анастасия З.',
    date: '29 декабря 2025',
    rating: 5,
  },
  {
    text: 'Борщ пушка, пицца очень хороша! Обслуживание тоже на высоте. Это не просто кафе, тут можно прям полноценно покушать до сыта. Еще и dog friendly!',
    author: 'Марат Н.',
    date: '18 декабря 2025',
    rating: 5,
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full bg-white border-none shadow-lg hover-lift">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="w-8 h-8 text-[#C75B39]/30 mb-4" />
        <p className="text-[#2C2420] leading-relaxed flex-grow mb-6">{review.text}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display font-semibold text-[#2C2420]">{review.author}</p>
            <p className="text-sm text-[#6B5D54]">{review.date}</p>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#C75B39] fill-[#C75B39]" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Reviews() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const [currentPage, setCurrentPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, totalPages]);

  const visibleReviews = reviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPrev = () => {
    setAutoplay(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setAutoplay(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#C75B39]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C75B39] font-medium text-sm uppercase tracking-wider">
            Отзывы
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#2C2420] mt-2 mb-4">
            Что говорят <span className="text-[#C75B39]">гости</span>
          </h2>
          <p className="text-[#6B5D54] text-lg max-w-2xl mx-auto">
            Мы ценим каждого гостя и благодарны за ваши тёплые слова
          </p>
        </div>

        {/* Reviews carousel */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleReviews.map((review, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full border-[#C75B39] text-[#C75B39] hover:bg-[#C75B39] hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentPage(i);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentPage
                      ? 'bg-[#C75B39] w-8'
                      : 'bg-[#C75B39]/30 hover:bg-[#C75B39]/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-[#C75B39] text-[#C75B39] hover:bg-[#C75B39] hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
