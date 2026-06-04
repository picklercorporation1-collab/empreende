'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'João Silva',
    position: 'Diretor de TI',
    company: 'Prefeitura de Brusque',
    text: 'A SFD Tech transformou completamente nossa infraestrutura. Com o novo sistema, eliminamos totalmente as quedas de energia e garantimos a continuidade dos serviços públicos. Excelente atendimento!',
    image: '👨‍💼',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Costa',
    position: 'Gerente de Operações',
    company: 'Hospital Regional',
    text: 'Confiamos na SFD Tech para proteger sistemas críticos de vida. Com 99,9% de disponibilidade garantida, podemos focar na assistência aos pacientes sem preocupação com quedas de energia.',
    image: '👩‍⚕️',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    position: 'Coordenador de Infraestrutura',
    company: 'SAMAE',
    text: 'A solução implementada pela SFD Tech superou nossas expectativas. O monitoramento inteligente nos permite antecipar problemas e manter a qualidade do fornecimento de água ininterruptamente.',
    image: '👨‍🔧',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ana Pereira',
    position: 'CTO',
    company: 'Data Center XYZ',
    text: 'Profissionalismo em primeiro lugar! A equipe da SFD Tech demonstrou expertise incomparável na implementação. Somos muito satisfeitos com o suporte 24/7 que continuamos recebendo.',
    image: '👩‍💻',
    rating: 5,
  },
  {
    id: 5,
    name: 'Roberto Santos',
    position: 'Diretor Administrativo',
    company: 'Universidade Federal',
    text: 'Implementar uma rede corporativa robusta foi essencial para nossa instituição. A SFD Tech entregou tudo no prazo e com qualidade excepcional. Recomendo fortemente!',
    image: '👨‍🎓',
    rating: 5,
  },
];

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0.3, x: isActive ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full"
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      <div className="relative p-8 rounded-2xl border border-accent/20 bg-secondary/40 backdrop-blur-xl h-full">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-accent/20 text-4xl mb-4" />

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400" size={16} />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="text-4xl">{testimonial.image}</div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.position}</p>
            <p className="text-accent text-sm font-semibold">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-accent">clientes</span> dizem
          </h2>
          <p className="text-gray-400 text-lg">
            Confiança conquistada através da excelência e resultados
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-96 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-3 flex-wrap"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-accent w-8'
                  : 'bg-accent/30 hover:bg-accent/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-accent/20 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <p className="text-gray-400">Clientes Satisfeitos</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <p className="text-gray-400">Taxa de Aprovação</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">15</div>
            <p className="text-gray-400">Anos em Negócio</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
